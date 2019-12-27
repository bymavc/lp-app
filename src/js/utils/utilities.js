/**
 * Force reload to https
 */
function checkHttps() {
  if (window.location.protocol !== "https:") {
    console.log("Checkout must be loaded using https, reloading...");
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
  }
}

/**
 * Retry fetch if fails
 * @param {String} url
 * @param {Number} n
 */
async function fetchRetry(url, n) {
  try {
    const data = fetch(url).then(res => {
      if (res.ok) return res;
      throw res;
    });
    return data;
  } catch (err) {
    if (n === 1) throw err;
    return await fetchRetry(url, n - 1);
  }
}

function getHash() {
  let returnValue = "";
  let hash = window.location.hash;
  let index1 = hash.indexOf("#");
  let index2 = hash.indexOf("/");
  if (!(index1 >= 0)) return "/";
  if (!(index2 >= 0)) return "/" + hash.substring(index1 + 1);
  return hash.substring(index1 + 1);
}

/**
 * Request query params from a given script existing in the DOM
 * @param {String} p example checkout.js
 */
function getParams(p) {
  let scripts = document.getElementsByTagName('script');

  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf("/" + p) > -1) {
      let query = scripts[i].src.split("?").pop().split("&");
      let queryParams = {};

      for (let j = 0; j < query.length; j++) {
        let pair = query[j].split("=");
        queryParams[pair[0]] = pair[1];
      }

      return queryParams;
    }
  }
  return {};
}

/**
 * Check if element is not null, empty or undefined
 * @param {*} element
 */
function isDefined(element) {
  return typeof element !== "undefined" && element !== null && element !== "";
}

/**
 * Returns true is element is visible on viewport
 * @param {DOMElement} el
 */
function isInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0]
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Returns true if the element is visible in DOM
 * @param {DOMElement} element 
 */
function isVisible(element) {
  return (element.offsetParent !== null);
}

/**
 * Check if element is a JSON object
 * @param {*} element 
 */
function jsonOrString(s) {
  try {
    return JSON.parse(s);
  } catch (err) {
    return s;
  }
}

/**
 * Parse query string
 * Returns object made with keys and values
 */
function parseQueryString() {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  let queryString = {};
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    let key = decodeURIComponent(pair[0]);
    let value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof queryString[key] === "undefined") {
      queryString[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof queryString[key] === "string") {
      let arr = [queryString[key], decodeURIComponent(value)];
      queryString[key] = arr;
      // If third or later entry with this name
    } else {
      queryString[key].push(decodeURIComponent(value));
    }
  }
  return queryString;
}

export { checkHttps, fetchRetry, getHash, getParams, isDefined, isInViewport, isVisible, jsonOrString, parseQueryString };