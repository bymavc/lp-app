const Handlebars = require('handlebars');

const template = `<nav class="navbar navbar-expand-lg navbar-white fixed-top">
    <a class="navbar-brand" href="#">{{productName}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
      aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#/faq">{{faq}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/reviews">{{reviews}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/about">{{about}}</a>
        </li>
      </ul>
      <a type="button" href="#/cart" class="nav-link d-none d-lg-block">
        <i class="fas fa-shopping-bag"></i>
      </a>
    </div>
  </nav>`;

const headerTemplate = Handlebars.compile(template);
export default headerTemplate;