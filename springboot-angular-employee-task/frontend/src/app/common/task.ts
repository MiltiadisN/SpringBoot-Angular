import {Employee} from "./employee";
import { Manager } from "./manager";

export class Task {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public date: Date,
    public employee: Employee,
    public manager: Manager
  ) {
  }

}
