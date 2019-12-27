const Handlebars = require("handlebars");

const template = `<div id="about-template" class="container">
      <div class="row">
        <div class="col-12">
          <h1>About Us</h1>
          <hr>
          <p class="text-justify">We’re an established global e-commerce retailer that specializes in beauty products and we're currently
            partnered with a network of European, South American, and Asian distribution centers and manufacturers.
          </p>
          <h5><i>“I love working with our team, it’s always fun and exciting!”</i></h5>
          <p class="text-justify">
            Our team is very important to us. That's why we make it a priority to nurture an inspiring, stimulating,
            and supportive environment. We value open communication and transparency in all our processes. We take
            great care to celebrate and reward achievement in each individual team member.
            <br><br>
            Our central office in Switzerland is filled with plants and natural light, and we have a huge garden where
            everyone can go to and take a break. Though work is sometimes hard (and it often is, when you care for
            your customer), we make sure to arrange social events together, to take our mind off work, and enjoy each
            other’s company.
            <br><br>
            It’s working well. Here, you always have someone there for you.
          </p>
          <br><br>
          <h1>About You</h1>
          <hr>
          <h5><i>You are at the heart of everything we do, from our design and product, to our customer service.</i></h5>
          <p class="text-justify">
            Being a Superwoman/Superman is hard. A full-time job and then some. If you’ve ever felt like a juggler
            trying to balance so many moving things all at once, you know what we’re talking about. Your partner,
            kids, work, friends, keeping your chin high, and your thighs thin. And then you’ve gotta be strong and
            caring, and smart, and sexy, a parent, a lover, a warrior, and a friend. All at the same time.
            <br><br>
            It’s hard work, and if you’ve felt ever felt overwhelmed like people don’t get you, you’re not alone.
            Hundreds write to us each month, telling us stories with different scripts but all too similar acts.
            <br><br>
            We know how you feel and care for you. We’re here to help, like a friend you never knew you had. We see
            the extraordinary you. The Superwoman/Superman.
            <br><br>
            And though our product may not give you superpowers, we’ve made damn sure that it’s gonna make you feel
            like you’re Super-You.
          </p>
          <br><br>
          <h1>Why We're Different</h1>
          <hr>
          <p class="text-justify">
            We’re different because we care. Our strategy is simple:
            We're reactive to our audience’s needs. This means we're very careful about overproducing our product. If
            any given product strongly resonates with our community and does really well, we'll order more. But not
            before.
            <br><br>
            This might mean that sometimes our stock will be very limited, but it also means that we take great care
            to not over consume the environment’s resources.
            <br><br>
            It also means that if you’re still reading this page and our product is live, then it is more or less a
            fan favorite, already trending in some circles, and enjoyed by many people like you.
          </p>
          <br><br>
          <h1>Contact Us</h1>
          <hr>
          <p class="text-justify">
            If you have any further questions, please contact us on the en@oslobrands.com e-mail address.
          </p>
        </div>
      </div>
    </div>`

const aboutTemplate = Handlebars.compile(template);
export default aboutTemplate;