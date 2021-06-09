const displayp1Score = document.getElementById('p1Score');
const displayp2Score = document.getElementById('p2Score');
const wscoreDisplay = document.querySelector('p span');
const inputScore = document.getElementById('inputScore');
const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn');
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

function winner (oldScore,winningScore){
    
   
    if( oldScore === winningScore){
        gameOver = true;
        p1Btn.setAttribute('disabled','disabled');
        p2Btn.setAttribute('disabled','disabled');
  }
}
p1Btn.addEventListener('click',() => {
  if(!gameOver){
      p1Score++;
     
     winner(p1Score,winningScore);

    //  if(winningScore === p1Score){
    //     gameOver = true;
    //     p1Btn.setAttribute('disabled','disabled');
    //     p2Btn.setAttribute('disabled','disabled');
    //     }
        displayp1Score.textContent = p1Score;
  }
})
p2Btn.addEventListener('click',() => {
    if(!gameOver){
        p2Score++;
        
        winner(p2Score,winningScore);
        // if(winningScore === p2Score){
        //     gameOver = true;
        // p1Btn.setAttribute('disabled','disabled');
        // p2Btn.setAttribute('disabled','disabled');
        // }

      displayp2Score.textContent = p2Score; 
    }
  })



  inputScore.addEventListener('change',() => {
    winningScore =inputScore.value;
     wscoreDisplay.textContent = inputScore.value;
     inputScore.value = '';
     reset();
     
  })

  function reset(){
    p1Score = 0;
    p2Score = 0;
    winningScore = 5;
    gameOver = false;
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
    displayp1Score.textContent=0;
    displayp2Score.textContent=0;
  }

  resetBtn.addEventListener('click',reset)

