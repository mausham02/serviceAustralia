import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:{email:string, password:string}

  constructor(private authService: AuthServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginUserData={
      email:'',
      password:''
    }
  }
  login(){
    this.authService.loginUser(this.loginUserData).subscribe(res=>{
      localStorage.setItem('token',res['token']);
      
      this.router.navigate(['../special'],{relativeTo:this.route})
      
    },
    err=>{
      console.log(err)
     
      
     
    })
  }



}
