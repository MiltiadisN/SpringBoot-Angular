import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ManagersService } from 'src/app/services/managers.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Manager } from 'src/app/common/manager';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  registerForm!: FormGroup;
  actionButton: string = 'Register';

  constructor(
    private formBuilder: FormBuilder,
    private managersService: ManagersService,
    private dialogRef: MatDialogRef<UpdateComponent>, 
    @Inject(MAT_DIALOG_DATA) public updateManagerData: Manager, 
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(3)]]
    });

    if (this.updateManagerData) {
      this.actionButton = 'Update';
      this.registerForm.patchValue({
        name: this.updateManagerData.name,
        email: this.updateManagerData.email,
        city: this.updateManagerData.city
      });
  
    }
  }

  getErrorMessage(field: string) {
    const control = this.registerForm.controls[field];
    if (control.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    } else if (control.hasError('minlength')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${control.getError('minlength').requiredLength} characters long`;
    } else if (control.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }

  createUpdateManager() {
    if (this.registerForm.valid && this.updateManagerData) {
      this.managersService.updateManager(this.updateManagerData.id, this.registerForm.value).subscribe({
        next: (updatedManager) => {
          this.showSnackbar('Manager updated successfully', ['mat-toolbar', 'mat-primary']);
          this.dialogRef.close('Update');
          window.location.reload(); 
        },
        error: () => {
          this.showSnackbar('Error while updating Manager', ['mat-toolbar', 'mat-warn']);
        }
      });
    }
  }

  private showSnackbar(message: string, panelClass: string[]): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: panelClass
    });
  }
}
