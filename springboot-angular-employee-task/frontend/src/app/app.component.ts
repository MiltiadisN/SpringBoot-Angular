import { ChangeDetectorRef, Component } from '@angular/core';
import { ManagersService } from './services/managers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  isAuthenticated:boolean = false;

  constructor(private readonly managersService: ManagersService,private cdr: ChangeDetectorRef){}


  ngOnInit(): void {
    this.managersService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
      this.cdr.detectChanges();
    });
  }

  logout() {
    this.managersService.logOut();
    this.cdr.detectChanges();
  }



}
