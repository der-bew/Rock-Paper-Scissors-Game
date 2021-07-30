
let compCount=0;
let plaCount=0;
let tieCount=0;
let computerSelec= computerPlay();
let playerSelection= prompt("Please Enter 'Rock' or 'Paper' or 'Scissors' to play the game: ").toLowerCase();
playGround(computerSelec, playerSelection);
//gameStastics(compCount, plaCount, tieCount);


function computerPlay(){
    let randomno=Math.floor(Math.random()*3)+1;
    let computerSelection
    if (randomno===1){
        computerSelection = 'rock';
        //return computerSelection;
    }
    else if(randomno===2){
        computerSelection = 'paper'
        //return computerSelection;
    }
    else{
        computerSelection = 'scissors'
        //return computerSelection;
    }
     return computerSelection;
}

function playGround(compSelection, plaSelection){
    while (true){
        alert(`Computer Selection ${compSelection} Your Selection ${plaSelection}`)
        if (compSelection===plaSelection){
            console.log(`It is Tie, Both select '${plaSelection}`);
            tieCount += 1;
        }
        else if(plaSelection==='rock'){
            if (compSelection=='paper'){
                alert("Oops you Loose, Paper covers Rock");
                compCount += 1;
            }
            else{
                alert("Congratulations! you Won, Rock smash Scissors");
                plaCount += 1;
            }
        }
        else if (plaSelection==='paper'){
            if(compSelection=='scissors'){
                alert("Oops you Loose, Scissors cut Paper");
                compCount += 1;
            }
            else{
                alert("Congratulations! you Won, Paper cover Rock");
                plaCount += 1;  
            }
        }
        else if(plaSelection==='scissors'){
            if(compSelection==='rock'){
                alert("Oops you Loose, Rock smash Scissors");
                compCount += 1;
            }
            else{
                alert("Congratulations! you Won, Scissors cut Paper");
                plaCount += 1; 
            }
        }
        else{
            alert("Please Enter correct input")
            plaSelection= prompt("Please Enter 'Rock' or 'Paper' or 'Scissors' to play Again: ").toLowerCase();
        }
        if(compCount===5 || plaCount===5){
            break;
    }
    plaSelection= prompt("Please Enter 'Rock' or 'Paper' or 'Scissors' to play Again: ").toLowerCase();
}
    gameStastics(compCount, plaCount, tieCount)
}

function gameStastics(compWonCount, plaWonCount, tieWCount){
    let totalplayed= compWonCount+ plaWonCount+ tieWCount;
    alert(`Total Played: ${totalplayed}`);
    alert(`Computer Won: ${compWonCount}`);
    alert(`You Won: ${plaWonCount}`)
    alert(`Tie: ${tieWCount}`)
}


main();