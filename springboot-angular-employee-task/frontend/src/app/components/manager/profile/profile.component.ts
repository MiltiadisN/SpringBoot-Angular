import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagersService } from 'src/app/services/managers.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  profile: any; 
  managerId: number | null = null;
  showSuccessMessage: boolean = true; 


  constructor(private managersService: ManagersService, private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const managerStr = localStorage.getItem('managerId');
  
    if (managerStr) {
      this.managerId = Number(managerStr);
      if (!isNaN(this.managerId)) {
        const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1; 
        const timeoutDuration = isFirefox ? 100 : 0; 
  
        setTimeout(() => {
          if (this.managerId !== null) {
            this.managersService.getManagersById(this.managerId).subscribe({
              next: (response) => {
                this.profile = response.ourManagers;
              },
              error: (error) => {
                console.error('Error fetching profile:', error);
              }
            });
          } else {
            console.error('Invalid managerId:', this.managerId);
            this.router.navigate(['/login']);
          }
        }, timeoutDuration);
      } else {
        console.error('managerId is NaN:', this.managerId);
        this.router.navigate(['/login']);
      }
    }
  }

  openRegisterDialog(row: any) {
    this.dialog.open(UpdateComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(result => {
    });
  }

  confirmDeleteProfile() {
    const confirmationDialog = confirm('Are you sure you want to delete your profile? This action cannot be undone.');
    if (confirmationDialog) {
      this.deleteProfile();
    }
  }

  private deleteProfile() {
    if (this.managerId) {
      this.managersService.deleteManager(this.managerId).subscribe({
        next: () => {
          this.showSnackbar('Profile deleted successfully', ['mat-toolbar', 'mat-primary']);
          this.managersService.logOut(); 
          this.router.navigate(['/login']); 
        },
        error: () => {
          this.showSnackbar('Error while deleting profile', ['mat-toolbar', 'mat-warn']);
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

