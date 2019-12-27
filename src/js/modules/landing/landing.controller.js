import Glide from '@glidejs/glide';

export default class LandingController {
  constructor() {
    this.html = document.getElementById("app").innerHTML;

  }

  getContent = () => {
    return this.html;
  }

  setUpLanding = () => {
    this.setUpSliders();
  }

  setUpSliders = () => {
    new Glide('.glide').mount();
  }
}