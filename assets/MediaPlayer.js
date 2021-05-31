class MediaPlayer {
    constructor(config){
        const { element } = config;
        this.media = element;
        this.plugins = config.plugins || [];
    }
    play(){
        this.media.play();
    }
    stop(){
        this.media.pause();
    }    
}

export default MediaPlayer;