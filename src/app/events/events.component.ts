import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../event-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events=[]

  constructor(private eventService: EventServiceService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      res=>{
        console.log(res)
        this.events=res;
      },
      err=>{
        console.log(err)
      }
    )
  }

}
