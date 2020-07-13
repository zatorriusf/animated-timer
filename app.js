class Timer{
    constructor(duration, startBtn, pauseBtn){
        this.duration = duration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        this.startBtn.addEventListener('click',this.start());
        this.pauseBtn.addEventListener('click',this.pauseBtn());
    }
    
    start(){
        console.log(`starting the timer`);
    }
    pause(){
        console.log(`let's pause here for a second`)
    }
}