import { IAvisos } from 'src/app/core/services/avisos/models/avisos.models';
import { AvisosService } from './../../core/services/avisos/avisos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  public avisos?: IAvisos[];

  constructor( private avisosService: AvisosService) { }

  ngOnInit(): void {
  }

  private getAvisos() {
    this.avisosService.getAvisos().subscribe((avisos)=>{
      this.avisos= avisos;
      
    })

  }
}
