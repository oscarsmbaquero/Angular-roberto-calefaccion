import { AvisosService } from './../../core/services/avisos/avisos.service';
import { Component, OnInit } from '@angular/core';

import { IAvisos } from 'src/app/core/services/avisos/models/avisos.models';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  public avisos?: IAvisos[];

  constructor(private avisosService: AvisosService) { }

  ngOnInit(): void {
    this.getAvisos();
  }

  private getAvisos() {
    this.avisosService.getAvisos().subscribe((aviso) => {
      this.avisos = aviso;
      console.log(this.avisos)
      //this.filteredProducts = products;
    });
  }
}
