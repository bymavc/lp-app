import Error from "./Error";

export default class LoadError extends Error {
  constructor(message) {
    super(message);
    this.name = "LoadError";
  }
}