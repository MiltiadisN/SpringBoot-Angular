import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';
  
  // Predefined list of European cities
  cities: string[] = [
    'Paris', 'Berlin', 'Madrid', 'Rome', 'London', 'Vienna',
    'Lisbon', 'Amsterdam', 'Prague', 'Brussels', 'Copenhagen',
    'Helsinki', 'Oslo', 'Stockholm', 'Zurich', 'Athens', 'Dublin',
    'Warsaw', 'Budapest', 'Munich', 'Barcelona', 'Milan'
  ];

  constructor(
    private readonly managersService: ManagersService,
    private readonly router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required],
    });
  }

  handleSubmit() {
    if (this.registerForm.invalid) {
      this.showError('Please fill in all fields correctly.');
      return;
    }

    // Check if email is already registered
    this.checkEmailExists(this.registerForm.get('email')?.value);
  }

  checkEmailExists(email: string) {
    this.managersService.checkEmail(email).subscribe({
      next: (isRegistered) => {
        if (isRegistered) {
          this.showError('This email is already registered.');
        } else {
          this.registerManager();
        }
      },
      error: () => {
        this.showError('Error checking email. Please try again.');
      }
    });
  }

  registerManager() {
    const confirmRegistration = confirm('Are you sure you want to register this Manager?');
    if (!confirmRegistration) return;

    this.managersService.register(this.registerForm.value).subscribe({
      next: (response) => {
        if (response.statusCode === 200) {
          this.showSuccess('Registration successful! Please check your email for the verification code.');
          this.router.navigate(['/verify-email'], { 
            queryParams: { code: response.ourManagers.verificationCode } 
          });
        } else {
          this.showError(response.message);
        }
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'Registration failed. Please try again.';
        this.showError(errorMessage);
      }
    });
  }

  showError(message: string) {
    this.errorMessage = message;
    setTimeout(() => this.errorMessage = '', 3000);
  }

  showSuccess(message: string) {
    this.errorMessage = message;
    setTimeout(() => this.errorMessage = '', 5000);
  }

  getErrorMessage(field: string) {
    const control = this.registerForm.get(field);
    if (control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    } else if (field === 'email' && control?.hasError('email')) {
      return 'Not a valid email';
    } else if (field === 'password' && control?.hasError('minlength')) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  }
}
