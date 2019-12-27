const Router = require("vanilla-router");
import loader from "../loader/loader.controller";
import errorTemplate from '../error/error.template';
import aboutTemplate from '../about/about.template';
import $scroller from "../../utils/scroller";
import $inject from "../../utils/inject";
import { CONTROLLERS } from "../../config/constants";
import lazyLoader from "../../utils/lazyload";
import landingTemplate from "../landing/landing.template";
import faqTemplate from "../faq/faq.template";
import hireTemplate from "../hire/hire.template";

const router = new Router({
  mode: 'hash',
  root: "/",
  page404: (path) => {
    loader.load();
    let app = document.getElementById("app");
    const html = errorTemplate({
      path: path
    });
    app.innerHTML = html;
    $scroller.top();
    loader.finish();
  }
});

router.add("", () => {
  loader.load();
  let app = document.getElementById("app");
  const page = $inject.get(CONTROLLERS.LANDING).getContent();
  const html = landingTemplate({ page: page });
  app.innerHTML = html;
  lazyLoader.listen("img.lazy");
  $inject.get(CONTROLLERS.LANDING).setUpLanding();
  $scroller.top();
  loader.finish();
});

router.add(/^checkout$/i, () => {
  loader.load();
  $scroller.top();
  loader.finish();
});

router.add(/^about$/i, () => {
  loader.load();
  let app = document.getElementById("app");
  const html = aboutTemplate();
  app.innerHTML = html;
  $scroller.top();
  loader.finish();
});

router.add(/^faq$/i, () => {
  loader.load();
  let app = document.getElementById("app");
  const faqHtml = $inject.get(CONTROLLERS.FAQ).getContent();
  const html = faqTemplate({ faqsHtml: faqHtml });
  app.innerHTML = html;
  $inject.get(CONTROLLERS.FAQ).setUpListeners();
  $scroller.top();
  loader.finish();
});

router.add(/^hire$/i, () => {
  loader.load();
  let app = document.getElementById("app");
  const html = hireTemplate();
  app.innerHTML = html;
  $scroller.top();
  loader.finish();
});

router.addUriListener();

export default router;