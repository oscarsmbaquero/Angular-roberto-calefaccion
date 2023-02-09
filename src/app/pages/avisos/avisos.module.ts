import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisosRoutingModule } from './avisos-routing.module';
import { AvisosComponent } from './avisos.component';


@NgModule({
  declarations: [
    AvisosComponent
  ],
  imports: [
    CommonModule,
    AvisosRoutingModule
  ]
})
export class AvisosModule { }
