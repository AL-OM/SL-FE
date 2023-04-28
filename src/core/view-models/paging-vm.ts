export class PagingVM {
  length: number;
  total: number;
  start: number;
  page: number;

  constructor() {
    this.length = 10;
    this.total = 0;
    this.start = 0;
    this.page = 0;
  }
}
