import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import CheckLogged from './checkLogged.canactivate';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login/login.component';
import { DetalhesReservaComponent } from './professor/detalhes-reserva/detalhes-reserva.component';
import { HomeComponent } from './professor/home/home.component';
import { MinhasReservasComponent } from './professor/minhas-reservas/minhas-reservas.component';
import { MinhasSacolasComponent } from './professor/minhas-sacolas/minhas-sacolas.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  {
    path: 'professor', canActivate: [CheckLogged], children: [
      { path: '', component: HomeComponent },
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
  }
  // {
  //   path: 'professor', canActivate: [CheckLogged], children: [
  //     { path: '', component: HomeProfessorComponent },
  //     { path: 'reservas', children: [
  //       { path: '', component: MinhasReservasComponent},
  //       { path: ':id', component: MinhaSacolaComponent}
  //     ] },
  //     {
  //       path: 'sacolas', children: [
  //         { path: '', component: SacolasComponent },
  //         { path: ':id', component: MinhaSacolaComponent }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: 'atendente', canActivate: [CheckLogged], children: [
  //     { path: '', component: HomeSupervisorComponent },
  //     {
  //       path: 'sacolas', children: [
  //         { path: '', component: SacolasComponent },
  //         { path: ':id', component: MinhaSacolaComponent }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: 'supervisor', canActivate: [CheckLogged], children: [
  //     { path: '', component: HomeSupervisorComponent },
  //     {
  //       path: 'sacolas', children: [
  //         { path: '', component: SacolasComponent },
  //         { path: ':id', component: MinhaSacolaComponent }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
