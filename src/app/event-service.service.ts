import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.prod';


const BACKEND_URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private _eventsURL=BACKEND_URL+"/events";
  private _specialURL=BACKEND_URL+"/special";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsURL)

  }
  getSpecial(){
    return this.http.get<any>(this._specialURL)

  }

  
}
