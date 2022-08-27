console.log("Welcome to Spotify");

// Initializing Parameters
let songIndex = 0;
let counter = 0;
let audioElement = new Audio("/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterPause = document.getElementById("masterPause");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
// audioElement.play();
let progressBar = document.getElementById("progressBar");
let playbtn = document.getElementsByClassName("play-btn");
let songPlay = document.getElementsByClassName("songPlay");
let songPause = document.getElementsByClassName("songPause");
let pausebtn = document.getElementsByClassName("pause-btn");
let songName = document.getElementById("songName");
let gif = document.getElementById("gif");
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
    gif.style.opacity = 1;
  } else {
    masterPause.classList.add("none");
    masterPlay.classList.remove("none");
    audioElement.pause();
    gif.style.opacity = 0;
  }
};
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

const makeAllPlays = () => {
  Array.from(playbtn).forEach((element) => {
    element.classList.remove("item-none");
  });
};

const makeNonePause = () => {
  Array.from(pausebtn).forEach((element) => {
    element.classList.add("item-none");
  });
};

//Playing Audio through PlayBTN
Array.from(playbtn).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    makeNonePause();
    let i = parseInt(e.target.id) - 1;
    playbtn[i].classList.add("item-none");
    pausebtn[i].classList.remove("item-none");
    // audioElement = new Audio("/songs/[i].mp3");
    audioElement.src = `songs/${i + 1}.mp3`;
    console.log(audioElement);
    songName.innerText = songs[i].songName;
    audioElement.play();
    masterPlay.classList.add("none");
    masterPause.classList.remove("none");
    gif.style.opacity = 1;
  });
});

Array.from(pausebtn).forEach((element) => {
  element.addEventListener("click", (e) => {
    let i = parseInt(e.target.id) - 1;
    pausebtn[i].classList.add("item-none");
    playbtn[i].classList.remove("item-none");
    audioElement.pause();
    masterPause.classList.add("none");
    masterPlay.classList.remove("none");
    gif.style.opacity = 0;
  });
});

// Backward and Forward button functions
backward.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 4;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `/songs/${songIndex + 1}.mp3`;
  songName.innerText = songs[songIndex].songName;
  audioElement.play();
  masterPlay.classList.add("none");
  masterPause.classList.remove("none");
  gif.style.opacity = 1;
});

forward.addEventListener("click", () => {
  if (songIndex >= 4) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `/songs/${songIndex + 1}.mp3`;
  songName.innerText = songs[songIndex].songName;
  audioElement.play();
  masterPlay.classList.add("none");
  masterPause.classList.remove("none");
  gif.style.opacity = 1;
});
