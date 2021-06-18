
import MediaPlayer from "../MediaPlayer";

class AutoPause {

    private threshold: number;
    private player: MediaPlayer;


    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    run(player: MediaPlayer) {
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });
        
        observer.observe(this.player.media);
        document.addEventListener('visibilitychange',this.handlerVisibilityChange)
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;

        isVisible 
        ? this.player.play()
        : this.player.stop();        
    };

    private handlerVisibilityChange(){
        const isVisible = document.visibilityState === 'visible';

        isVisible
        ? this.player.play()
        : this.player.stop();
    }
};

export default AutoPause;