const Handlebars = require("handlebars");

const template = `<div id="error-template" class="container">
      <div class="row">
        <div class="col-12">
          <h1>Page Not Found</h1>
          <hr>
          <h3>The path '/{{path}}' does not exists on this site.</h3>
        </div>
      </div>
    </div>`;

const errorTemplate = Handlebars.compile(template);
export default errorTemplate;