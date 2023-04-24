"use strict";

const loginId = document.getElementById('username');
const loginPw = document.getElementById('password');
const loginBtn = document.getElementById('login_btn');

function color() {
    if(loginId.value.length>0){
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.disabled = false;
    }else{
        loginBtn.style.backgroundColor = "#C0DFFD";
        loginBtn.disabled = true;
    }
}

function login(event){
    event.preventDefault(); // 폼 제출 이벤트를 중지시킴
    if(loginId.value == "piadmin" && loginPw.value == "piadmin") {
        window.location.href = "dimension.html";
    }
    else{
        alert("Fail to log in. Please try again")
    }
    
}

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click',login);