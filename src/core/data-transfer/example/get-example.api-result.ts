import { ExampleVM } from "../../view-models/example/example-vm";
import { ApiResult } from "../api-result";

export class GetExampleApiResult extends ApiResult {
  data: ExampleVM[];

  constructor() {
    super();
    this.data = [];
  }
}
