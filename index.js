function MyStopWatch() {
    this.started = false;
    this.startTime = 0;
    this.endTime = 0;

    this.reset = function () {
        this.started = false;
        this.startTime = 0;
        this.endTime = 0;
        return;
    };

    this.start = function () {
        if (this.started === true) {
            alert('error, the sw is already running');
            return;
        }
        console.log('started');
        this.startTime = new Date();
        this.started = true;
    };

    this.stop = function () {
        if (this.started === false) {
            alert('start the sw first please');
            return;
        }

        this.endTime = new Date();
        this.started = false;
        console.log('stopped');
    };

    this.t = function () {
        console.log('this', this);
    };

    // this.duration = function () {
    //     if (this.started === true) {
    //         console.log('duration condition 1');
    //         let now = new Date();
    //         return (now - this.startTime)/1000;
    //     }

    //     console.log('duration condition 2');
    //     return (this.endTime - this.startTime)/1000;
    // };

    Object.defineProperty(this, 'duration', {
        get: function () {
            if (this.started === true) {
                console.log('duration condition 1');
                let now = new Date();
                return (now - this.startTime) / 1000;
            }

            console.log('duration condition 2');
            return (this.endTime - this.startTime) / 1000;
        }
    });
}

let sw = new MyStopWatch();
