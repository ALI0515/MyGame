let computerguess;
let userguess = [];
let userguessupdate=document.getElementById("textoutput");
let usernumberupdate=document.getElementById("inputBox");
let audio= new Audio("music.wav");


const init = () =>{
    computerguess =Math.floor(Math.random()*100);
    // console.log(computerguess);

    document.getElementById("gamearea").style.display ="none";
    document.getElementById("newgamebutton").style.display ="none";
};

const startgame = () =>{
    document.getElementById("gamearea").style.display ="block";
    document.getElementById("container").style.display ="none";
};

 const startNewGame = () =>{
     
    document.getElementById("newgamebutton").style.display ="inline";
    usernumberupdate.setAttribute("disabled",true);
 }  

 //reload the page

   const newgamebegin = () =>{
       audio.play();
       window.location.reload();
   }
  //main logic of our game

  const compareguess= () => {
    audio.play();
      const usernumber = Number(document.getElementById("inputBox").value);
      userguess = [...userguess, usernumber];
      document.getElementById("guesses").innerHTML = userguess;

      //check the value low or high
      if(userguess.length<maxguess)
      {
      if(computerguess>usernumber)
      {
          userguessupdate.innerHTML = "Your guess is Low";
          usernumberupdate.value = " ";
      }else if(computerguess<usernumber)
      {
          userguessupdate.innerHTML = "Your guess is High";
          usernumberupdate.value = " ";
      }
      else{
          userguessupdate.innerHTML = "It's Correct";
          startNewGame();
      }
    }else{
        if(computerguess>usernumber)
        {
            userguessupdate.innerHTML = `You Loose!! correct number was ${computerguess}`;
            usernumberupdate.value = " ";
            startNewGame();
        }else if(computerguess<usernumber)
        {
            userguessupdate.innerHTML = `You Loose!! correct number was ${computerguess}`;
            usernumberupdate.value = " ";
            startNewGame();
        }
        else{
            userguessupdate.innerHTML = "It's Correct";
            startNewGame();
            }
    }
      document.getElementById("attempts").innerHTML = userguess.length;
  };
 const easymode = () =>{
    audio.play();
     maxguess=10;
     startgame();
 };
 const hardmode = () =>{
    audio.play();
     maxguess=5;
     startgame();
 };
