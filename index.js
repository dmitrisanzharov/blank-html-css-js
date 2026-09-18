function MainSw() {
    this.running = false;
    this.startTime = 0;
    this.endTime = 0;

    this.sta = function () {
        if (this.running) {
            alert('running, try to stop');
        } else {
            this.running = true;
            this.startTime = new Date();
        }
    };

    this.sto = function () {
        if (!this.running) {
            alert('its NOT running, start first');
        } else {
            this.running = false;
            this.endTime = new Date();
        }
    };

    this.res = function () {
        this.duration = 0;
        this.running = false;
        this.startTime = 0;
        this.endTime = 0;
    };

    Object.defineProperty(this, 'dur', {
        get: function(){
            if(this.running){
                return new Date() - this.startTime;
            } else {
                return this.endTime - this.startTime; 
            }
        }
    })
}

const sw = new MainSw();
