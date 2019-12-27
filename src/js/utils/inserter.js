class Inserter {
  cssByHref = (href) => {
    let css = document.createElement('link');
    css.setAttribute("rel", "stylesheet");
    css.href = href;
    document.head.appendChild(css);
  }

  cssByContent = (content) => {
    let css = document.createElement('style');
    css.innerHTML = content;
    document.head.appendChild(css);
  }

  jsBySrc = (src) => {
    let script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.src = src;
    document.head.appendChild(script);
  }

  jsByContent = (content) => {
    let script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.text = content;
    document.body.appendChild(script);
  }

  hiddenField = (id, name, value) => {
    let input = document.createElement('input');
    input.setAttribute("type", "hidden");
    input.setAttribute("name", name);
    input.setAttribute("id", id);
    input.setAttribute("value", value);
    document.body.appendChild(input);
  }

  pixelImg = (src) => {
    let pixel = document.createElement('img');
    pixel.src = src;
    pixel.style.cssText = "width: 1px; height: 1px; display: none;";
    document.body.appendChild(pixel);
  }
}

const $inserter = new Inserter();

export default $inserter;