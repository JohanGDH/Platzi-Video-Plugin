
import MediaPlayer from "../MediaPlayer";

class Autoplay {

    run(player: MediaPlayer)   {
        if(!player.media.muted) {
            player.media.muted = true;
        } else if (player.media.muted = false) {
            player.media.muted = false
        }        
        player.play();
    }

}

export default Autoplay;