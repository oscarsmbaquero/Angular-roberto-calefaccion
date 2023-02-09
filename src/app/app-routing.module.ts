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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
