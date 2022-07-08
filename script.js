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






        





       