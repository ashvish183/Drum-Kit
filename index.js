// for(let a=0;a<document.querySelectorAll(".drum").length;a++)
// {
//     document.querySelectorAll(".drum")[a].addEventListener("click",function(){
//         var audi= new Audio("/sounds/tom-"+String(a+1)+".mp3");
//         audi.play();
//     })
// }

var click=document.querySelectorAll(".drum")
for(var a=0;a<click.length;a++)
{
    document.querySelectorAll(".drum")[a].addEventListener("click",function(){
        makesound(this.innerHTML)
        buttonAnimation(this);
        
    })
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
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
    button.classList.add("pressed")
    setTimeout(function(){
        button.classList.remove("pressed")
    },100)
}