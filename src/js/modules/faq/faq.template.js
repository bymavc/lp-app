const Handlebars = require('handlebars');

const template = `<div id="faq-template">
  <div class="container">
    <div class="row">
      <div class="col">
        {{{faqsHtml}}}
      </div>
    </div>
  </div>
</div>`;

const faqTemplate = Handlebars.compile(template);

export default faqTemplate;