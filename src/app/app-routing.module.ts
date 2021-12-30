import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemasComponent } from './temas/temas.component';
import { EditTemaComponent } from './edit/edit-tema/edit-tema.component';
import { DeleteTemaComponent } from './delete/delete-tema/delete-tema.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'inicio', component: InicioComponent},
  {path:'temas', component: TemasComponent},
  {path:'edit-tema/:id', component: EditTemaComponent},
  {path:'delete-tema/:id', component: DeleteTemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
