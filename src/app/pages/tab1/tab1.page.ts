import { Component, OnInit } from '@angular/core';
import { Evento, NewsResponse } from 'src/app/interfaces';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public eventos: Evento[]=[];

  constructor(private eventosService:EventosService) {}

  ngOnInit() {
   this.eventosService.getEventitos().subscribe(resp=>{
    console.log(resp.eventos);
    this.eventos=resp.eventos;
   })
    
  }


}
