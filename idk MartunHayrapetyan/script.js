let data = {
    title: [
    "Тахмина - Твоя любовь манила", 
    "BUSHIDO ZHO - Далеко", 
    "Stereo Love x On The Floor", 
    "Ugovhbw - WTF 2", 
    "Ace Of Base - Happy Nation"],
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
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    }
    else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}
song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")
    let fill2 = document.getElementsByClassName("fill2")
    let position = song.currentTime / song.duration
    fill[0].style.marginLeft = position * 100 + "%"
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
}
function prev() {
    currentSong--
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong()
}


function volumeRange(){
    let volumeImg = document.getElementById("volume-img");
    let range = document.getElementById("range");
    song.volume = range.value / 100

    if(range.value == 0){
        volumeImg.src = "./images/volume-mute.png"
    } else if(range.value > 75){
        volumeImg.src = "./images/volume.png"
    }else{
        volumeImg.src = "./images/volume-down.png"
    }
}
