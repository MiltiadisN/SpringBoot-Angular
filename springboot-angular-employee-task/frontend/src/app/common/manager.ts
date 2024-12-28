import { Employee } from "./employee";
import { Task } from "./task";

export class Manager {
    constructor(public id: number,
                public email: string,
                public name: string,
                public password: string,
                public city: string,
                public verificationCode: string,
                public verified: boolean,
                public employees: Employee[],
                public tasks: Task[]){
    }

}
