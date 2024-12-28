import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ManagersService } from './managers.service';

export const managersGuard: CanActivateFn = (route, state) => {
  if(inject(ManagersService).isAuthenticated()){
      return true;
  }else{
    inject(Router).navigate(['/login'])
    return false
  }
};
