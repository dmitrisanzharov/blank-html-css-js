function MySw() {
    this.isRunning = false;
    this.startTime = 0;
    this.endTime = 0;

    this.start = function () {
        if (this.isRunning === true) {
            alert('already running');
        } else {
            this.startTime = new Date();
            this.isRunning = true;
        }
    };

    this.stop = function () {
        if (!this.isRunning) {
            alert('start the sw first');
        } else {
            this.isRunning = false;
            this.endTime = new Date();
        }
    };

    this.reset = function () {
        this.isRunning = false;
        this.startTime = 0;
        this.endTime = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function(){
            if(this.isRunning){
                return new Date() - this.startTime; 
            } else {
                return this.endTime - this.startTime; 
            }
        }
    })


    // end of object
}

const sw = new MySw();
