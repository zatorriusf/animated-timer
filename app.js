class Timer{
    constructor(duration, startBtn, pauseBtn){
        this.duration = duration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        this.startBtn.addEventListener('click',this.start);
        this.pauseBtn.addEventListener('click',this.pause);
    }
    
    start(){
        console.log(`starting the timer`);
    }
    pause(){
        console.log(`let's pause here for a second`)
    }
    setDuration(e){
        
    }
}

const duration = document.querySelector('#duration');
const startbtn = document.querySelector('#start');
const pausebtn = document.querySelector('#pause');
const timer = new Timer(duration,startbtn,pausebtn);