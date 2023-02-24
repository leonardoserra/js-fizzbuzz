const container = document.querySelector('.container');

for(let i = 0; i<=100; i++){
    let square = `<div>${i}</div>`;
    container.innerHTML += square;
    
    if(!(3 % square)){
        square.classList.add('fizzBg');
    }else if (!(5 % square)){
        square.classList.add('buzzBg');
    }else if (!(5 % square) && !(3 % square)){
        square.classList.add('fizzBuzzBg');
    } else{
        square.classList.add('standardBg');
    }
}