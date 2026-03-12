let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newgamebutton");
let msg=document.querySelector("#msg");
let container=document.querySelector(".msgcontainer")
let turn0=true;

let winnercombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clcicked");
    
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });

    
});
const checkWinner=()=>{
    for(let p of winnercombo){
    
       /* console.log([p[0]],[p[1]],[p[2]]);
        console.log(boxes[p[0]],boxes[p[1]],boxes[p[2]]);*/

        let pos1=boxes[p[0]].innerText;
        let pos2=boxes[p[1]].innerText;
        let pos3=boxes[p[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
             
                showWinner(pos1);
            }
        }
}
};
const showWinner=(winner)=>{
    msg.innerText=`Contragulations!!! , The Winner is ${winner}`;
    container.classList.remove("hide");
    newbtn.classList.remove("hide");
    msg.classList.remove("hide");
      
    disableboxes();
}
const disableboxes=()=>{
    for(let b of boxes){
        b.disabled=true;
    }
}
const enableboxes=()=>{
    for(let b of boxes){
        b.disabled=false;
        b.innerText='';
    }
}
const resetgame=()=>{
    turn0=true;
    enableboxes();
    container.classList.add("hide");
      newbtn.classList.add("hide");
        msg.classList.add("hide");
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);