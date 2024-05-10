const mydiv=document.getElementById("colordiv");
const pinkbtn=document.getElementById("pinkbtn");
const yellowkbtn=document.getElementById("yellowbtn");
const blackbtn=document.getElementById("blackbtn");
const bluebtn=document.getElementById("bluebtn");
const greenbtn=document.getElementById("greenbtn");
const purplebtn=document.getElementById("purplebtn");
const tealbtn=document.getElementById("tealbtn");
const emptyBox=document.getElementById("emptyBox");
const select=document.getElementById("select");
const donebtn=document.getElementById("donebtn");
const clearbtn=document.getElementById("clearbtn");
pinkbtn.addEventListener('click',()=>{
    mydiv.className="pinkbg";
});
yellowbtn.addEventListener('click',()=>{
    mydiv.className="yellowbg";
});
blackbtn.addEventListener('click',()=>{
    mydiv.className="blackbg";
});
bluebtn.addEventListener('click',()=>{
    mydiv.className="bluebg";
});
greenbtn.addEventListener('click',()=>{
    mydiv.className="greenbg";
});
purplebtn.addEventListener('click',()=>{
    mydiv.className="purplebg";
});
tealbtn.addEventListener('click',()=>{
    mydiv.className="tealbg";
});

select.addEventListener('click',()=>{
    emptyBox.className=mydiv.className;
});
donebtn.addEventListener('click',()=>{
    if(emptyBox.className!="empty"){
        alert("Box is now colored");
    }else{
        alert("No color chosen yet. \n Choose a color from the given options");
    }
});
clearbtn.addEventListener('click',()=>{
    if(emptyBox.className!="empty"){
        emptyBox.className="empty";
        alert("Color will be now removed");
    }else{
        alert("Box is already empty");
    }
});