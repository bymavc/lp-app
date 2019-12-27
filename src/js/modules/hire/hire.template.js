const Handlebars = require('handlebars');

const template = `<div id="hire-template">
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>We're Hiring!</h3>
        <p>
          Do you want to work with the Oslo Brands team? We’re hiring in many different areas! Fill the form below
          and we’ll contact you shortly:
        </p>
        <form name="hiring-form" method="post" enctype="multipart/form-data">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" class="form-control" max-length="30" min-length="7" required>
          </div>
          <div class="form-group">
            <label for="name">Email</label>
            <input type="email" name="email" class="form-control" max-length="30" min-length="7" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="phone" name="phone" class="form-control" max-length="13" min-length="13" required>
          </div>
          <div class="form-group">
            <label>Curriculum Vitae</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" name="file" required>
              <label class="custom-file-label" for="file">Choose file</label>
            </div>
          </div>
          <div class="form-group">
            <label for="name">Message</label>
            <textarea type="text" name="message" class="form-control" rows="5" required></textarea>
          </div>
          <br>
          <input type="submit" name="submit" class="btn btn-dark float-right" id="hiring-submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</div>`;

const hireTemplate = Handlebars.compile(template);

export default hireTemplate;