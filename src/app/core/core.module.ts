import { AvisosService } from './services/avisos/avisos.service';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
   AvisosService,
    
    ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
