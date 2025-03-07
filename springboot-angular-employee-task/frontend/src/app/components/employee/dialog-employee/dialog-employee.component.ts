import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {EmployeeService} from "../../../services/employee.service";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../../../common/employee";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-employee',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.css']
})
export class DialogEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  actionButton: string = "Save";

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService,
              private dialogRef: MatDialogRef<DialogEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public updateEmployeeData: Employee,//get data from component EmployeeComponent
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    // Initialize the employeeForm with form controls and validations
    this.employeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      gender: ['', [Validators.required]],
    })

    //console.log(this.updateEmployeeData);

    if (this.updateEmployeeData) {
      this.actionButton = "Update";
      //patch all the values
      this.employeeForm.controls['firstName'].setValue(this.updateEmployeeData.firstName);
      this.employeeForm.controls['lastName'].setValue(this.updateEmployeeData.lastName);
      this.employeeForm.controls['email'].setValue(this.updateEmployeeData.email);
      this.employeeForm.controls['gender'].setValue(this.updateEmployeeData.gender);
    }

  }


  // method to get error messages for form fields
  getErrorMessage(field: string) {
    if (field == "email") {
      if (this.employeeForm.controls[field].hasError('required')) {
        return 'You must enter a email';
      }
      return this.employeeForm.controls[field].hasError('pattern') ? 'Not a valid email' : '';
    } else if (field == "firstName") {
      if (this.employeeForm.controls[field].hasError('required')) {
        return 'First Name is required';
      }
      return this.employeeForm.controls[field].hasError('minlength')
        ? 'First Name must be at least 2 characters long'
        : '';
    } else if (field == "lastName") {
      if (this.employeeForm.controls[field].hasError('required')) {
        return 'Last Name is required';
      }
      return this.employeeForm.controls[field].hasError('minlength')
        ? 'Last Name must be at least 2 characters long'
        : '';
    } else if (field == "gender") {
      return this.employeeForm.controls[field].hasError('required') ? 'You must enter gender' : '';
    }
    return '';
  }


  // Create or update an employee based on form data
  createUpdateEmployee() {
    const managerId = localStorage.getItem('managerId');

    if (!managerId) {
      this.showSnackbar('Manager ID not found!', ['mat-toolbar', 'mat-warn']);
      return;
    }

    if (!this.updateEmployeeData) {
      //console.log(this.employeeForm.value);
      if (this.employeeForm.valid) {
        this.employeeService.createEmployeeByManagerId(this.employeeForm.value, +managerId)
          .subscribe({
            next: (res) => {

              this.showSnackbar('Employee created Successfully', ['mat-toolbar', 'mat-primary']);


              this.employeeForm.reset(); 
              this.dialogRef.close('Save');

            },
            error: () => {
              // Show error message in a snack bar
              this.showSnackbar('Error while creating employee', ['mat-toolbar', 'mat-warn']);

            }
          })
      }
    } else {
      this.employeeService.updateEmployee(this.updateEmployeeData.id, this.employeeForm.value)
        .subscribe({
          next: (res) => {
            this.showSnackbar('Employee updated Successfully', ['mat-toolbar', 'mat-primary']);
            this.employeeForm.reset();
            this.dialogRef.close('Update');
          },
          error: () => {
            this.showSnackbar('Error while updating employee', ['mat-toolbar', 'mat-warn']);

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
