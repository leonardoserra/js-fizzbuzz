const container = document.querySelector('.container');


for(let i = 1; i<=100; i++){
 
  
    
    if(3 % i == 0){
        let square = `<div class="square fizzBg">${i}</div>`;
        container.innerHTML += square;
    }else if (5 % i == 0){
        let square = `<div class="square buzzBg">${i}</div>`;
        container.innerHTML += square;
    }else if ((5 % i == 0) && ( 3 % i) == 0){
        let square = `<div class="square fizzBuzzBg">${i}</div>`;
        container.innerHTML += square;
    } else{
        let square = `<div class="square standardBg">${i}</div>`;
        container.innerHTML += square;
    }

   

}