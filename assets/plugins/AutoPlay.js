class Autoplay {

    run(player)   {
        if(!player.muted) {
            player.muted = true;
        } else if (player.muted = false) {
            player.muted = false
        }        
        player.play();
    }

}

export default Autoplay;