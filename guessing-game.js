const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let secretNumber = 8;

function checkGuess(num) {
    if (num > secretNumber) {
        console.log('Too high');
        return false;
    } else if (num < secretNumber) {
        console.log('Too Low');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

function handleGuess(guess) {
    rl.question('Enter a guess: ', (num) => {
        guess = num; 
        if (checkGuess(guess)) {
            console.log('YOU WON!');
            rl.close();
            return true;
        } else {
            handleGuess(guess);
        }
    }) 
}
function askGuess() {
    let maxNum = Infinity;
    let minNum = -Infinity;
    rl.question('Enter a max number: ', (num) => {
        maxNum = num;
        rl.question('Enter a min number', (num) => {
            minNum = num; 
            console.log(`I'm thinking of a number between ${minNum} and ${maxNum}: `)
            let guess = 0; 
            handleGuess(guess);
            // rl.question('Enter a guess: ', handleGuess)
        }) 
        
    }) 
}
    
//     while(guess !== secretNumber) {
//         rl.question('Enter a guess: ', (num) => {
//             guess = num; 
//             if (checkGuess(guess)) {
//                 console.log('YOU WON!');
//                 rl.close();
//             }
//         }) 
       
//     }
    
// }

askGuess();