const options = ["Rock", "Paper", "Scissors"]; //create array with the possible options of the game

function computerPlay(array) { //create function to select a random option for the computer

    return array[Math.floor(Math.random()*array.length)]; // select a random item from the array options
            
    }
    
    console.log(computerPlay(options));

let computerSelection = computerPlay(options);

let playerInput 

let playerSelection 

    console.log(computerSelection);

function trimmer(s) { s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();}

     
        

        
        
     


function playRound (playerSelection, ComputerSelection){
            
    if (playerSelection != ComputerSelection) {
 
        if (playerSelection === "Rock" && ComputerSelection === "Scissors"){return 1;}
             
        else if (playerSelection === "Paper" && ComputerSelection === "Rock") {return 1}
 
        else if (playerSelection === "Scissors" && ComputerSelection === "Paper") {return 1}
 
         else return -1
         
             
        }
        else return 0;
        }



        const btnRock = document.querySelector("#btnRock");
        const btnScissors = document.querySelector("#btnScissors");
        const btnPaper = document.querySelector("#btnPaper");
        const playerOutput = document.querySelector("#playerScore");
        const computerOutput = document.querySelector("#computerScore");
        const resultOutput = document.querySelector("#result");
        const finalOutput = document.querySelector("#finalScore");
        let gamesPlayed = 0;

        function scoreCheck (games, playerScore, computerScore){ // check how many games have been played



          if(games === 5 && playerScore > computerScore) {

            finalOutput.textContent = (`Game over, you win! You got ${playerScore} 
            points and the computer got ${computerScore} points!`);
            playerOutput.textContent = 0;
            computerOutput.textContent = 0;
            gamesPlayed = 0;
            resultOutput.textContent = '';
            alert(`Game over, you win! You got ${playerScore} 
            points and the computer got ${computerScore} points!`);

          }

          else if (games === 5 && playerScore < computerScore) { 
            finalOutput.textContent = (`Game over, you lose! You got ${playerScore} 
            points and the computer got ${computerScore} points!`);
            playerOutput.textContent = 0;
            computerOutput.textContent = 0;
            gamesPlayed = 0;
            resultOutput.textContent = '';
            alert(`Game over, you lose! You got ${playerScore} 
            points and the computer got ${computerScore} points!`);


          }

          else if(games === 5 && playerScore === computerScore){ 

            finalOutput.textContent = (`Game over, you drew! ${playerScore} points each!`);
            playerOutput.textContent = 0;
            computerOutput.textContent = 0;
            gamesPlayed = 0;
            resultOutput.textContent = '';
            alert(`Game over, you drew! ${playerScore} points each!`);

          }

          else {
            
            console.log(gamesPlayed);
            finalOutput.textContent = ''
          
          }
          

          



        }

        

        btnRock.addEventListener('click', () => {
          
          
          gamesPlayed++;          
          

          let result = playRound('Rock', computerSelection); 

          if(result === 1) { 

          playerOutput.textContent = parseInt(playerOutput.textContent) + 1;
          resultOutput.textContent = 'Rock Wins, congrats here\'s one point!';

        } else if (result === -1){

          computerOutput.textContent = parseInt(computerOutput.textContent) + 1;
          resultOutput.textContent = 'Paper Wins, another one for the machine!';

        }

        else {
          
          playerOutput.textContent = parseInt(playerOutput.textContent) + 1;
          computerOutput.textContent = parseInt(computerOutput.textContent) + 1;
          resultOutput.textContent = 'Draw! One point each!';
        
        
        }
          
          computerSelection = computerPlay(options);
          console.log(computerSelection);                             
          
          scoreCheck(gamesPlayed, parseInt(playerOutput.textContent),parseInt(computerOutput.textContent));

          
          


        });


        btnPaper.addEventListener('click', () => {
          gamesPlayed++;  
          let result = playRound('paper', computerSelection);           

          if(result === 1) { 

          playerOutput.textContent = parseInt(playerOutput.textContent) + 1;
          resultOutput.textContent = 'Paper Wins, well done you!';

        } else if (result === -1){

          computerOutput.textContent = parseInt(computerOutput.textContent) + 1;
          resultOutput.textContent = 'Scissors Win, computer plus 1!';

        }

        else {
          
          playerOutput.textContent = parseInt(playerOutput.textContent) + 1;
          computerOutput.textContent = parseInt(computerOutput.textContent) + 1;
          resultOutput.textContent = 'Draw! One point each!';
        
        
        }
          
          console.log(playRound('paper', computerSelection));
          computerSelection = computerPlay(options);
          console.log(computerSelection);
          console.log(gamesPlayed);
          scoreCheck(gamesPlayed, parseInt(playerOutput.textContent),parseInt(computerOutput.textContent));
          


        });
        

        btnScissors.addEventListener('click', () => {

          gamesPlayed++
          let result = playRound('Scissors', computerSelection); 

          if(result === 1) { 

          playerOutput.textContent = parseInt(playerOutput.textContent) + 1;
          resultOutput.textContent = 'Scissors Win, add one for you!';

        } else if (result === -1){

          computerOutput.textContent = parseInt(computerOutput.textContent) + 1;
          resultOutput.textContent = 'Rock Wins, too bad, one for the computer!';


        }

        else {
          
          playerOutput.textContent = parseInt(playerOutput.textContent) + 1;
          computerOutput.textContent = parseInt(computerOutput.textContent) + 1;
          resultOutput.textContent = 'Draw! One point each!';
        
        }


          
          console.log(playRound('Scissors', computerSelection));
          computerSelection = computerPlay(options);
          console.log(computerSelection);
          scoreCheck(gamesPlayed, parseInt(playerOutput.textContent),parseInt(computerOutput.textContent));


        });






        





        console.log(btnRock, btnScissors, btnPaper);


        //button.addEventListener()





            
 
         

/*function game () { //running the game 

           
            
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
        

      
game();*/



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



