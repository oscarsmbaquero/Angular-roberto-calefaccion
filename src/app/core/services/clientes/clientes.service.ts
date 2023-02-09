import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IClientes } from './models/clientes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService  {

  constructor(private httpClient: HttpClient) { }


  public getClientes():Observable<IClientes[]>{
    return this.httpClient.get<IClientes[]>(`${environment.apiUrl}clientes`);
    
    }



}

