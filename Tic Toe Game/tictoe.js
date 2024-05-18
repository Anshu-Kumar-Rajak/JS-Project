let boxes=document.querySelectorAll('.box');
let msg=document.querySelector('.win-msg');
let reset=document.querySelector('.reset');
let playerTurn=true;
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(playerTurn==true)
        {
            box.innerText='O';
            playerTurn=false;
        }
        else
        {
            box.innerText='X';
            playerTurn=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
let winArr=[[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];

function checkWinner()
{
    for(let pattern of winArr)
    {
        let box1 =boxes[pattern[0]].innerText
        let box2 =boxes[pattern[1]].innerText
        let box3 =boxes[pattern[2]].innerText
        if(box1!=='' && box2!=='' && box3!=='')
        {
            if(box1==box2 && box2==box3)
            {
                msg.style.display='block';
                msg.innerText =`Congratulation Player ${box1} Won`;
            }
        }
    }
}

reset.addEventListener('click', ()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText=''
    })
})

