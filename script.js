console.log("Welcome to Spotify")

// Initializing Parameters
let songIndex = 0;
let audioElement = new Audio('/songs/5.mp3');
let masterPlay = document.getElementById('masterPlay');
// audioElement.play();
let progressBar = document.getElementById('progressBar'); 
let playBtn = document.getElementsByClassName('playBtn');

let songs = [
    {
        songName: 'Heros-Tonight' , songPath:'/songs/5.mp3' , coverPath:'/covers/5.jpg' 
    },
    {
        songName: 'Heros-Tonight' , songPath:'/songs/5.mp3' , coverPath:'/covers/5.jpg' 
    },
    {
        songName: 'Heros-Tonight' , songPath:'/songs/5.mp3' , coverPath:'/covers/5.jpg' 
    },
    {
        songName: 'Heros-Tonight' , songPath:'/songs/5.mp3' , coverPath:'/covers/5.jpg' 
    },
    {
        songName: 'Heros-Tonight' , songPath:'/songs/5.mp3' , coverPath:'/covers/5.jpg' 
    }
    
]

// Play and Pause Event from Masterplay
masterPlay.addEventListener('click', function(){
    if(audioElement.paused || audioElement.currrentTime<=0){
        audioElement.play();
        console.log('Audio Played');
    }
    else{
        audioElement.pause();
        console.log('Audio Paused');
    }
})

//Change the Play svg to Pause ***Pending***
function changeSvg(event){
    if(event.target.tagName==='masterPlay'){

    }
}

// Time Update Event in Progress Bar
audioElement.addEventListener('timeupdate',function(){
    progress = parseInt(audioElement.currentTime * 100/ audioElement.duration);
    progressBar.value = progress;
})

// Chnage is Time Event in Progress Bar
progressBar.addEventListener('change', function(){
    audioElement.currentTime = (progressBar.value * audioElement.duration / 100);
})
