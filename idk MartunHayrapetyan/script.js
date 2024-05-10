let data = {
    title : ["Твоя любовь манила",
            "Далеко",
            "Stereo Love x On The Floor",
            "Baby If you want x Arabic"],
    song: ["music/TvoyaLyubovManila.mp3",
            "music/Daleko.mp3",
            "music/OnTheFLoorStereoLove.mp3",
            "BabyIfYouArabic.mp3"],
    poster: ["https://www.domkrat.by/img/2021/audi/audi_rs7_minsk_01.jpg",
            "https://images.genius.com/76fdf4f8e43e177a400ee1a8b212ce20.1000x1000x1.jpg",
            "https://i.ytimg.com/vi/83r7aFelYn4/maxresdefault.jpg",
            "https://i1.sndcdn.com/artworks-000013416503-v6grq1-t500x500.jpg",]
}

let song = new Audio()

let currentSong = 0
function playSong(){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play()
}

window.onload = function(){
    playSong()
}

function playOrPause(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
        play.src = "images/pause.png"
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}