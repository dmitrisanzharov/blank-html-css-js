function StopWatch() {
    this.startTime = 0;
    this.endTime = 0;
    this.running = false;

    this.start = function () {
        if (this.running === true) {
            throw new Error('already running, sorry');
        }

        this.running = true;
        this.startTime = new Date();
    };

    this.stop = function () {
        if (this.running === false) {
            throw new Error('already stopped');
        }

        this.running = false;
        this.endTime = new Date();
    };

    this.reset = function () {
        this.startTime = 0;
        this.endTime = 0;
        this.duration = 0;
        this.running = false;
    };


    Object.defineProperty(this, 'duration', {
        get: function(){

            if(this.endTime === 0 && this.running === true){
                return new Date() - this.startTime;
            }

            return this.endTime - this.startTime; 
        }
    })

}

const sw = new StopWatch();
