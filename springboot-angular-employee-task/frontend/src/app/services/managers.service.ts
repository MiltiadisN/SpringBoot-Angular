import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  private BASE_URL: string = environment.BASE_URL;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.checkAuthentication());


  constructor(private http:HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/auth/login`;
    return this.http.post<any>(url, { email, password });
  }

  register(userData: any): Observable<any> {
    const url = `${this.BASE_URL}/auth/register`;
    return this.http.post<any>(url, userData);
  }

  getManagersById(managerId: number): Observable<any> {
    const url = `${this.BASE_URL}/manager/get-managers/${managerId}`;
    return this.http.get<any>(url);
  }

  updateManager(managerId: number, manager: any): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/manager/update/${managerId}`, manager);
  }

  deleteManager(managerId: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/manager/delete/${managerId}`);
  }

  verifyEmail(code: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/verify/${code}`, null, { responseType: 'text' });
  }

  checkEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.BASE_URL}/auth/check-email`, {
      params: new HttpParams().set('email', email)
  });
  }
  

  /***AUTHEMNTICATION METHODS */
  logOut():void{
    if(typeof localStorage !== 'undefined'){
      localStorage.removeItem('token');
      localStorage.removeItem('managerId');      
    }
    this.isAuthenticatedSubject.next(false); 
    this.router.navigate(['/login']);
  }

  private checkAuthentication(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  get isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }

  isAuthenticated(): boolean {
    return this.checkAuthentication();
  }

  updateAuthenticationState() {
    this.isAuthenticatedSubject.next(this.checkAuthentication());
  }

}
