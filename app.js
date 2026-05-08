let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
let userparascore=document.querySelector("#user-score");
let compparascore=document.querySelector("#comp-score");
let newmsg=document.querySelector("#msg");

choices.forEach((choice)=>{
choice.addEventListener("click",()=> {
const userchoice= choice.getAttribute("id");
       
playgame(userchoice);
    });
});
const drawgame=() =>{
    console.log("ITS A DRAW GANME!!");
    newmsg.style.backgroundColor= "#44444E"
    newmsg.innerText="ITS A DRAW GAME !!"

}
//computer move
const gencompchoice =() =>{
    const options=["ROCK", "PAPER", "SCISSOR"];
   const randomval= Math.floor(Math.random() *3);
   return options[randomval];

}

const showinner=(userwin,userchoice,compchoice) =>{
    if (userwin){
        console.log("you won");
        newmsg.innerText=`YOUR ${userchoice} BEATS ${compchoice}`
        userscore++;
        userparascore.innerText=userscore;
        newmsg.style.backgroundColor= "#347433"
    }else{
        console.log("you lost!!");
        compscore++;
        compparascore.innerText=compscore;
        newmsg.innerText=` ${compchoice} BEATS YOUR ${userchoice}`
        newmsg.style.backgroundColor= "#DB1A1A"
    }

}
   
    const playgame=(userchoice) => {
    console.log("user choice is ",userchoice);
    const compchoice= gencompchoice();
    console.log("computer choice is ",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="ROCK"){
            userwin=compchoice==="PAPER"?false:true;
        }
        else if(userchoice==="PAPER"){
            userwin=compchoice==="SCISSOR"?false:true;
        }
        else{
           userwin=compchoice==="ROCK"?false:true;
        }
        showinner(userwin,userchoice,compchoice);
    }

    };

