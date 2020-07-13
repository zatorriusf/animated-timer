class Timer{
    constructor(initialDuration = 60,durationInput, startBtn, pauseBtn, callbacks){
        this.initialDuration = initialDuration
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.running = false;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = this.onComplete;
        }
        

        this.startBtn.addEventListener('click',this.start);
        this.pauseBtn.addEventListener('click',this.pause);
        this.durationInput.addEventListener('keypress', (evt) =>{
            if(evt.key === 'Enter'){
                this.setDuration(durationInput.value);
            }
        });
        this.durationInput.addEventListener('blur', (evt) =>{
            this.setDuration(durationInput.value);
        });
        this.setDuration(initialDuration);
    }
    
    start = () => {
        if(!this.running){
            this.running = !this.running;
            this.durationInput.disabled = true;
            this.tick();
            this.tickId = setInterval(this.tick,10);
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
        this.initialDuration = parseFloat(value)
        this.duration =this.initialDuration ;
        this.updateTimer();
    }
    tick = () =>{
        this.duration -= .01;
        this.updateTimer(); 
        if(this.duration <= 0){
            this.setDuration(this.initialDuration);
            this.pause();
        }
        if(this.onTick){
            this.onTick();
        }
    } 

    updateTimer(){
        const newTime = this.duration.toFixed(2);
        this.durationInput.value = newTime;
    }
}