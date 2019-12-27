const ENDPOINT = "/apiv3.php";
const RADAR = "/radar.php";
const PIXEL_RADAR = "/pixel_radar.php";
const PROD = "https://payments.uvhero.net/v3";
const DEV = "https://dev.wideally.com/v3";

const DEPENDENCIES = {
  STRIPE: "https://js.stripe.com/v3/",
  PAYPAL: "https://www.paypalobjects.com/api/checkout.js",
  SENTRY: "https://ac2c1e2deb7142859e008a62079792cf@sentry.io/1814364",
  IP_API: "https://pro.ip-api.com/json/?key=2bEojeM8E2RrQBy"
}

export { DEPENDENCIES, ENDPOINT, DEV, PROD, RADAR, PIXEL_RADAR };