class Timer{
    constructor(duration, startBtn, pauseBtn){
        this.durationInput = duration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.running = false;

        this.startBtn.addEventListener('click',this.start);
        this.pauseBtn.addEventListener('click',this.pause);
    }
    
    start = () => {
        if(!this.running){
            console.log(`starting the timer`);
            this.running = !this.running;
            this.durationInput.disabled = true;
            this.tick();
            this.tickId = setInterval(this.tick,1000);
        } else {
            console.log(`The timer is already running`);
        }
    }
    pause = () => {
        if(this.running){
            console.log(`let's pause here`);
            this.durationInput.disabled = false;
            clearInterval(this.tickId);
            this.running = !this.running;
        } else {
            console.log(`cannot pause what isn't running`)
        }
    }
    setDuration = (e) => {

    }
    tick = () =>{
        console.log(`tick`);
    }
}

const duration = document.querySelector('#duration');
const startbtn = document.querySelector('#start');
const pausebtn = document.querySelector('#pause');
const timer = new Timer(duration,startbtn,pausebtn);