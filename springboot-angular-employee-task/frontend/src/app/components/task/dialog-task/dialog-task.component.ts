import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../common/task";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-task',
  templateUrl: './dialog-task.component.html',
  styleUrls: ['./dialog-task.component.css']
})
export class DialogTaskComponent implements OnInit {

  // Declare the taskForm as a FormGroup
  taskForm!: FormGroup;

  constructor(private taskService: TaskService,// Inject the TaskService
              private formBuilder: FormBuilder, // Inject the FormBuilder for creating the form
              private dialogRef: MatDialogRef<DialogTaskComponent>, // Reference to the dialog to close it
              @Inject(MAT_DIALOG_DATA) public task: Task, // Inject data
              private snackBar: MatSnackBar // Inject the MatSnackBar to show messages
  ) {

  }

  ngOnInit(): void {

    // Initialize the taskForm
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    })

    // If task data is provided, populate the form fields for update
    if (this.task) {
      //patch all the values
      this.taskForm.controls['title'].setValue(this.task.title);
      this.taskForm.controls['description'].setValue(this.task.description);
      this.taskForm.controls['date'].setValue(this.task.date);

    }
  }

  // Function to update task
  updateTask() {
    this.taskService.updateTask(this.task.id, this.taskForm.value)
      .subscribe({
        next: (res) => {
          this.taskForm.reset();
          this.dialogRef.close('Update');

          // Show a success snackbar message
          this.showSnackbar('Task Updated Successfully', ['mat-toolbar', 'mat-primary']);
        },
        error: () => {
          this.showSnackbar('Error while updating task', ['mat-toolbar', 'mat-warn']);

        }
      })
  }

  private showSnackbar(message: string, panelClass: string[] = ['mat-toolbar']): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: panelClass
    });
  }



}
