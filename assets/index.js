import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const buttonPlay = document.getElementById("#playAndStop");
const buttonMute = document.getElementById("#muteAndUnmute");

const player = new MediaPlayer({element: video, plugins: [
    new Autoplay()
]});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
