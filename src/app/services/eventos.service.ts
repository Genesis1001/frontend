import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http:HttpClient) { }

  getEventitos(){
    return this.http.get('https://backend-eventos.herokuapp.com/evento')
  }
}
