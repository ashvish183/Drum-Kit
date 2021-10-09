var click=document.querySelectorAll(".drum")
for(var a=0;a<click.length;a++)
{
    document.querySelectorAll(".drum")[a].addEventListener("click",function(){
        makesound(this.innerHTML)
        buttonAnimation(this.innerHTML);
        
    })
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key)
})
function makesound(key){
    switch(key)
    {
        case "w":var audio=new Audio("/sounds/tom-1.mp3")
                 audio.play();
                 break;
        case "a":var audio=new Audio("/sounds/tom-2.mp3")
                 audio.play();
                 break;
        case "s":var audio=new Audio("/sounds/tom-3.mp3")
                 audio.play();
                 break;
        case "d":var audio=new Audio("/sounds/tom-4.mp3")
                 audio.play();
                 break;
        case "j":var audio=new Audio("/sounds/tom-5.mp3")
                 audio.play();
                 break;
        case "k":var audio=new Audio("/sounds/tom-6.mp3")
                 audio.play();
                 break;
        case "l":var audio=new Audio("/sounds/tom-7.mp3")
                 audio.play();
                 break;
    }
}
function buttonAnimation(button){
    var html=document.querySelector("."+button)
    html.classList.add("pressed")
    setTimeout(function(){
        html.classList.remove("pressed")
    },100)
}