const container = document.querySelector('.container');
let square = document.querySelector('.square');

for(let i = 1; i<=100; i++){
    container.innerHTML = `<div>${i}</div>`;
    square.classList.add('standardBg');
    container.innerHTML += square;
  
    
    if(!(3 % square)){
        square.classList.add('fizzBg');
        container.innerHTML += square;
    }else if (!(5 % square)){
        square.classList.add('buzzBg');
        container.innerHTML += square;
    }else if (!(5 % square) && !(3 % square)){
        square.classList.add('fizzBuzzBg');
        container.innerHTML += square;
    } else{
        square.classList.add('standardBg');
        container.innerHTML += square;
    }

    
}