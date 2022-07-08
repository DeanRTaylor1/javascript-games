const options = ["Rock", "Paper", "Scissors"]; //create array with the possible options of the game

function computerPlay(a) { //create function to select a random option for the computer

    return options[Math.floor(Math.random()*options.length)]; // select a random item from the array options
            console.log(options);
    }

let computerSelection = computerPlay(options);
let playerInput 
let playerSelection 
    console.log(computerSelection);

function trimmer(s) { s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();}

        
        

        
        
     


function playRound (a, b){
            
    if (a != b) {
 
        if (a === "Rock" && b === "Scissors"){return 1;}
             
        else if (a === "Paper" && b === "Rock") {return 1}
 
        else if (a === "Scissors" && b === "Paper") {return 1}
 
         else return -1
             
        }
        else return 0;
        }


            
 
         

function game () { //running the game 

           
            
    let computerScore = 0; // variable to track the computer's points
    
    let playerScore = 0; // variable to track the player's score

    let n;

        for (let i = 0; i < 5; i++) {              // for loop to play five rounds     
                    
            playerSelection = prompt("Choose your weapon", 'Rock')

            // playerSelection = trimmer(playerInput);                     

            n = computerPlay(options + i);  // I'm not sure if this is correct but it seems to give the correct functionality, one isse i was having is that the computer selection was the same for all rounds, adding the i variable gave me new options.

            console.log(n); // debugging check the computer's selection
                    
            // console.log(playRound(playerSelection, n));
                    
            if ((playRound(playerSelection, n) === 0)) {computerScore += 1; playerScore += 1; console.log(`It's a tie ${playerSelection} and ${n} are the same!`);}

            else if ((playRound(playerSelection, n) === -1)) {computerScore += 1; console.log(`You lose ${playerSelection} is beaten by ${n}`);}

             else if ((playRound(playerSelection, n) === 1)) {playerScore += 1; console.log(`You win! ${playerSelection} beats ${n}!`);}
                    
                   //console.log(score); 
                console.log(computerScore);
                console.log(playerScore);
                                        
        }

        if (computerScore === playerScore){

            console.log(`It's a tie! ${computerScore} points each!`);

        }

        else if (computerScore > playerScore){

                    console.log(`You lose! the computer got ${computerScore} points and you got ${playerScore} points`);

         }

        else console.log(`You win! the computer got ${computerScore} points and you got ${playerScore} points`);
        }
        

      
game();



/*const container = document.querySelector('#container');

const content = document.createElement('div');

content.style.cssText = "background-color: pink;";

content.classList.add('content');
content.innerHTML = "<h1>I'm in a div</h1><p>Me too!</p>";

container.appendChild(content);

const newContainer = document.querySelector('#container');

const newContent = document.createElement('div');

newContent.style.cssText = "background-color: gray;";

newContent.classList.add('content');
newContent.innerHTML = "<h1>I'm in a div</h1><p>Me too!</p>";

newContainer.appendChild(newContent);


const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});*/



