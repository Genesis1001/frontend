import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http:HttpClient) { }

  getEventitos(){
    return this.http.get<NewsResponse>('https://backend-eventos.herokuapp.com/evento')
  }
}
