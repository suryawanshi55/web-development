// importing the file module
const fs=require('fs');

// read file
// console.log("frist line")
// fs.readFile("abc.txt",(err,data)=>{
//     if(err){
//         console.log("got error")
//         console.log(err)
//     }
//     else{
//         console.log("got data")
//         console.log(data.toString() )
//     }
    
// })
// console.log("last line")
// write file
data="hi i an writing file data please insert me"
// fs.writeFile("data.txt",data,(err)=>{
//     if(err){
//         console.log("got error");
//         console.log(err);
//     }
//     else{
//         console.log("saved the data")
//     }
// })
// append file
// udata="updating the file with provious datas"
// fs.appendFile("data.txt",udata,(err)=>{
//     if(err){
//         console.log("got error")
//     }
//     else{
//         console.log("data updated");
//     }
// })


// delete file
fs.unlink("abc.txt",(err)=>{
    if(err){
        console.log("err")
    }
    else{
        console.log("delete the file succesfully")
    }
})