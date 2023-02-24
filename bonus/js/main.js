const container = document.querySelector('.container');

for(let i = 1; i<=100; i++){
    
    let square = document.createElement('div');
 
    if ((i % 5 === 0) && (i % 3 === 0)){
        square.classList.add('square', 'fizzBuzzBg');
        square.innerHTML = 'FIZZBUZZ';
        container.append(square);
    }else if(i % 3 === 0){
        square.classList.add('square', 'fizzBg');
        square.innerHTML = 'FIZZ';
        container.append(square);
    }else if (i % 5 === 0){
        square.classList.add('square', 'buzzBg');
        square.innerHTML = 'BUZZ';
        container.append(square);
    } else{
        square.classList.add('square', 'standardBg');
        square.innerHTML = i;
        container.append(square);
    }

}

// for(let i = 1; i<=100; i++){
 
//     if ((i % 5 === 0) && (i % 3 === 0)){
//         let square = `<div class="square fizzBuzzBg">FIZZBUZZ</div>`;
//         container.innerHTML += square;
//     }else if(i % 3 === 0){
//         let square = `<div class="square fizzBg">FIZZ</div>`;
//         container.innerHTML += square;
//     }else if (i % 5 === 0){
//         let square = `<div class="square buzzBg">BUZZ</div>`;
//         container.innerHTML += square;
//     } else{
//         let square = `<div class="square standardBg">${i}</div>`;
//         container.innerHTML += square;
//     }

// }