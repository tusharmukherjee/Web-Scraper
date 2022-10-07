const puppeteer = require("puppeteer");
const fs = require("fs");
// let buffer = fs.readFileSync('./newZomData2.json');
// let zomData = JSON.parse(buffer);
let baseUrl = "https://www.zomato.com";
const writeExcell = require("./toExcel");

// zomData
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36"
  );
  await page.goto("https://www.zomato.com/chennai/potheri-restaurants?category=1&delivery_subzone=1884&place_name=Kattankulathur%2C++GST+Road%2C++India");

  await page.evaluate(() => window.scrollBy(0, 5000));
  await page.waitForTimeout(90000);

  const wholeData = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(
        "div.sc-1mo3ldo-0 > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)"
      )
    ).map((partner) => {
      const splitArr = partner.innerText.split("\n");
      const link = partner.href;
      const newarr = splitArr.filter((blank) => blank != "");
      const ventureName = newarr[0];
      const rating = newarr[1];
      const categories = newarr[2].split(",");
      let numberOfOrders;
      if (
        newarr[newarr.length - 1].search(
          "orders placed from here recently"
        ) !== -1
      ) {
        numberOfOrders = parseInt(
          newarr[newarr.length - 1].replace(/\D/g, "")
        );
      } else {
        numberOfOrders = 0;
      }
      return {
        ventureName,
        rating,
        categories,
        numberOfOrders,
        link
      };
    });
  });

  console.log(wholeData);
  Promise.all(wholeData.sort(function(a,b){
    if(a.numberOfOrders > b.numberOfOrders){
      return 1;
    }
    return -1;
  }))
  .then(
  // writeExcell(wholeData, "venturesData");
  fs.writeFileSync("./newZomData2.json", JSON.stringify(wholeData))
  );

  await page.screenshot({ path: "example.png" });
  await browser.close();
})();
