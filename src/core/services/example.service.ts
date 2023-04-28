import { GetExampleApiResult } from "../data-transfer/example/get-example.api-result";
import ApiService from "./api.service";

export class ExampleService extends ApiService {
  public getExample(exampleID: number) {
    return this.apiGet<GetExampleApiResult>(
      `/example/${exampleID}`,
      null,
      false
    );
  }
}
