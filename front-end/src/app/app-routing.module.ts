import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CheckLogged from './checkLogged.canactivate';
import { CadastroComponent } from './Login/cadastro/cadastro.component';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Professor/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'professor', canActivate: [CheckLogged], children: [
    { path: '', component: HomeComponent },
  ]}
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
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
