import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGeneroComponent } from './lista-genero/lista-genero.component';
import { RegistrarGeneroComponent } from './registrar-genero/registrar-genero.component';
import { InfoGeneroComponent } from './info-genero/info-genero.component';

const routes: Routes = [
  {path : 'genero', component:ListaGeneroComponent},
  {path: '', redirectTo:'genero',pathMatch:'full'},
  {path : 'registrar-genero', component: RegistrarGeneroComponent},
  {path : 'info-genero', component: InfoGeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
