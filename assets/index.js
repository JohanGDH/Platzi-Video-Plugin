import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const buttonPlay = document.getElementById("#playAndStop");
const buttonMute = document.getElementById("#muteAndUnmute");

const player = new MediaPlayer({element: video, plugins: [
    new Autoplay(),
    new AutoPause(),
]});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.error(error);
    });
}