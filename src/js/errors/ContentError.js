import Error from "./Error";

export default class ContentError extends Error {
  constructor(message) {
    super(message);
    this.name = "ContentError";
  }
}