const colors=["green","red","yellow","purple","blue","cyan"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){
    const randomNum=getRandomNumber();
    console.log(randomNum);
    document.body.style.backgroundColor=colors[randomNum];
    color.textContent=colors[randomNum];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}