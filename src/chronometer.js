class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
    // ... your code goes here
    
    const timeCount = () => {
      this.currentTime = this.currentTime +1;

      if (printTimeCallback) {
        printTimeCallback();
      }
    }
    this.intervalId = setInterval(timeCount, 10);

    return this.currentTime ;
  }

  getMinutes() {
    // ... your code goes here

    const minutes = Math.floor(this.currentTime / 6000);

    return minutes;
  }

  getSeconds() {
    // ... your code goes here

   // const seconds = this.currentTime % 60;

   const seconds = Math.floor(this.currentTime /100) % 60

    return seconds;
  }

  getCentiseconds(){

    const centiSeconds = this.currentTime % 100;

    return centiSeconds;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
   
    if(value.toString().length === 1){

      return "0" + value.toString()
    }

    return value.toString()   
  }

  stop() {
    // ... your code goes here

    return clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here

    this.currentTime = 0;

    return clearInterval(this.currentTime)
  }

  split() {
    // ... your code goes here

    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());


    const formattedSplit = `${minutes}:${seconds}.${centiSeconds}`
    
    return formattedSplit

  }
}
