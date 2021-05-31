import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay'

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({element: video, plugins: [
    new Autoplay()
]});
button.onclick = () => {
    if (video.paused === false) {
        player.stop();
    } else if (video.paused === true) {
        player.play();
    }
}