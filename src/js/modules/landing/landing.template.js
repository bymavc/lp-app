const Handlebars = require('handlebars');

const template = `
  <div id="landing">{{{page}}}</div>
`;

const landingTemplate = Handlebars.compile(template);
export default landingTemplate;