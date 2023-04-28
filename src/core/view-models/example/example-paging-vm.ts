import { Type } from "class-transformer";
import { PagingVM } from "../paging-vm";
import { ExampleVM } from "./example-vm";

export class ExamplePagingVM extends PagingVM {
  // @Type(() => ExampleVM)
  examples: ExampleVM[];

  constructor() {
    super();
    this.examples = [];
  }
}
