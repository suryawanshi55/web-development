// Declaring html element

const imgdiv=document.querySelector(" .profilepic")
   

const img=document.querySelector("#photo")
const file=document.querySelector("#file")
const uploadbtn=document.querySelector("#uploadbtn")

// if user hover on profile div
imgdiv.addEventListener('mousecenter',function(){
    uploadbtn.style.display="block"
})

// if user hover out from img div
imgdiv.addEventListener('mouseleave',function(){
    uploadbtn.style.display="none"
})

// for chossing image to upload

file.addEventListener('change',function(){
    const choosefile=this.files[0];
    if (choosefile){
        const reader = new FileReader();
        // filereder is pre defined function in js

        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result)
        })
        reader.readAsDataURL(choosefile);
    }
})