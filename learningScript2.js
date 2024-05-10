const mytext=document.getElementById("hello");
            const name=document.getElementById("name");
            const mybtn=document.getElementById("submit");
           
            mybtn.addEventListener('click',()=>{
                if(mytext.className=="red"){
                    mytext.className="blue";
                    
                }else{
                    mytext.className="red";
                }
                mytext.innerText=mytext.innerText+" "+ name.value;
                name.value="";
                
                
            });