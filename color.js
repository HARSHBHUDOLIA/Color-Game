let numbers=6;
let colors=generateRandomColors(numbers);
let pickedColor=pickColor();
let messageDisplay=document.querySelector("#message");
let resbutton=document.getElementById("res");
let easybtn=document.getElementById("easy");
let hardbtn=document.getElementById("hard");
let squares=document.querySelectorAll(".square")
//This here is used to Chnage the text denoting the picked color
document.getElementById("pickedColor").innerHTML=pickedColor;

easybtn.addEventListener('click',function(){
  easybtn.classList.add("selected");
  hardbtn.classList.remove("selected");
  numbers=3;
  colors=generateRandomColors(numbers);
  colorAss();
  pickedColor=pickColor();
  document.getElementById("pickedColor").textContent=pickedColor;
  for(let i=0;i<=5;++i)
  {
    if(colors[i]){
      squares[i].style.background=colors[i];
    }
    else{
      squares[i].style.display="none";
    }
  }

})

hardbtn.addEventListener('click',function(){
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
  numbers=6;
  colors=generateRandomColors(numbers);
  colorAss();
  pickedColor=pickColor();
  document.getElementById("pickedColor").textContent=pickedColor;

  for(let i=0;i<=5;++i)
  {
   squares[i].style.background=colors[i];
     squares[i].style.display="block";
  }

})


resbutton.addEventListener("click",function(){
   colors=generateRandomColors(numbers);
   colorAss()
   pickedColor=pickColor();
   document.getElementById("pickedColor").textContent=pickedColor;
   document.querySelector("h1").style.backgroundColor="steelblue";
   messageDisplay.textContent="";
   resbutton.textContent="New Colors"
})




colorAss();

function colorAss(){
  for(let i=0;i<colors.length;i++)
  {
    squares[i].style.backgroundColor=colors[i];

    //This is to add eventListener
    squares[i].addEventListener('click',function(){
      let colorpicked=this.style.backgroundColor;
      if(colorpicked===pickedColor){
         messageDisplay.textContent="Correct Answer";
         colorChange();
         document.querySelector("h1").style.backgroundColor=colorpicked;
         resbutton.textContent="Play Again?"
      }
      else{
        this.style.background="#232323"
        messageDisplay.textContent="Wrong Answer";
      }

    })
    //Add event Listener ends here

  }
}

function colorChange(){
  //Change the color of the squares to correct colors
  for(let i=0;i<colors.length;i++){
    squares[i].style.backgroundColor=pickedColor;
  }
}

function pickColor(){
  let random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  let arr=[]
  for(let i=0;i<num;++i)
  {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`

}
