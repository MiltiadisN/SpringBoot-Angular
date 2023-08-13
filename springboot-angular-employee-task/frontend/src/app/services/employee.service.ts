import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../common/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Define the base URL for API endpoints
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient //HttpClient injection
  ) {
  }


  // Function to fetch all employees
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  // Function to fetch an employee by ID
  getEmployeeById(employeeId: number | undefined): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/employee/${employeeId}`);
  }

  // Function to create a new employee
  createEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.baseUrl}/create-employee`, employee);
  }

  // Function to update an existing employee
  updateEmployee(employeeId?: number, employee?: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/update/employee/${employeeId}`, employee);
  }

  // Function to delete an employee by ID
  deleteEmployee(employeeId: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/delete/employee/${employeeId}`);
  }


}