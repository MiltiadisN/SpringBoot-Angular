import {Employee} from "./employee";

export class Task {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public date: Date,
    public employee: Employee
  ) {
  }


}
