'use strict'
function generaCelle() {
    const grigliaDiv = document.querySelector('.griglia');
  
    for (let i = 0; i < 100; i++) {
      const cella = document.createElement('div');
      cella.classList.add('cella');
      cella.textContent = i + 1;
      grigliaDiv.appendChild(cella);
    }
  }
  
  generaCelle();
  

