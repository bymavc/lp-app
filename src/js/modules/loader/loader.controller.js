const Nanobar = require('nanobar');

class LoaderController {
  interval = null;

  constructor() {
    this.loader = new Nanobar();
  }

  finish = () => {
    clearInterval(this.interval);
    this.loader.go(100);
  }

  load = () => {
    let percentage = 0;
    this.interval = setInterval(function () {
      if (percentage < 80) {
        this.loader.go(percentage);
        percentage++;
      } else {
        clearInterval(this.interval);
      }
    }.bind(this), 50);
  }
}

const loader = new LoaderController();
export default loader;