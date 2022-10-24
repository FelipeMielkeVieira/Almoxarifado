import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import CheckLogged from './checkLogged/checkLogged.canactivate';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login/login.component';
import { DetalhesReservaComponent } from './professor/detalhes-reserva/detalhes-reserva.component';
import { HomeComponent as HomeProfessorComponent } from './professor/home/home.component';
import { HomeComponent as HomeGerenciaComponent } from './gerencia/home/home.component';
import { MinhasReservasComponent } from './professor/minhas-reservas/minhas-reservas.component';
import { MinhasSacolasComponent } from './professor/minhas-sacolas/minhas-sacolas.component';
import CheckLoggedProfessor from './checkLogged/checkLoggedProfessor.canactivate';
import CheckLoggedAtendente from './checkLogged/checkLoggedAtendente.canactivate';
import CheckLoggedSupervisor from './checkLogged/checkLoggedSupervisor.canactivate';
import { AjudaComponent } from './principal/ajuda/ajuda.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'ajuda', canActivate: [CheckLogged], component: AjudaComponent},
  {
    path: 'professor', canActivate: [CheckLogged, CheckLoggedProfessor], children: [
      { path: '', component: HomeProfessorComponent },
      {
        path: 'reservas', children: [
          { path: '', component: MinhasReservasComponent },
          { path: ':id', component: DetalhesReservaComponent }
        ]
      },
      {
        path: 'sacolas', children: [
          { path: '', component: MinhasSacolasComponent },
          { path: ':id', component: DetalhesReservaComponent }
        ]
      }
    ]
  },
  {
    path: 'atendente', canActivate: [CheckLogged, CheckLoggedAtendente], children: [
      { path: '', component: HomeGerenciaComponent },
      {
        path: 'sacolas', children: [
          { path: '', component: MinhasSacolasComponent },
          { path: ':id', component: DetalhesReservaComponent }
        ]
      }
    ]
  },
  {
    path: 'supervisor', canActivate: [CheckLogged, CheckLoggedSupervisor], children: [
      { path: '', component: HomeGerenciaComponent },
      {
        path: 'sacolas', children: [
          { path: '', component: MinhasSacolasComponent },
          { path: ':id', component: DetalhesReservaComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
