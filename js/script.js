let audioMain = document.querySelector("audio")
let audioPlay = document.querySelector(".play-music")
let audioPause = document.querySelector(".pause-music")
let audioPrevious = document.querySelector(".previous-music")
let audioNext = document.querySelector(".next-music")
let audioSpeed = document.querySelector(".speed-music")
let audioCover = document.querySelector(".cover img")
let audioName = document.querySelector(".music-name h3")

let musics = [
    "./audio/Farzad Farrokh - Havaye To (128).mp3",
    "./audio/Masih And Arash AP - Range Khoda (128).mp3",
    "./audio/Reza Bahram - Havaye Del (128).mp3",
    "./audio/Reza Yazdani - Jasad (128).mp3"
]

let musicIndex = 0

function playHandler() {
    audioMain.play()
}
function pauseHandler() {
    audioMain.pause()
}

function nextHandler() {
    musicIndex++

    if (musicIndex > musics.length - 1) {
        musicIndex = 0
    }

    audioMain.setAttribute("src", musics[musicIndex])

    if (musicIndex === 0) {
        audioCover.setAttribute("src","./images/Farzad Farrokh - Havaye To.jpg")
        audioName.innerHTML = "Farzad Farrokh - Havaye To"
    } else if (musicIndex === 1) {
        audioCover.setAttribute("src","./images/Masih And Arash AP - Range Khoda.jpg")
        audioName.innerHTML = "Masih And Arash AP - Range Khoda"
    } else if (musicIndex === 2) {
        audioCover.setAttribute("src","./images/Reza Bahram - Havaye Del.jpg")
        audioName.innerHTML = "Reza Bahram - Havaye Del"
    } else if (musicIndex === 3) {
        audioCover.setAttribute("src","./images/Reza Yazdani - Jasad.jpg")
        audioName.innerHTML = "Reza Yazdani - Jasad"
    }
    playHandler()

}
function previousHandler() {
    musicIndex--

    if (musicIndex < 0) {
        musicIndex = 3
    }


    audioMain.setAttribute("src", musics[musicIndex])

    if (musicIndex === 0) {
        audioCover.setAttribute("src","./images/Farzad Farrokh - Havaye To.jpg")
        audioName.innerHTML = "Farzad Farrokh - Havaye To"
    } else if (musicIndex === 1) {
        audioCover.setAttribute("src","./images/Masih And Arash AP - Range Khoda.jpg")
        audioName.innerHTML = "Masih And Arash AP - Range Khoda"
    } else if (musicIndex === 2) {
        audioCover.setAttribute("src","./images/Reza Bahram - Havaye Del.jpg")
        audioName.innerHTML = "Reza Bahram - Havaye Del"
    } else if (musicIndex === 3) {
        audioCover.setAttribute("src","./images/Reza Yazdani - Jasad.jpg")
        audioName.innerHTML = "Reza Yazdani - Jasad"
    }
    playHandler()

}
function speedHandler() {
    if (audioMain.playbackRate === 1.8) {
        audioMain.playbackRate = 1
        audioSpeed.style.backgroundColor = "rgb(232, 66, 66)"
        audioSpeed.style.border = "unset"
    } else if (audioMain.playbackRate === 1) {
        audioMain.playbackRate = 1.8
        audioSpeed.style.backgroundColor = "orange"
        audioSpeed.style.border = "2px solid black"
    }
}

audioPlay.addEventListener("click", playHandler)
audioPause.addEventListener("click", pauseHandler)
audioSpeed.addEventListener("click", speedHandler)
audioPrevious.addEventListener("click", previousHandler)
audioNext.addEventListener("click", nextHandler)