let home = document.getElementById("Home");
let Ab = document.getElementById("About");
let Ed = document.getElementById("Edu");
let Fb = document.getElementById("Feedback");

let navi = document.getElementById("navi");
let name1 = document.getElementById("name");

home.addEventListener('mouseout', onMouseOut, true);
home.addEventListener('mouseenter', onMouseEnter, true);
Ab.addEventListener('mouseenter', onMouseOut, true);
Ed.addEventListener('mouseenter', onMouseOut, true);
Fb.addEventListener('mouseenter', onMouseOut, true);

function onMouseOut(){
    navi.style.display = 'flex';
    navi.style.alignItems = 'center';
    navi.style.justifyContent = 'space-between';
    navi.style.width = '100vw';
    name1.style.display = 'none';
}

function onMouseEnter(){
    navi.style.display = 'none';
    name1.style.display = 'block';
}

let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var slideIndex = 1;
if (width >= 750){
  showSlides(slideIndex);
}
else{
  showSlidesResponsive(slideIndex)
}

function plusSlides(n) {
  if (width >= 750){
    showSlides(slideIndex += n);
  }
  else{
    showSlidesResponsive(slideIndex += n)
  } 
}

function currentSlide(n) {
  if (width >= 750){
    showSlides(slideIndex = n);
  }
  else{
    showSlidesResponsive(slideIndex = n)
  }
}

function showSlidesResponsive(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 

  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block"; 
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 

  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "flex";  
}
