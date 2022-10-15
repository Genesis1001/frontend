import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private eventosService:EventosService) {}

  ngOnInit() {
   this.eventosService.getEventitos().subscribe(resp=>{
    console.log(resp)
   })
    
  }

}
