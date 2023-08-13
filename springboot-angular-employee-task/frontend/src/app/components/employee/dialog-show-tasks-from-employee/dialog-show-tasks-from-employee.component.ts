import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../../../common/employee";

@Component({
  selector: 'app-dialog-show-tasks-from-employee',
  templateUrl: './dialog-show-tasks-from-employee.component.html',
  styleUrls: ['./dialog-show-tasks-from-employee.component.css']
})
export class DialogShowTasksFromEmployeeComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public employeeData: Employee,//inject data for Employee
              private dialogRef: MatDialogRef<DialogShowTasksFromEmployeeComponent>,
  ) {

  }

  ngOnInit(): void {
  }

  // Close the dialog when tasks are shown
  taskClose() {
    this.dialogRef.close();
  }


}

