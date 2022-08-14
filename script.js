console.log("Welcome to Spotify");

// Initializing Parameters
let songIndex = 0;
let counter = 0;
let audioElement = new Audio("/songs/5.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterPause = document.getElementById("masterPause");
// audioElement.play();
let progressBar = document.getElementById("progressBar");
let playbtn = document.getElementById("play-btn");
let songPlay = document.getElementsByClassName("songPlay");
let pausebtn = document.getElementById('pause-btn');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Heros Tonight",
    songPath: "/songs/5.mp3",
    coverPath: "/covers/5.jpg",
  },
  {
    songName: "Cielo - Huma",
    songPath: "/songs/2.mp3",
    coverPath: "/covers/1.jpg",
  },
  {
    songName: "Mortals - Warriyo",
    songPath: "/songs/1.mp3",
    coverPath: "/covers/6.jpg",
  },
  {
    songName: "Electronic Beats",
    songPath: "/songs/3.mp3",
    coverPath: "/covers/3.jpg",
  },
  {
    songName: "Jazz Music",
    songPath: "/songs/4.mp3",
    coverPath: "/covers/9.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Play and Pause Event from Masterplay
// masterPlay.addEventListener("click", function () {
//   if (audioElement.paused || audioElement.currrentTime <= 0) {
//     audioElement.play();
//   }
// });

// masterPause.addEventListener("click", () => {
//   audioElement.pause();
// });

// Play and Pause Event from Masterplay (Simultaenous Swapping of Play and Pause svgs alongwith Playing and Pausing Audio)
const toggle = () => {
  counter = counter + 1;
  if (counter % 2 !== 0) {
    masterPlay.classList.add("none");
    masterPause.classList.remove("none");
    audioElement.play();
  } else {
    masterPause.classList.add("none");
    masterPlay.classList.remove("none");
    audioElement.pause();
  }
}
masterPlay.addEventListener("click", toggle);
masterPause.addEventListener("click", toggle);


// Time Update Event in Progress Bar
audioElement.addEventListener("timeupdate", function () {
  progress = parseInt((audioElement.currentTime * 100) / audioElement.duration);
  progressBar.value = progress;
});

// Change in Time Event in Progress Bar
progressBar.addEventListener("change", function () {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

//Playing Audio through PlayBTN
Array.from(songPlay).forEach( (element) =>{
  element.addEventListener("click", (e)=> {
    console.log(e.target);
    e.target.classList.add("item-none");
    pausebtn.classList.remove("item-none");
    // audioElement.play();
  });
});

const makeAllPlays = () =>{

}
