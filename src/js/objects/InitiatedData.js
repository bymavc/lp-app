import $scope from "../utils/scope";
import { SCOPE } from "../config/constants";
import { isDefined, jsonOrString } from "../utils/utilities";
import CheckoutError from "../errors/CheckoutError";

export default class InitiatedData {
  init = (name) => {
    const checkoutMain = $scope.get(SCOPE.MAIN);
    const checkoutData = $scope.get(SCOPE.DATA);
    if (!isDefined(checkoutMain)) throw new CheckoutError("Undefined Main Product");
    let date = new Date();
    let month = date.getMonth();
    let fullDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    let hourStart = date.getHours();

    let prodTags = checkoutMain.prod_tags;
    let prodTagsSet = {};
    let prodTagsSelected = [];

    if (isDefined(prodTags)) prodTagsSet = jsonOrString(prodTags);
    Object.keys(prodTagsSet).forEach(key => { if (isDefined(prodTagsSet[key])) prodTagsSelected.push(prodTagsSet[key]) });

    const initiatedData = {
      content_type: "product",
      contents_ids: (isDefined(checkoutMain.fb_prod_id)) ? checkoutMain.fb_prod_id : checkoutMain.prod_id,
      contents: [{
        id: (isDefined(checkoutMain.fb_prod_id)) ? checkoutMain.fb_prod_id : checkoutMain.prod_id,
        item_price: checkoutMain.prod_sale_price / 100,
        item_name: checkoutMain.prod_name,
        quantity: "1"
      }],
      product_tags: prodTagsSelected,
      content_name: checkoutMain.prod_name,
      subtotal: checkoutMain.prod_sale_price / 100,
      domain: checkoutData.c_url,
      event_day: fullDate,
      event_month: month,
      event_hour: hourStart
    }

    window[name] = initiatedData;
  }
}