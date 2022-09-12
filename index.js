//importar archivo json, especificando el tipo de dato en este caso json que es lo de la utima parte 

import data from './data.json' assert {type:'json'}

console.log(data);

let bgColor = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)',
]   

let dailyArray = data.map(item =>  item.timeframes.daily);
let weeklyArray = data.map(item =>  item.timeframes.weekly );
let monthlyArray = data.map(item =>  item.timeframes.monthly );

console.log(dailyArray);

let dailybtn = document.querySelector('#daily');
let weeklybtn = document.querySelector('#weekly');
let monthlybtn = document.querySelector('#monthly');

let secondSecion = document.querySelector('#second-section');

drawElement(dailyArray)

dailybtn.addEventListener('click',()=>{
    drawElement(dailyArray)
});

weeklybtn.addEventListener('click',()=>{
    drawElement(weeklyArray)
});

monthlybtn.addEventListener('click',()=>{
    drawElement(monthlyArray)
});


function drawElement(array){
    secondSecion.innerHTML = ' ';
    array.forEach( (elemento, index)=> {
        let title = data[index].title;
        let titleLowerCase = title.toLowerCase();

        if (titleLowerCase == 'self care'){
            titleLowerCase = 'self-care'
        }
            
        secondSecion.innerHTML += `
        <div class="card">
        <div class="card__background" style="background-color: ${bgColor[index]}">
          <img src="./images/icon-${titleLowerCase}.svg" alt="maletin" class="card__img">
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${data[index].title}</p>
            <img src="./images/icon-ellipsis.svg" alt="dots" class="">
          </div>
          <div class="card__hours">
            <p class="card__hour">${elemento.current}hrs</p>
            <p class="card__previus">${elemento.namePrevius} - ${elemento.previous}</p>
          </div>
        </div>
      </div>`
    })
}