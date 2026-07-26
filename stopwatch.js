function StopWatch(){
    console.log('this', this);

    let startTime = 0;
    let endTime = 0;
    let started = false;


    this.start = function(){
        if(start){
            throw new Error('already running')
        }
        started = true;
        startTime = new Date();
    }


    this.stop = function(){
        if(!start){
            throw new Error('not started')
        }

        started = false;
        endTime = new Date();
    }

    this.duration = function(){
        return endTime - startTime;
    }

    this.reset = function(){
        startTime = 0;
        endTime = 0;
        started = false; 
    }


}

const sw = new StopWatch();

console.log(sw);