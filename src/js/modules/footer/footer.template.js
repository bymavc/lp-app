const Handlebars = require("handlebars");

const template = `
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <ul class="footer-links mb-3">
            <li class="footer-link">
              <a href="#/hire">
                We're Hiring
              </a>
            </li>
            <li class="footer-link">
              <a href="#/ambassador">
                Become a Brand Ambassador
              </a>
            </li>
            <li class="footer-link">
              <a href="#/secure">
                Secure Payments
              </a>
            </li>
            <li class="footer-link">
              <a href="#/terms">
                Terms & Conditions
              </a>
            </li>
            <li class="footer-link">
              <a href="#/privacy">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <p class="text-center">
            Copyright © 2015 - {{currentYear}}
          </p>
          <p class="text-center">{{siteUrl}}</p>
        </div>
      </div>
    </div>
`;

const footerTemplate = Handlebars.compile(template);
export default footerTemplate;