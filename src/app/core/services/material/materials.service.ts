import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMaterial } from './models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor( private httpClient: HttpClient) { 

  }

  public getMaterial():Observable<IMaterial[]>{
    return this.httpClient.get<IMaterial[]>(`${environment.apiUrl}material`);
    
    }




}
