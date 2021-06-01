class MediaPlayer {
    constructor(config){
        const { element } = config;
        this.media = element;
        this.plugins = config.plugins || [];


    }

    _InitPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(MediaPlayer)
        });
    }

    
    togglePlay(){
        if (this.media.paused === false) {
            this.media.pause();
        } else if (this.media.paused === true) {
            this.media.play();
        }
    
    }
    
    mute(){
        this.media.muted = true;
    }

    unMute(){
        this.media.muted = false;
    }
}

export default MediaPlayer;