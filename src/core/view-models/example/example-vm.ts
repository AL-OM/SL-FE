export class ExampleVM {
  public static readonly STATUSES = {
    NEW: 1,
    SUBMITTED: 2,
    DRAFT: 3,
  };

  example: string;

  constructor() {
    this.example = "";
  }
}
