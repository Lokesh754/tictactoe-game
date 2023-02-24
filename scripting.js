console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let chaal = "X";
let finish=false;
// Function to change chaal

const changeTurn=()=>
{
    return chaal==="X"?"O":"X";
}

//Function to check win
const checkWin=()=>
{
    let boxtexts=document.getElementsByClassName('boxtext');
    let win=[[0,1,2,5,5,0],[3,4,5,5,15,0],[6,7,8,5,25,0],[0,3,6,-5,15,90],[1,4,7,5,15,90],[2,5,8,15,15,90],[0,4,8,5,15,45],[2,4,6,5,15,135]];
    win.forEach(e =>
        {
            if( ((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) ) && (boxtexts[e[0]].innerText!==''))
            {
                gameover.play();
                gameover.volume=0.5;
                document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" won";
                finish=true;
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="150px";
                document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width="20vw";
                
            }
            
        }          )
    }
    
    
    //Game Logic
    
    music.play();
    music.volume=0.1;


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>
    {
        let boxtext=element.querySelector('.boxtext');
        element.addEventListener('click',()=>
        {
            if(boxtext.innerText==='')//agar khali hai to
            {
                
                
                if(!finish)
                {
                    boxtext.innerText=chaal;//usme chaal daal do
                    chaal=changeTurn();//chaal ko X or O badal do
                    checkWin();//check karo kahi koi jeeta to nahi
                    if(!finish)
                    {
                      turn.play();//tunn sound play kar do
                      turn.volume=0.5;
                      document.getElementsByClassName('info')[0].innerText="Turn for "+chaal;
                    }
                } 
            }
        }                       )

    }                     )

    //Reset implementation
    reset.addEventListener('click',()=>
    {
        let boxtext=document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(element=>
            {
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.transition="width 0s ease-in-out";
                element.innerText="";
                chaal="X";
                document.getElementsByClassName('info')[0].innerText="Turn for "+chaal;
                finish=false;
                music.pause();
                music.play();
                music.volume=0.1;
                document.querySelector(".line").style.width="0";
            }
                                   )
    }
                            )