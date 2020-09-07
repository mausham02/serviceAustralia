import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import {AuthServiceService} from  './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService 
    ,private router: Router){}
  canActivate():boolean{
 
    if(this.authService.loggedIn()){
      console.log("her i was")
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }

  }
  
}