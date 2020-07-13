class Timer{
    constructor(durationInput, startBtn, pauseBtn){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.running = false;
        

        this.startBtn.addEventListener('click',this.start);
        this.pauseBtn.addEventListener('click',this.pause);
        this.setDuration();
    }
    
    start = () => {
        if(!this.running){
            this.running = !this.running;
            this.durationInput.disabled = true;
            this.setDuration(this.durationInput.value);
            this.tick();
            this.tickId = setInterval(this.tick,1000);
        }
    }
    pause = () => {
        if(this.running){
            this.durationInput.disabled = false;
            clearInterval(this.tickId);
            this.running = !this.running;
        }
    }
    setDuration = (value = 60) => {
        this.duration = value;
        this.updateTimer();
    }
    tick = () =>{
        this.duration -= 1;
        this.updateTimer(); 
        if(this.duration === 0){
            this.setDuration();
        }
    } 

    updateTimer(){
        this.durationInput.value = this.duration;
    }
}