// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );

//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';

//     }, 4000);

//   }
// }
// randomizeImgs();

let header = document.getElementById("main");

let menuIcon = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".navLinks");

function toggellinks() {
  // menuIcon.classList.add('text-red-500');
  navLinks.classList.toggle('max-lg:hidden');
  navLinks.classList.toggle('text-center');
  menuIcon.classList.add('hidden');
}


window.onscroll = () => {
  navLinks.classList.add('max-lg:hidden');
  menuIcon.classList.remove('hidden');
}



if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });
}