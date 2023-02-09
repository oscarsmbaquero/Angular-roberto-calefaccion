import { IClientes } from './../../core/services/clientes/models/clientes.model';
import { ClientesService } from './../../core/services/clientes/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public clientes?: IClientes[];
  constructor( private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

 private getClientes(){
  this.clientesService.getClientes().subscribe((clientes)=>{
    this.clientes = clientes;
    console.log(clientes)
  })
 }

}
