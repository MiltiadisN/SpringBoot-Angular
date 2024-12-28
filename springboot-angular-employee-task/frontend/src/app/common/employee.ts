import { Manager } from "./manager";
import {Task} from "./task";

export class Employee {

  constructor(public id: number,
              public firstName: string,
              public lastName: string,
              public email: string,
              public gender: string,
              public tasks: Task[],
              public manager: Manager
  ) {
  }
}
