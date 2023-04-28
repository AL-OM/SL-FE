import { ExamplePagingVM } from "../../view-models/example/example-paging-vm";
import { ApiResult } from "../api-result";

export class GetExamplesApiResult extends ApiResult {
  data: ExamplePagingVM;

  constructor() {
    super();
    this.data = new ExamplePagingVM();
  }
}
