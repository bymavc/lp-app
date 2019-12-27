class CookieManager {
  get(name) {
    const n = name + "=";
    const d = decodeURIComponent(document.cookie);
    const ca = d.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return "";
  }

  set(name, value, exp) {
    let d = new Date();
    d.setTime(d.getTime() + exp * 1000 * 60 * 60 * 24);
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  clear(name) {
    this.set(name, "", -1);
  }
}

const $cookies = new CookieManager();

const affiliateCookie = {
  get: () => {
    return $cookies.get("wdaffid");
  },
  set: (affId, exp) => {
    if (isDefined(affId)) {
      let duration = isDefined(exp) && exp > 0 ? exp : 30 * 24 * 60 * 60 * 1000;
      $cookies.set("wdaffid", affId, duration);
    }
  }
}

const apiHitCookie = {
  get: () => {
    return $cookies.get("apiconsumed");
  },
  set: () => {
    $cookies.set("apiconsumed", "yes", 24 * 60 * 60 * 1000);
  }
}

const booleanCookie = {
  get: name => {
    return $cookies.get(name);
  },
  set: name => {
    $cookies.set(name, 1, 1);
  }
}

const flagCookie = {
  check: (checkoutId, cookieId) => {
    let data = ((isDefined(this.get(checkoutId))) ? JSON.parse(this.get(checkoutId)) : {});
    return (data[cookieId] === "1");
  },
  clear: checkoutId => {
    $cookies.clear(checkoutId + "_flags");
  },
  get: checkoutId => {
    return $cookies.get(checkoutId + "_flags");
  },
  set: (checkoutId, cookieId) => {
    const name = checkoutId + "_flags";
    let data = isDefined(this.get(checkoutId))
      ? JSON.parse(this.get(checkoutId))
      : {};
    data[cookieId] = 1;
    $cookies.set(name, JSON.stringify(data), 1);
  }
}

export { affiliateCookie, apiHitCookie, booleanCookie, flagCookie, $cookies }; 