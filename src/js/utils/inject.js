import { isDefined } from "./utilities";

class DependencyInjector {
  moduleName = "$inject";
  init = () => {
    window[this.moduleName] = {};
  }

  register = (name, object) => {
    if (!isDefined(window[this.moduleName])) this.init();
    window[this.moduleName][name] = object;
  }

  get = (name) => {
    return window[this.moduleName][name]
  }
}

const $inject = new DependencyInjector();

export default $inject;