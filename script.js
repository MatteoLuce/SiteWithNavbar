function showpopmenu(){
    let showmenu = document.getElementById("popup-items-menu");
    showmenu.style.visibility = "visible";
    let clickboard = document.getElementById("click");
    clickboard.style.display = "inline-block";
}

function clickclose(){
    let showmenu = document.getElementById("popup-items-menu");
    showmenu.style.visibility = "hidden";
    let clickboard = document.getElementById("click");
    clickboard.style.display = "none";
}

function showRegister(){
    let logmenu = document.getElementById("log-in-block")
    logmenu.style.display = "none";
    let signmenu = document.getElementById("sign-up-block")
    signmenu.style.display = "inline-block";
}

function showLogIn(){
    let signmenu = document.getElementById("sign-up-block")
    signmenu.style.display = "none";
    let logmenu = document.getElementById("log-in-block")
    logmenu.style.display = "inline-block";
}

