import MediaPlayer from './MediaPlayer';
import Autoplay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

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
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error)
    })
}