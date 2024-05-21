let data = {
    title: [
        "Твоя любовь манила",
        "Далеко",
        "Stereo Love x On The Floor",
        "WTF 2",
        "AHappy Nation"],
    artist: [
        "Тахмина",
        "BUSHIDO ZHO",
        "Unknown",
        "Ugovhb",
        "Ace Of Base"
    ],
    song: [
        "music/TvoyaLyubovManila.mp3",
        "music/Daleko.mp3",
        "music/OnTheFLoorStereoLove.mp3",
        "music/UgovhbWTF2.mp3",
        "music/AOBHappyNationS&R.mp3"],
    poster: [
        "https://www.domkrat.by/img/2021/audi/audi_rs7_minsk_01.jpg",
        "https://images.genius.com/76fdf4f8e43e177a400ee1a8b212ce20.1000x1000x1.jpg",
        "https://i.ytimg.com/vi/83r7aFelYn4/maxresdefault.jpg",
        "https://i.scdn.co/image/ab67616d00001e0229a6f1ee44ca818bffddc870",
        "https://i.ytimg.com/vi/G_ukZsiplG0/maxresdefault.jpg"]
}


let song = new Audio()
let currentSong = 0
function playSong() {
    song.src = data.song[currentSong]
    let artist = document.getElementById("artist")
    artist.textContent = data.artist[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play()
} window.onload = function () { playSong() }
function playOrPause() {
    let play = document.getElementById("play")
    let pause = document.getElementById("pause")
    if (song.paused) {
        pause.style.opacity = 1
        play.style.opacity = 0
        song.play()

    }
    else {
        pause.style.opacity = 0
        play.style.opacity = 1
        song.pause()
    }
}
song.addEventListener("timeupdate", function () {
    let fill2 = document.getElementsByClassName("fill2")
    let position = song.currentTime / song.duration
    fill2[0].style.width = position * 100 + "%"
    convertTime(song.currentTime)
    totalTime(song.duration)
    if (song.ended) { next() }
})
function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    currentTime[0].textContent = min + ":" + sec
}
function totalTime(seconds) {
    let duration = document.getElementsByClassName("duration")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    duration[0].textContent = min + ":" + sec
}
function next() {
    currentSong++
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong()
    document.getElementById("play").src = "images/play-button-arrowhead.png"
}
function prev() {
    currentSong--
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong()
    document.getElementById("play").src = "images/play-button-arrowhead.png"
}


function volumeRange() {
    let volumeImg = document.getElementById("volume");
    let volumeImgMute = document.getElementById("volume-mute");
    let volumeImgDown = document.getElementById("volume-down");
    let volumeImgMoreDown = document.getElementById("volume-down+");
    let range = document.getElementById("range");
    song.volume = range.value / 100

    if (range.value == 0) {
        volumeImgMute.style.opacity = 100
        volumeImg.style.opacity = 0
        volumeImgDown.style.opacity = 0
        volumeImgMoreDown.style.opacity = 0
    } else if (range.value > 55) {
        volumeImgMute.style.opacity = 0
        volumeImg.style.opacity = 100
        volumeImgDown.style.opacity = 0
        volumeImgMoreDown.style.opacity = 0
    } else if (range.value < 25) {
        volumeImgMute.style.opacity = 0
        volumeImg.style.opacity = 0
        volumeImgDown.style.opacity = 0
        volumeImgMoreDown.style.opacity = 100
    } else {
        volumeImgMute.style.opacity = 0
        volumeImg.style.opacity = 0
        volumeImgDown.style.opacity = 100
        volumeImgMoreDown.style.opacity = 0
    }
}

let vlmButtons = document.getElementsByClassName("mute");
let range = document.getElementById("range");

vlmButtons[0].addEventListener("click", function () {
    if (range.classList.contains("visible")) {
        range.classList.remove("visible");
    } else {
        range.classList.add("visible");
    }
});

let handle = document.getElementById('handle');

handle.addEventListener('click', function (event) {
    let rect = handle.getBoundingClientRect();
    let offsetX = event.clientX - rect.left;
    let handleWidth = handle.clientWidth;
    let newPosition = offsetX / handleWidth;
    song.currentTime = newPosition * song.duration;
});

let forward10 = document.getElementById("forward")
let backward10 = document.getElementById("backward")


forward10.addEventListener('click', function(){
    if(song.currentTime < song.duration - 10){
        song.currentTime = song.currentTime + 10
    }
    else{
        song.currentTime = song.duration - 1
    }
})
backward10.addEventListener('click', function(){
    if(song.currentTime > 10){
        song.currentTime = song.currentTime - 10
    }
    else{
        song.currentTime = 0
    }
})