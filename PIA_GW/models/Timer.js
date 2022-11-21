export default class Timer{
    constructor(temp){
        this.interval = null;
        this.remainingSeconds = temp;
        this.activo = false;
    }

    updateInterfaceTime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        console.log(minutes, seconds);
    }

    start(){
        if(this.remainingSeconds === 0) return;
        this.interval = setInterval(()=>{
            this.activo = true;
            this.remainingSeconds--;
            this.updateInterfaceTime();
            if(this.remainingSeconds === 0){
                this.activo = false;
                this.pause();
            }
        }, 1000);
        this.updateInterfaceTime();
    }
    pause(){
        clearInterval(this.interval);
        this.interval = null;
        this.activo = false;
    }
}