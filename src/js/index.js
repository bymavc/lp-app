import "core-js/stable";
import "regenerator-runtime/runtime";
import 'popper.js';
import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import $inject from "./utils/inject";
import $inserter from "./utils/inserter";
import $scope from "./utils/scope";
import PaymentService from "./services/payment.service";
import LoadService from "./services/load.service";
import { checkHttps, parseQueryString, isDefined, jsonOrString, getHash } from "./utils/utilities";
import { DEPENDENCIES, PROD, DEV } from "./config/api-urls";
import { SCOPE, SERVICES, CONTROLLERS } from "./config/constants";
import ReportService from "./services/report.service";
import LoadError from "./errors/LoadError";
import CheckoutError from "./errors/CheckoutError";
import InitiatedData from "./objects/InitiatedData";
import router from "./modules/route/router";
import footerTemplate from "./modules/footer/footer.template";
import headerTemplate from "./modules/header/header.template";
import LandingController from "./modules/landing/landing.controller";
import lazyLoader from "./utils/lazyload";
import FaqController from "./modules/faq/faq.controller";

// checkHttps();
library.add(faShoppingBag, faChevronCircleRight, faChevronCircleLeft);
dom.watch();

// export for others scripts to use
window.$ = $;
window.jQuery = $;

async function launchApp() {
  try {
    let urlParams = parseQueryString();
    let id = document.getElementById("checkoutId").value;
    let mode = document.getElementById("checkoutMode").value

    if (isDefined(urlParams['force_reload']) && urlParams['force_reload'] === "yes") {
      window.location = window.location.href.replace("force_reload=yes", "force_reload=done");
    }

    $scope.set(SCOPE.ID, id);
    $scope.set(SCOPE.MODE, mode);
    $scope.set(SCOPE.API, (mode === "prod" ? PROD : DEV));
    $scope.set(SCOPE.URL_PARAMS, urlParams);

    $inject.register(SERVICES.REPORT, new ReportService());
    $inject.register(SERVICES.PAYMENT, new PaymentService());
    $inject.register(SERVICES.LOAD, new LoadService());

    $inject.register(CONTROLLERS.FAQ, new FaqController());
    $inject.register(CONTROLLERS.LANDING, new LandingController());

    $inserter.jsBySrc(DEPENDENCIES.STRIPE);
    $inserter.jsBySrc(DEPENDENCIES.PAYPAL);

    const headerHtml = headerTemplate({ productName: "SWAT Pants", faq: "FAQ", reviews: "Reviews", about: "About Us" });
    let header = document.getElementById('header');
    header.innerHTML = headerHtml;
    const footerHtml = footerTemplate({ currentYear: new Date().getFullYear(), siteUrl: window.location.host });
    let footer = document.getElementById('footer');
    footer.innerHTML = footerHtml;

    lazyLoader.listen("img.lazy");

    const loadService = $inject.get(SERVICES.LOAD);
    const landingController = $inject.get(CONTROLLERS.LANDING);
    landingController.setUpLanding();
    console.log("Checkout App: Loading");
    let data = await loadService.loadData();

    if (!isDefined(data)) throw new LoadError("Unable to get Checkout Data");
    if (!isDefined(data.cid) || !(data.cid > 0)) throw new CheckoutError("Invalid Checkout");
    if (!isDefined(data.c_status) || (data.c_status !== "on")) throw new CheckoutError("Unavailable Checkout");

    const {
      cid: checkoutId,
      main_product: checkoutMain,
      c_element_vars: elementVars,
      c_colors: checkoutColors,
      c_upgrades: upgradeStatus,
      c_upgrade_options: upgradeOptions,
      pixels: checkoutPixels,
      default_hit_fb_pixels: defaultPixels,
      cross_products: checkoutCross,
      addon_products: checkoutAddon,
      c_locale: checkoutLocale,
      c_processors: paymentProcessors,
      c_shipping_modal_status: shippingStatus,
      c_shipping_options: shippingOptions,
      c_addrflds_sort: addressFields,
      c_cardflds_sort: cardFields,
      c_userflds_sort: userFields,
      ...checkoutData
    } = data;

    if (!isDefined(checkoutId)) throw new CheckoutError("Undefined Checkout ID");
    if (!isDefined(checkoutMain)) throw new CheckoutError("Undefined Main Product");
    if (!isDefined(elementVars)) throw new CheckoutError("Undefined ElementVars");
    if (!isDefined(checkoutLocale)) throw new CheckoutError("Undefined Locale");

    $scope.set(SCOPE.ID, parseInt(checkoutId));
    $scope.set(SCOPE.MAIN, jsonOrString(checkoutMain));
    $scope.set(SCOPE.ADDON, jsonOrString(checkoutAddon));
    $scope.set(SCOPE.CROSS, jsonOrString(checkoutCross));
    $scope.set(SCOPE.UPGRADE, { status: upgradeStatus, options: jsonOrString(upgradeOptions) });
    $scope.set(SCOPE.SHIPPING, { status: shippingStatus, options: jsonOrString(shippingOptions) });
    $scope.set(SCOPE.PAYMENT, paymentProcessors.split("|"));
    $scope.set(SCOPE.FIELDS, { user: userFields.split("|"), address: addressFields.split("|"), card: cardFields.split("|") });
    $scope.set(SCOPE.PIXELS, { active: jsonOrString(checkoutPixels), default: jsonOrString(defaultPixels) });
    $scope.set(SCOPE.LABELS, jsonOrString(elementVars));
    $scope.set(SCOPE.COLOR, jsonOrString(checkoutColors));
    $scope.set(SCOPE.LOCALE, checkoutLocale);
    $scope.set(SCOPE.DATA, jsonOrString(checkoutData));

    new InitiatedData().init(SCOPE.INIT_DATA);

    console.log("Checkout App: Ready");
    router.navigateTo(getHash());
  } catch (err) {
    console.log(err.name + ": " + err.message);
  }
}

window.addEventListener('load', function () {
  launchApp();
});