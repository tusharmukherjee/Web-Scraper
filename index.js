const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

function readExcel(filePath, sheetName){
    if(fs.existsSync(filePath) == false){
        return [];
    }
    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}

function writeExcel(data,name){
    let workbook = xlsx.utils.book_new();
    let worksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    xlsx.writeFile(workbook, name+".xlsx");
}


let restMain = path.join("restMain");

function dircreator(filePath){
    if(fs.existsSync(filePath) == false){
        fs.mkdirSync(filePath);
    }
}
dircreator(restMain);


let xlFilePath = path.join('Modinagar_Zomato.xlsx');
let restJson = readExcel(xlFilePath,'Sheet1');




(async () => {

    const browser = await puppeteer.launch({headless: false});
    for(let i = 0; i<20; i++){
        let restName = restJson[i]['Restraunt Name'];
        let restURL = restJson[i]['Restraunt Link'];

        let dishArr = [];
        let vote = [];
        let voteMain = [];
        let price = [];
        let priceMain = [];
        
        let restData = path.join('restMain',restName);
        dircreator(restData);

        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36')
        await page.goto(restURL);
        await page.waitForTimeout(3000);
        let dishesLength = await page.evaluate(() => document.querySelector('section:nth-child(7) > :nth-child(3)').childElementCount);

        console.log(dishesLength);
            dishArr = await page.evaluate(() => Array.from(document.querySelectorAll('h4.sc-1s0saks-15.iSmBPS')).map((voteOn) => voteOn.innerText));
            vote = await page.evaluate(() => Array.from(document.querySelectorAll('span.sc-z30xqq-4.hTgtKb')).map((voteOn) => voteOn.innerText));
            price = await page.evaluate(() => Array.from(document.querySelectorAll('span.sc-17hyc2s-1.cCiQWA')).map((priceOn) => priceOn.innerText));

            for(let m = 0; m < dishesLength; m++){
                if(vote[m] != undefined){
                let voteNum = parseInt(vote[m].replace(/\D/g,''));
                voteMain.push(voteNum);
                }
                let priceNum = parseInt(price[m].replace(/\D/g,''));
                priceMain.push(priceNum);
            }



            let data = [];

            for(let j=0; j<dishesLength; j++){
                let oneData ={
                    Dish: dishArr[j],
                    Vote: voteMain[j],
                    Price: priceMain[j]
                };
                data.push(oneData);
            }

            let fileName = `${restData}/${restName}`
            fs.writeFileSync(`${fileName}.json`, JSON.stringify(data));

            writeExcel(data,fileName);

            

        for(let k = 0; k<dishesLength; k++){
            console.log(dishArr[k]+ " " +vote[k] + " " + price[i]);
        }

        await page.close();
    }
    await browser.close();
})
();


// //*[@id="root"]/div/main/div/section[4]/section/section[2]/section[2]/div[2]/div[1]/div/div/div[2]/div/div[1]/h4
// //*[@id="root"]/div/main/div/section[4]/section/section[2]/section[2]/div[2]/div[2]/div/div/div[2]/div/div[1]/h4

// //*[@id="root"]/div/main/div/section[4]/section/section[2]/section[2]/div[2]/div[1]/div/div/div[2]/div/div[1]/div[1]/span
// //*[@id="root"]/div/main/div/section[4]/section/section[2]/section[2]/div[2]/div[2]/div/div/div[2]/div/div[1]/div[1]/span



// let buffer = fs.readFileSync("./delet.json");
// let zomData = JSON.parse(buffer);


// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36');


//   await page.goto('https://www.zomato.com/meerut/restaurants?category=1');

  
//   await page.evaluate(() => window.scrollBy(0,5000));
//   await page.waitForTimeout(60000);


// })
// ();


// #root > div > main > div > section.sc-dfRKBO.kcFprZ > section > section.sc-eLpfTy.eAdUTI > section:nth-child(7) > div.sc-gtGrDH.dtEbTV > div:nth-child(1) > div > div > div.sc-1s0saks-10.cYSFTJ > div > div.sc-1s0saks-13.kQHKsO > h4
// #root > div > main > div > section.sc-dfRKBO.kcFprZ > section > section.sc-eLpfTy.eAdUTI > section:nth-child(7) > div.sc-gtGrDH.dtEbTV > div:nth-child(2) > div > div > div.sc-1s0saks-10.cYSFTJ > div > div.sc-1s0saks-13.kQHKsO > h4