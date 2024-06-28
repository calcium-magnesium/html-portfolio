var started =false;
document.addEventListener("keydown",function (){
if(!started){started = true;
nextSequence();}
});
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    gamePattern.push(buttonColors[randomNumber]);
    var selectedButton = document.querySelector("#"+buttonColors[randomNumber]);
    selectedButton.classList.add("pressed");
    var audio = new Audio("./sounds/"+buttonColors[randomNumber]+".mp3");
    audio.play();
    setTimeout(function(){selectedButton.classList.remove("pressed");},100);
}

var curr =0;
var buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        //console.log(gamePattern[0]);
        if(started){
            event.target.classList.add("pressed");
            setTimeout(function(){event.target.classList.remove("pressed");},100);
            if(gamePattern[curr]===event.target.id){
                var audio2 = new Audio("./sounds/"+gamePattern[curr]+".mp3");
                audio2.play();
                curr++;
                
                if(curr===gamePattern.length){
                    setTimeout(nextSequence,500);
                    curr =0;
                }
                //console.log(gamePattern[curr]);
            }
            else{
                var heading = document.querySelector("#level-title");
                heading.innerHTML = "wrong";
                setTimeout(function(){heading.innerHTML ="Press A Key to Start"},1000);
                gamePattern = [];
                audio2 = new Audio("./sounds/wrong.mp3");
                audio2.play();
                curr= 0;
                started  = false;
            }
        }
       
        
    });
}

// var check = true;
// while(check){
//     nextSequence();
// }



