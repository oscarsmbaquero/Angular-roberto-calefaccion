import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAvisos } from './models/avisos.models';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  constructor( private httpClient: HttpClient) {
    
   }


  public getAvisos():Observable<IAvisos[]>{
  return this.httpClient.get<IAvisos[]>(`${environment.apiUrl}avisos`);
  
  }






}
