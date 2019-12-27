import { isDefined } from "./utilities";

class Scope {
  moduleName = "$scope";
  init = () => {
    window[this.moduleName] = {};
  }

  set = (name, value) => {
    if (!isDefined(window[this.moduleName])) this.init();
    window[this.moduleName][name] = value;
  }

  get = (name) => {
    return window[this.moduleName][name];
  }
}

const $scope = new Scope();

export default $scope;