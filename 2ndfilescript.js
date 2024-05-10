const mydiv=document.getElementById("colordiv");
const mybtn=document.getElementById("btn");

mybtn.addEventListener('click',()=>{
    if(mydiv.className=="pinkbg"){
        mydiv.className="yellowbg";
    }
    else if(mydiv.className=="yellowbg"){
        mydiv.className="blackbg";
    }
    else{
        mydiv.className="pinkbg";
    }
});