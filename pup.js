const puppeteer = require("puppeteer");
const fs = require("fs");
// let buffer = fs.readFileSync('./newZomData2.json');
// let zomData = JSON.parse(buffer);
let baseUrl = "https://www.zomato.com";

// zomData
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36"
  );
  await page.goto("https://zomato.com/meerut/restaurants?category=1");

  await page.evaluate(() => window.scrollBy(0, 5000));
  await page.waitForTimeout(90000);

  const ordersArr = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".sc-1mo3ldo-0 div[width] .sc-1hez2tp-0")
    ).map((partner) => partner.innerText)
  );

  // const removedString = orders.filter((value) => {
  //   if (!isNaN(parseInt(value.replace(/\D/g, "")))) {
  //     return value;
  //   }
  // });

  const name = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".sc-1hp8d8a-0")).map(
      (partner) => partner.innerText
    )
  );

  const linkData = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".sc-1mo3ldo-0 div.jumbo-tracker a[href]")
    ).map((partner) => partner.getAttribute("href"))
  );

  let newArr = [];
  let linksArr = [];
  let detectCopy = 0;
  let detectCopyURL = "";

  for (let i = 0; i < ordersArr.length; i++) {
    let newPush = parseInt(ordersArr[i].replace(/\D/g, ""));
    console.log(newPush);
    if (newPush != detectCopy && !isNaN(newPush)) {
      if (
        i == 0 ? false : isNaN(parseInt(ordersArr[i - 1].replace(/\D/g, "")))
      ) {
        newArr.push(0, newPush);
        // newArr.push();
      } else {
        newArr.push(newPush);
      }
      detectCopy = newPush;
    }
  }

  for (let i = 13; i <= linkData.length; i++) {
    let oneLink = baseUrl + linkData[i];
    if (oneLink != detectCopyURL) {
      linksArr.push(oneLink);
      console.log(oneLink);
      detectCopyURL = oneLink;
    }
  }

  console.log(newArr);
  console.log(name);
  console.log(linkData);

  let zomData = [];

  for (let i = 0; i < newArr.length; i++) {
    zomData.push({
      "Restraunt Name": name[i],
      Orders: newArr[i],
      "Restraunt Link": linksArr[i],
    });
  }

  console.log(newArr.length);
  console.log(name.length);
  console.log(linkData.length);

  fs.writeFileSync("./newZomData2.json", JSON.stringify(zomData));

  await page.screenshot({ path: "example.png" });
  await browser.close();
})();

// const text = page.evaluate(() => document.querySelector('.scrape').textContent);
// .sc-s1isp7-1.gzrZiI.sc-erOsFi.bpzhDL
// .sc-1hez2tp-0.sc-csSMhA.fPdNLn
// night .sc-1mo3ldo-0 .sc-eGXxtx.eQuHWi .sc-1hez2tp-0
// restraunt name "'.sc-1hp8d8a-0'"
// night may good ".sc-1mo3ldo-0 div[width="300%"] .sc-1hez2tp-0"
