import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogEmployeeComponent} from "./dialog-employee/dialog-employee.component";
import {EmployeeService} from "../../services/employee.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DialogAddTaskToEmployeeComponent} from "./dialog-add-task-to-employee/dialog-add-task-to-employee.component";
import {DialogShowTasksFromEmployeeComponent} from "./dialog-show-tasks-from-employee/dialog-show-tasks-from-employee.component";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // Define the columns to be displayed in the table
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'gender', 'action'];

  // Initialize the MatTableDataSource for the table
  dataSource!: MatTableDataSource<any>


  // View children to access MatPaginator and MatSort for table sorting and pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog,
              private employeeService: EmployeeService,
              private dialogAddTaskToEmployee: MatDialog,
              private dialogShowTasksFromEmployee: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {

    // Retrieve and display all employees
    this.getAllEmployees();
  }

  // Function to fetch all employees
  getAllEmployees() {
    this.employeeService.getEmployee()
      .subscribe({
        next: (res) => {
          //console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          this.showSnackbar('Error while fetching the records!', ['mat-toolbar', 'mat-warn']);

        }
      })
  }


  // Open the dialog to create a new employee
  createEmployeeDialog() {
    //open dialog component DialogEmployeeComponent
    this.dialog.open(DialogEmployeeComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      this.getAllEmployees();//refresh after adding
    })
  }

  // Open the dialog to update an existing employee
  updateEmployeeDialog(row: any) {
    this.dialog.open(DialogEmployeeComponent, {
      width: '30%',
      data: row

    }).afterClosed().subscribe(val => {
      this.getAllEmployees();//refresh

    })
  }

  // Delete an employee by ID
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        this.showSnackbar('Employee Deleted Successfully', ['mat-toolbar', 'mat-primary']);
        this.getAllEmployees();
      },
      error: () => {
        this.showSnackbar('Error while deleting the employee', ['mat-toolbar', 'mat-warn']);

      }
    })
  }

  // Open the dialog to add a task to an employee
  addTaskToEmployee(row: any) {
    this.dialogAddTaskToEmployee.open(DialogAddTaskToEmployeeComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      this.getAllEmployees();//refresh
    })
  }

  // Open the dialog to show tasks for an employee
  showTasksFromEmployee(row: any) {
    this.dialogShowTasksFromEmployee.open(DialogShowTasksFromEmployeeComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      this.getAllEmployees();//refresh
    })
  }


  // Apply filtering to the MatTableDataSource
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private showSnackbar(message: string, panelClass: string[] = ['mat-toolbar']): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: panelClass
    });
  }


}
