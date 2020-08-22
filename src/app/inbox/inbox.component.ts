import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  y=["Mausham Shrestha","Birendra Rokaha","Romit Maharjan","Suraj Gyamwai"]

  constructor() { }

  ngOnInit(): void {
  }

}
