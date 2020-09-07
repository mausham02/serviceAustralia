import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private _registerUrl='http://' + window.location.hostname+'/register';
  private _loginUrl='http://' + window.location.hostname+'/login';

  constructor(private http: HttpClient,
    private router: Router) { }



  registerUser(user){
    
    
    return this.http.post(this._registerUrl,user)
  }
  loginUser(user){
   
    return this.http.post(this._loginUrl, user)
  }

  // checking if the user is loggedin or not????
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/events']);

  }
  getToken(){
    return localStorage.getItem('token')
  }

}
