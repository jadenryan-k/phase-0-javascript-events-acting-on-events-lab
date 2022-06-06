// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left)
    if (left<360){
        dodger.style.left =  `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (rex){
    console.log(rex)
    if (rex.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    else if(rex.key === "ArrowRight"){
        moveDodgerRight();
    }
})