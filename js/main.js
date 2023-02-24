const container = document.querySelector('.container');


for(let i = 1; i<=100; i++){
 
    if ((i % 5 === 0) && (i % 3 === 0)){
        let square = `<div class="square fizzBuzzBg">FIZZBUZZ</div>`;
        container.innerHTML += square;
    }else if(i % 3 === 0){
        let square = `<div class="square fizzBg">FIZZ</div>`;
        container.innerHTML += square;
    }else if (i % 5 === 0){
        let square = `<div class="square buzzBg">BUZZ</div>`;
        container.innerHTML += square;
    } else{
        let square = `<div class="square standardBg">${i}</div>`;
        container.innerHTML += square;
    }

}