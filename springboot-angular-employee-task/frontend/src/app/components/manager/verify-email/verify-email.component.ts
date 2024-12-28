import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  verifyForm!: FormGroup;
  errorMessage: string = '';
  email: string = '';
  verificationCode: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private managersService: ManagersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    
    this.verificationCode = this.route.snapshot.queryParams['code'] || ''; 

    
    this.verifyForm = this.formBuilder.group({
      code: ['', Validators.required]  
    });
  }

  handleVerify() {
    if (this.verifyForm.invalid) {
        this.showError('Please enter the verification code.');
        return;
    }

    let code = this.verifyForm.get('code')?.value.trim();  // Trim spaces

    this.managersService.verifyEmail(code).subscribe({
        next: (response) => {
            this.showError(response);  
            this.router.navigate(['/login']);  
        },
        error: (error) => {
            //console.error('Error response:', error);
            const errorMessage = error.error || 'Verification failed. Please try again.';
            this.showError(errorMessage);
        }
    });
}
  showError(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
}
