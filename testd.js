const data = require('./data');
const fs = require("fs")

data.map((el)=> {
    // el.categories = [];
    el.categories = el.categories.map((la)=> la.trim());
});

// console.log(data);

let shortcategory = data.filter((a)=>{
    if(a.categories.includes("North Indian")){
        return a;
    }
});

let rate = data.filter((a)=>{
    if(a.rating > 4.1){
        return a;
    }
});

let filterobj = {
    cat: ['North Indian', 'Chinese'], // [x]
    rate: 3.5, // [x]
    order: 'desc', // [x]
    greater: 558,  // [x]
    top: 20// []
}

let alldone = Promise.all(
data.filter((a)=> {
    if(filterobj.cat.length > 0){
        if(a.categories.includes('North Indian')){
            return a;
        }
    }
}))
// .then((res)=>{
//     console.log(res);
// })
.then((res)=>{
    if(filterobj.rate != undefined){
        console.log("first")
        alldone = res.filter((a)=>{
            if(((a.rating != '-')?parseFloat(a.rating): 0) >= filterobj.rate){
                return a;
            }
        })
        return alldone;
    }
})
// .then((res)=>{
//     console.log(res);
// })
.then((res)=>{
    if(filterobj.greater != undefined){
        alldone = res.filter((a)=>{
            if(a.numberOfOrders >= filterobj.greater){
                return a;
            }
        })
    }
    return alldone;
})
// .then((res)=>{
//     console.log(res);
// })
.then((res)=>{
    res.sort((a,b)=>{
        if(filterobj.order === 'desc'){
            if(b.numberOfOrders > a.numberOfOrders){
                return 1;
            }
            return -1;
        }
    })
    return res;
})
.then((res)=>{
    if(filterobj.top != undefined){
        alldone = res.splice(0,filterobj.top);
    }
    fs.writeFileSync("./test.json", JSON.stringify(alldone));
    return alldone;
})
// .then((res)=>{
//     alldone = res;
//     console.log(alldone);
// });




let numberorder = data.filter((a)=>{
    if(a.numberOfOrders >= 558){
        return a;
    }
})

// for(let i = 0; i<data.length(); i++){

// }

let average = 0;
let sum = 0;
let temp = -1;
data.map((el)=>{
    
    sum += el.numberOfOrders;

    average = sum/data.length;
});

data.map((el)=>{
    if( temp < el.numberOfOrders ){
        temp = el.numberOfOrders;
    }
})

console.log(temp);
console.log(sum);
console.log(average);
console.log(numberorder.length);

fs.writeFileSync("./test.json", JSON.stringify(alldone));

// console.log(short);