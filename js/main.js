const container = document.querySelector('.container');


for(let i = 1; i<=100; i++){
    let square = `<div class="square">${i}</div>`;
    
  
    
    // if(!(3 % i)){
    //     square.classList.add('fizzBg');
        
    // }else if (!(5 % i)){
    //     square.classList.add('buzzBg');
        
    // }else if (!(5 % i) && !(3 % i)){
    //     square.classList.add('fizzBuzzBg');
        
    // } else{
    //     square.classList.add('standardBg');
        
    // }

    container.innerHTML += square;

}