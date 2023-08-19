import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../common/task";
import {MatDialog} from "@angular/material/dialog";
import {DialogTaskComponent} from "./dialog-task/dialog-task.component";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../common/employee";
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // Declare properties
  tasks: Task [] = [];
  employeeId: number | undefined;
  taskId: number | undefined;
  employee: Employee;

  pageTitle: string;
  pageDescription: string;


  // Constructor with dependency injection
  constructor(private taskService: TaskService,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private snackBar: MatSnackBar, // Inject MatSnackBar

  ) {
    // Initialize properties
    this.employee = {} as Employee;
    this.pageTitle = 'All Tasks';
    this.pageDescription = 'Here you can find the list of tasks assigned to different employees.';
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      //console.log("PARAMS", params);
      // Subscribe to route parameters
      if ('employeeId' in params) {
        // Fetch tasks assigned to a specific employee
        this.employeeId = params['employeeId'];
        this.getEmployeeTasks();
        this.getEmployee();
        this.pageTitle = 'Employee Tasks';
        this.pageDescription = 'Here you can find the tasks assigned to employee:';
      } else if ('taskId' in params) {
        // Fetch a specific task
        this.taskId = params['taskId'];
        this.getTask();
        this.pageTitle = 'Selected Task';
        this.pageDescription = 'Here you can see the details of a specific task.';
      } else {
        // Fetch all tasks
        this.getAllTasks();
        this.pageTitle = 'All Tasks';
        this.pageDescription = 'Here you can find the list of tasks assigned to different employees.';
      }
    });

  }

  // Function to fetch all tasks
  getAllTasks() {
    this.tasks = [];
    this.taskService.getTasks()
      .subscribe({
        next: (res) => {
          //console.log(res);
          this.tasks = res;
        },
        error: (err) => {
          this.showSnackbar('Error while fetching tasks!', ['mat-toolbar', 'mat-warn']);
        }
      })
  }

  // Function to fetch tasks assigned to a specific employee
  getEmployeeTasks(): void {
    this.tasks = [];
    // Fetch employee-specific tasks using employeeId
    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (employee) => {
        //console.log(employee);
        this.tasks = employee.tasks;
        //console.log(this.taskFromEmployee);
      },
      error: (err) => {
        this.showSnackbar('Error while fetching employee tasks!', ['mat-toolbar', 'mat-warn']);
      }
    });
  }

  // Function to fetch a specific task
  getTask() {
    this.tasks = [];
    this.taskService.getTaskById(this.taskId).subscribe({
      next: (task) => {
        this.tasks.push(task);
        //this.task = task;
        //console.log("task",task);
      }
    })
  }

  // Function to fetch employee details
  getEmployee() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (employee) => {
        this.employee = employee;
      }
    })
  }

  // Function to open the update task dialog
  updateTaskDialog(task: Task) {
    this.dialog.open(DialogTaskComponent, {
      width: '30%',
      data: task
    }).afterClosed().subscribe(val => {
      this.ngOnInit();
    })
  }

  // Function to delete a task
  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe({
      next: (res) => {
        this.showSnackbar('Task Deleted Successfully', ['mat-toolbar', 'mat-primary']);

        if (this.employeeId) {
          // If viewing tasks for an employee, refresh employee tasks
          this.getEmployeeTasks();
        } else if (this.taskId) {
          // If viewing a specific task, refresh that task
          this.getTask();
        } else {
          // If none of the above, refresh the list of all tasks
          this.getAllTasks();
        }
      },
      error: (res) => {
        this.showSnackbar('Error while deleting task', ['mat-toolbar', 'mat-warn']);
      }
    });
  }

  taskExists(task: Task): boolean {
    return task && task.id != null; // Check if the task is not null and has a non-null id
  }


  //method to display a SnackBar message
  private showSnackbar(message: string, panelClass: string[] = ['mat-toolbar']): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: panelClass
    });
  }


  // method to calculate and return the remaining days for a task
  getDaysRemaining(task: Task): string {
    if (task && task.date) {
      const currentDate = new Date();
      const taskDate = new Date(task.date);
      const timeDifference = taskDate.getTime() - currentDate.getTime();
      const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
      return `${daysRemaining} days left`;
    }
    return '';
  }





}
