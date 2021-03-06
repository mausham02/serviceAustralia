import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


const BACKEND_URL='';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 
 

  private _registerUrl=BACKEND_URL+'/register';
  private _loginUrl=BACKEND_URL+'/login';

  constructor(private http: HttpClient,
    private router: Router) { }



  registerUser(user){
    
    
    return this.http.post(this._registerUrl,user)
  }
  loginUser(user){
    console.log(BACKEND_URL)
   
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
