


// var x=document.querySelectorAll(".drum")
// for(var i=0;i<x.length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",funr);

// }

// function funr(){
//     alert("i got clicked");
// }


var x=document.querySelectorAll(".drum")
for(var i=0;i<x.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var innerelment=this.innerHTML;
        sound(innerelment);
        active(innerelment);
        
    
     
    }
    );

}


document.addEventListener("keypress",function(event){
    sound(event.key);
    active(event.key);


})


function sound(key){
    switch(key){
        case "w":
            var audio=new Audio('sounds/tom-1.mp3')
            audio.play()
        break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3')
            audio.play()
        break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3')
            audio.play()
        break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3')
            audio.play()
        break;
        case "j":
            var audio=new Audio('sounds/snare.mp3')
            audio.play()
        break;
        case "k":
            var audio=new Audio('sounds/crash.mp3')
            audio.play()
        break;
        case "l":
            var audio=new Audio('sounds/kick-bass.mp3')
            audio.play()
        break;
        default:
            console.log(innerelment)


    }


}


function active(ckey){

    var activekey=document.querySelector("."+ckey);
    activekey.classList.add("pressed");
    setTimeout(function(){

        activekey.classList.remove("pressed");
    }, 100)


}