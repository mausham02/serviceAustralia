import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private _eventsURL='http://' + window.location.hostname+':3000'+'/events';
  private _specialURL='http://' + window.location.hostname+':3000'+'/special';

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsURL)

  }
  getSpecial(){
    return this.http.get<any>(this._specialURL)

  }

  
}
