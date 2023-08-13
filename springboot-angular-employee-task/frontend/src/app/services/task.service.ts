import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../common/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Define the base URL for API endpoints
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  // Function to fetch all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  // Function to fetch a task by ID
  getTaskById(taskId: number | undefined): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/task/${taskId}`);
  }

  // Function to update an existing task
  updateTask(taskId?: number, task?: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/update/task/${taskId}`, task);
  }

  // Function to delete a task by ID
  deleteTask(taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/delete/task/${taskId}`);
  }

  // Function to create a new task and assign it to an employee
  createTaskToEmployee(task?: Task, employeeId?: any): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/task/${employeeId}/employee`, task);
  }


}


