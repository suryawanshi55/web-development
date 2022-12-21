function table(num){
    for(let i=1; i <=10; i++){
        document.write(i+ "" +"*"+""+num+""+"= "+""+i*num)
        document.write("<br/>")
        document.write("<br/>")
    }
}

var n= Number(window.prompt("Enter a number to get table"))
table(n)