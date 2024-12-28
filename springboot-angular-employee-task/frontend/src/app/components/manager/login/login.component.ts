import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private managersService: ManagersService,
    private router: Router,
  ) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]], 
      password: ['', Validators.required] 
    });
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.controls['email'].value; 
      const password = this.loginForm.controls['password'].value; 

      this.managersService.login(email, password).subscribe({
        next: (response) => {
          if (response.statusCode === 200) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
            if (response.managerId) {
              localStorage.setItem('managerId', response.managerId.toString());
            } else {
              this.showError("Manager ID not found in response.");
              return;
            }
            this.router.navigate(['/profile']).then(() => {
              window.location.reload(); 
            });
          } else {
            this.showError(response.message);
          }
        },
        error: (error) => {
          this.showError(error.message);
        }
      });
    } else {
      this.showError("Please fill out the form correctly.");
    }
  }

  showError(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }

  getEmailErrorMessage() {
    const emailControl = this.loginForm.controls['email'];
    if (emailControl.hasError('required')) {
      return 'Email is required';
    } else if (emailControl.hasError('pattern')) {
      return 'Not a valid email';
    }
    return '';
  }

  getPasswordErrorMessage() {
    const passwordControl = this.loginForm.controls['password'];
    return passwordControl.hasError('required') ? 'Password is required' : '';
  }
}
