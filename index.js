// for aside 
console.log("Welcome");
suraindex=0;
let audioplay=new Audio("Surah/1.mp3");
let masterplay=document.querySelector("#masterplay");
let progressbar=document.querySelector("#progressbar");
let allsurah=document.querySelectorAll(".suraicon");
masterplay.addEventListener("click",(e)=>{
    console.log(e.target.id);
    if(audioplay.paused||audioplay.currentTime==0){
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioplay.play();
    }
    else{
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        audioplay.pause();
    }
})

// middlesection
function playallicon(){
    Array.from(allsurah).forEach((element)=>{
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    })
}
function playfunction(e){
    index=e.target.id;
    audioplay.src=`Surah/${index}.mp3`;
    playallicon();
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioplay.play();
}
function pausefunction(e){
    e.target.classList.remove("fa-pause-circle");
    e.target.classList.add("fa-play-circle");
    audioplay.pause();
}
Array.from(allsurah).forEach((element)=>{
    element.addEventListener("click",function(e){
        console.log(audioplay.currentTime);
        if(audioplay.currentTime==0||audioplay.paused){
            playfunction(e);
        }
        else{
            pausefunction(e);
            if(audioplay.src!==`http://127.0.0.1:5500/Surah/${e.target.id}.mp3`){
                console.log(audioplay.src);
                playfunction(e);
            }
        }
    })
})
