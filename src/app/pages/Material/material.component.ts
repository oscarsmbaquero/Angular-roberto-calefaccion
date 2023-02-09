import { IMaterial } from './../../core/services/material/models/material.model';
import { MaterialsService } from './../../core/services/material/materials.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  public material?: IMaterial[];
  constructor( private materialService: MaterialsService) { }

  ngOnInit(): void {
    this.getClientes();
  }
  
  private getClientes(){
    this.materialService.getMaterial().subscribe((mat)=>{
      this.material = mat;
      console.log(this.material)
    })
  }


}
