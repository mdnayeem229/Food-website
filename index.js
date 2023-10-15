//this is for small screen
var icon = document.querySelector('.icon')
var bars = icon.querySelector('.fa-bars');
var nav = document.querySelector('nav');

icon.onclick = function(){
    if(nav.style.maxHeight =="300px"){
nav.style.maxHeight ="0px";
bars.classList.contains('fa-bars');
bars.classList.replace('fa-times', 'fa-bars');
    }
    else{
        nav.style.maxHeight="300px";
        bars.classList.replace('fa-bars', 'fa-times');
  
    }
}
//top to scrollbar 
var toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add('to-top-active');
    }
    else{
        toTop.classList.remove('to-top-active');
    }
})















