import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../../../common/employee";
import {TaskService} from "../../../services/task.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-add-task-to-employee',
  templateUrl: './dialog-add-task-to-employee.component.html',
  styleUrls: ['./dialog-add-task-to-employee.component.css']
})
export class DialogAddTaskToEmployeeComponent implements OnInit {

  //declare taskForm as a FormGroup
  taskForm!: FormGroup;

  // Initialize minDate with the current date to prevent selecting past dates
  minDate = new Date();

  constructor(private formBuilder: FormBuilder,//inject FormBuilder
              private taskService: TaskService,//inject TaskService
              private dialogRef: MatDialogRef<DialogAddTaskToEmployeeComponent>, //inject MatDialogRef
              @Inject(MAT_DIALOG_DATA) public employeeData: Employee, //get data from component EmployeeComponent
              private snackBar: MatSnackBar
  ) {
  }


  ngOnInit(): void {

    // Initialize the taskForm with form controls
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  // method to get error messages for form fields
  getErrorMessage(field: string) {
    if (field == "title") {
      this.taskForm.controls[field].hasError('required')
      return 'You must enter a title';
    } else if (field == "description") {
      this.taskForm.controls[field].hasError('required')
      return 'You must enter a description';
    } else if (field == "date") {
      this.taskForm.controls[field].hasError('required')
      return 'You must enter expiration date';
    }
    return '';
  }

  // Create task and assign it to the employee
  createTaskToEmployee() {
    if (this.taskForm.valid) {
      const managerId = Number(localStorage.getItem('managerId'));
      //console.log("managerId", managerId);
      this.taskService.createTaskToEmployee(this.taskForm.value, this.employeeData.id,managerId)
        .subscribe({
          next: (res) => {

            // Show success message in a snack bar
            this.showSnackbar('Task created Successfully to Employee', ['mat-toolbar', 'mat-primary']);


            this.taskForm.reset(); 
            this.dialogRef.close('Save');
          },
          error: () => {
            // Show error message in a snack bar
            this.showSnackbar('Error while creating Task to Employee', ['mat-toolbar', 'mat-warn']);

          }
        })
    }
  }

  private showSnackbar(message: string, panelClass: string[] = ['mat-toolbar']): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: panelClass
    });
  }

}
