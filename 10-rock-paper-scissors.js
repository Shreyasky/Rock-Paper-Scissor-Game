 
            let score = JSON.parse(localStorage.getItem('score')) || {
              wins:0,
              losses:0,
              ties:0
          };

          document.querySelector('.js-score')
          .innerHTML=`Wins: ${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

      function playgame(playmove)
      {
          const computer= picknum();
          let result= '';
          if(playmove=== 'scissor')
          {
                  if(computer=='rock') {
                      result='You lose.';
                  }
                  else if(computer=='paper') {
                      result='You win.';
                  }
                  else if(computer=='scissor') {
                      result='Tie.';
                  }
                  }


          else if(playmove=== 'paper')
          {
                  if(computer=='rock'){
                      result='You win.';
                  }
                  else if(computer=='paper') {
                      result='Tie.';
                  }
                  else if(computer=='scissor'){
                      result='You lose.';
                  }
                 }


          else if(playmove=== 'rock')
          {
                 
                  if(computer=='rock'){
                      result='Tie.';
                  }
                  else if(computer=='paper') {
                      result='You lose.';
                  }
                  else if(computer=='scissor') {
                      result='You win.';
                  }
          }
          if(result==='You win.')
          {
              score.wins+=1;
          }
          else if(result==='You lose.')
          {
              score.losses+=1;
          }
          else if(result==='Tie.')
          {
              score.ties+=1;
          }
          localStorage.setItem('score',JSON.stringify(score));

          document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

          document.querySelector('.js-result').innerHTML= result;  
          
           document.querySelector('.js-moves').innerHTML= `You <img src="${playmove}-emoji.png" class="img-icon"><img src="${computer}-emoji.png" class="img-icon">Computer`;  
      }
      function picknum()
      {
          const random_num = Math.random();
          let computer='';
          if(random_num >=0 && random_num <1/3){
          computer='rock';
          }
          else if(random_num >=1/3 && random_num <2/3){
              computer='paper';
          }
          else if(random_num >=2/3 && random_num <1){
              computer='scissor';
          }
          return computer;
      }
      let to_stop_play =false;
      let intervalId;
      function autoplay()
      {
          if(!to_stop_play)
          {
              intervalId=setInterval( function()
              {
                  const playmove=picknum();
                  playgame(playmove);

              },1200);
              to_stop_play=true;
          }
          else
          {
             clearInterval(intervalId);
             let to_stop_play =false; 
          }
      }