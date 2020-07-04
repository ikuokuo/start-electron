import {} from "./types/dom";
import {} from "./types/vue";
import IApi from "./types/api";

export default class Api implements IApi {
  one: number;
  two: number;

  constructor(one: number, two: number) {
    this.one = one;
    this.two = two;
  }
}
