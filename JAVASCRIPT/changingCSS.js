document.getElementById("demo").style.color="red";
document.getElementById("try").style.textAlign="center"
document.getElementById("try").style.fontStyle="italic"
document.getElementById("try").style.fontSize="large"
document.getElementById("try").style.color="navy"
document.getElementById("try").style.backgroundColor="pink"
////////////////////////////////////////////////////////////////////
function myMove(){
 let id= null;
 const Element=document.getElementById("animate");
 let pos = 0 ;
 clearInterval(id);

id=setInterval(frames,5);

function frame(){
    if(pos==350){
        clearInterval(id);
    }else{
        pos++;
        Element.style.top=pos +'px';
        Element.style.left=pos +'px'

    }
}
}