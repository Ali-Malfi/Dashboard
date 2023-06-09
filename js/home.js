const signOut =document.querySelector(".sign-out");



     signOut.addEventListener("click",function(){
        // window.localStorage.removeItem('password');
        window.localStorage.clear();
        window.location.href = "/pagina's/inlog.html";
    
     });
        
   

