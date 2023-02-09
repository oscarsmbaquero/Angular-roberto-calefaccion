import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/pages/Home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'avisos',
    loadChildren: () => import('src/app/pages/Avisos/avisos.module').then(m => m.AvisosModule)
  },
  {
    path: 'material',
    loadChildren: () => import('src/app/pages/Material/material.module').then(m => m.MaterialModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('src/app/pages/Clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
