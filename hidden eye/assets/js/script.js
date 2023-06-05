"use strict";

function change(){
    let inp=document.getElementById('inp');
    let icon=document.getElementById('icon');

    if(inp.type==='password'){
        inp.type='text';
        icon.className=('fa-solid fa-eye-slash');
    }else{
        inp.type='password';
        icon.className=('fa-solid fa-eye');
    }
}


