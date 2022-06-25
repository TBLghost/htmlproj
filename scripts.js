function books(){

document.getElementById("book").style.visibility='visible';
document.getElementById("movie").style.visibility='hidden';
document.getElementById("music").style.visibility='hidden';
document.getElementById("game").style.visibility='hidden';
}
function movies(){
document.getElementById("book").style.visibility='hidden';
document.getElementById("movie").style.visibility='visible';
document.getElementById("music").style.visibility='hidden';
document.getElementById("game").style.visibility='hidden';
}
function musics(){
document.getElementById("book").style.visibility='hidden';
document.getElementById("movie").style.visibility='hidden';
document.getElementById("music").style.visibility='visible';
document.getElementById("game").style.visibility='hidden';
}
function games(){
document.getElementById("book").style.visibility='hidden';
document.getElementById("movie").style.visibility='hidden';
document.getElementById("music").style.visibility='hidden';
document.getElementById("game").style.visibility='visible';
}