'use strict'

let play = document.getElementById('playButton');
let clickedOnce = false;
let grigliaDiv = document.querySelector('.griglia'); 

play.addEventListener('click', function generaCelle() {
    if (!clickedOnce) {
        for (let i = 0; i < 100; i++) {
            const cella = document.createElement('div');
            cella.classList.add('cella');
            cella.textContent = i + 1;
            grigliaDiv.appendChild(cella);
        }
        clickedOnce = true;
    } else {
        while (grigliaDiv.firstChild) {
            grigliaDiv.removeChild(grigliaDiv.firstChild);
        }
        clickedOnce = false;
    }
});




  

