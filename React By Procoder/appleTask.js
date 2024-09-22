let hundredApples = document.getElementById("hundApplesDiv").innerText;
let leftSideApples = Number(hundredApples.match(/\d+/)[0]); 

let zeroApples = document.getElementById("zeroApplesDiv").innerText;
let rightSideApples = Number(zeroApples.match(/\d+/)[0]);

let leftArrow = document.getElementById("leftArrow");
let hundAppleSpan = document.getElementById("hundAppleSpan");
let zeroAppleSpan = document.getElementById("zeroAppleSpan");

leftArrow.addEventListener("click",()=>{
  if(leftSideApples == 0){
    alert(`you have 0 apples so you send more apples there !`)
  }
  else{
  leftSideApples-=1;
  hundAppleSpan.innerText = leftSideApples;
  rightSideApples+=1;
  zeroAppleSpan.innerText = rightSideApples;
  }
})

let rightArrow = document.getElementById("rightArrow");
  rightArrow.addEventListener("click",()=>{
    if(rightSideApples == 0){
    alert(`you have 0 apples so you send more apples there !`)
    }
    else{
    rightSideApples-=1;
    zeroAppleSpan.innerText = rightSideApples;
    leftSideApples+=1;
    hundAppleSpan.innerText = leftSideApples;
  }
  })
  