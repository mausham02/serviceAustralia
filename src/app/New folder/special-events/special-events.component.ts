import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../event-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents=[]

  constructor(private eventService: EventServiceService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.eventService.getSpecial().subscribe(
      res=>{
       
        this.specialEvents=res;
      },
      err=>{
       if(err instanceof HttpErrorResponse){
         if(err.status===401){
           this.router.navigate(['/login'])
         }
       }
      }
    )
  }

}
