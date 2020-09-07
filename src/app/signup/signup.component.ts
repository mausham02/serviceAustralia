import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData:{email:string, password: string}

  

  constructor(private authService: AuthServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registerUserData={
      email:'',
      password:''
    }
  }


  registerUser(){
    console.log(this.registerUserData);
    this.authService.registerUser(this.registerUserData).subscribe(
      res=>{
        localStorage.setItem('token',res['token']);
        this.router.navigate(['../special'],{relativeTo:this.route})
      },
      err=>{
        console.log(err)
      }
    )
  }
}
