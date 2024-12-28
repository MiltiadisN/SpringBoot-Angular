import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../common/employee";
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Define the base URL for API endpoints
  private baseUrl = `${environment.BASE_URL}/api-employee`;

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

  // Function to create a new employee
  createEmployeeByManagerId(employee: Employee, managerId: number | undefined) {
    return this.http.post<Employee>(`${this.baseUrl}/create-employee/${managerId}`, employee);
  }

  // Function to update an existing employee
  updateEmployee(employeeId?: number, employee?: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/update/employee/${employeeId}`, employee);
  }

  // Function to delete an employee by ID
  deleteEmployee(employeeId: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/delete/employee/${employeeId}`);
  }

  // Function to fetch employees by Employee Id
  getEmployeesByManagerId(managerId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/manager/${managerId}`);
  }


}
