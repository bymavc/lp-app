class Scroller {
  hard = (element) => {
    window.scroll({
      top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
      left: 0,
      behavior: "auto"
    });
  }

  smooth = (element) => {
    window.scroll({
      top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth"
    });
  }

  top = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
}

const $scroller = new Scroller();

export default $scroller;