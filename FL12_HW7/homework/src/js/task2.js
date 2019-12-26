let randomNum;
let userChoice;
let userAttempts;
let prize;
let userPrize;
let randomNumRange = 8;
let numOfUserAttempts = 3;
let firstLevelPrize = 100;
let secondLevelPrize = 200;
let firstLevelRange = 8;
let secondLevelRange = 12;
let lowerThePrize = 2;
let play = confirm('Do you want to play a game?');

if (!play) {
    //if user clicked the 'Cancel' button
    alert('You did not become a billionaire, but can.');
} else {
    //If user clicked 'OK' button
    randomNum = Math.floor(Math.random() * (randomNumRange + 1));
    userAttempts = numOfUserAttempts;
    userPrize = 0;
    prize = firstLevelPrize;
    while (userAttempts > 0) {
        console.log(`Random Number: ${randomNum}`);
        userChoice = +prompt(`
        Choose a roulette pocket number from 0 to ${randomNumRange}
        Attempts left: ${userAttempts}
        Total prize: ${userPrize}$
        Possible prize: ${prize}$
        Enter your number`
        );
        console.log(`User Choice: ${userChoice}`);

        if (userChoice !== randomNum) {
            //if user didn't guess the number
            userAttempts--;
            prize /= lowerThePrize;
            console.log('Did not guess');
            console.log(userAttempts);
        } else {
            //if user guessed the number
            userPrize += prize;
            play = confirm(`Congratulation, you won! Your prize is: ${userPrize}$. Do you want to continue?`)
            if (play) {
                //if user want to continue the game
                userAttempts = numOfUserAttempts;
                randomNumRange = secondLevelRange;
                prize = secondLevelPrize;
                randomNum = Math.floor(Math.random() * (randomNumRange + 1));
            } else {
                //if user don't want to continue the game
                play = confirm(`Thank you for your participation. Your prize is: ${userPrize}$.\n
                Do you want to play again?`);
                if (play) {
                    //if user wanted to play again
                    prize = firstLevelPrize;
                    userAttempts = numOfUserAttempts;
                    userPrize = 0;
                    randomNumRange = firstLevelRange;
                    randomNum = Math.floor(Math.random() * (randomNumRange + 1)); 
                } else {
                    //if user didn't want to play again
                    break;
                }
            }
        }
        
        if (userAttempts === 0) {
            //if the user has not guessed the number and he has no more attempts
            play = confirm(`Thank you for your participation. Your prize is: ${userPrize}$.\n
            Do you want to play again?`);
            if (play) {
                //if user wanted to play again
                userAttempts = numOfUserAttempts;
                randomNumRange = firstLevelRange;
                prize = firstLevelPrize;
                userPrize = 0;
                randomNum = Math.floor(Math.random() * (randomNumRange + 1));
            } else {
                //if user didn't want to play again
                break;
            }
        }
    }
}