let fs = require('fs');
const xlsx = require('xlsx');
let buffer = fs.readFileSync("./newZomData2.json");
// console.log(buffer);
console.log("-------------------------------------------------");

    function writeExcel(data,name){
        let workbook = xlsx.utils.book_new();
        name = "April22"
        data = JSON.parse(buffer);
        let worksheet = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        xlsx.writeFile(workbook, name+".xlsx");
    }
    writeExcel();
