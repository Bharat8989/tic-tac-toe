let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let playerX = true; // Player X starts the game
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winPatterns = [
    [0, 1, 2], // 
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];
 
const resetGame = () => {
    playerX = true; // Reset player turn to X
    enabledBtn(); // Re-enable all boxes
    msgContainer.classList.add("hide"); // Hide message container
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        // box.innerText="abcd";
        if(playerX){
            box.innerText = "X";
            playerX = false;
        } else {
            box.innerText = "O";
            playerX = true;
        }
        box.disabled=true;
        checkWinner();
        
    });
});
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const disabledBtn= () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enabledBtn= () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner =(winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;

     msgContainer.classList.remove("hide");
     disabledBoxes();
}
const checkWinner =() =>{
    for (let pattern of winPatterns){
        
          let pos1Val=  boxes[pattern[0]].innerText;
          let pos2Val=  boxes[pattern[1]].innerText;
          let pos3Val=  boxes[pattern[2]].innerText;
          if(pos1Val != "" && pos2Val != "" && pos3Val != "")
          {
            if(pos1Val == pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
          }
    }
}
 
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);

