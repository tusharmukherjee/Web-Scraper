let fs = require('fs');
const xlsx = require('xlsx');
let buffer = fs.readFileSync("./delet.json");
console.log(buffer);
console.log("-------------------------------------------------");

    function writeExcel(data,name){
        let workbook = xlsx.utils.book_new();
        let data = JSON.parse(buffer);
        let worksheet = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        xlsx.writeFile(workbook, name+".xlsx");
    }

    function readExcel(filePath, sheetName){
        if(fs.existsSync(filePath) == false){
            return [];
        }
        let wb = xlsx.readFile(filePath);
        let excelData = wb.Sheets(sheetName);
        let ans = xlsx.utils.sheet_to_json(excelData);
        return ans;
    }