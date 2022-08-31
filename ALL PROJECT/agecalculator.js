// The cobstant  of date,month,year are d1,m1,y1
function age(){
    let d1=document.getElementById('date').value;
let m1=document.getElementById('month').value;
let y1=document.getElementById('year').value; 

// d2,m2,y2 these three variable which basically indicate the current Time.


let date = new Date();
let d2 = date.getDate();
let m2 = 1+ date.getMonth();
let y2 = date.getFullYear();
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if(d1>d2){
    d2 = d2 + month[m2-1];
    m2 = m2-1;
 }
if(m1>m2){
    m2 = m2 + 12;
    y2 = y2 - 1;

}
// age of the user in three variables d,m,y.substracted the user's date of birth from the current time and saved it between d,m,y
let d = d2 - d1;
let m = m2 - m1;
let y = y2 - y1;
console.log(d,m,y)
document.getElementById('age').innerHTML= 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
}
