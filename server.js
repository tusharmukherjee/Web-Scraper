const express = require('express');
const app = express();
const data = require('./data');
const puppeteer = require("puppeteer");
const cors = require('cors')
// const parse = require('parse')

const port = 3001;

data.map((el)=> {
    // el.categories = [];
    el.categories = el.categories.map((la)=> la.trim());
});'[['

app.use(express.json());
const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

app.post("/link",async(req,res)=>{

    (async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setUserAgent(
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36"
        );
        await page.goto(`${req.body.link}`);
      
        
        await page.evaluate(() => window.scrollBy(0, 5000));

        console.log("first");

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
        res.send({
            wholeData: wholeData
        });
        await browser.close();
      })();

})

app.listen(port,()=> {
    console.log(`Listening on port ${port}`);
});