const button = document.querySelector('button');
const button2 = document.getElementById('button-2');

button.addEventListener('click', () =>{
   const music =  new Audio('https://www.soundjay.com/buttons/sounds/button-2.mp3');
   music.play();
})

button2.addEventListener('click', () =>{
    const music2 = new Audio('https://www.soundjay.com/buttons/sounds/button-15.mp3');
    music2.play();
})