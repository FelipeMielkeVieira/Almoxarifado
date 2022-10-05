import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: "teste", component: SacolaComponent },
  // { path: '', component: LoginComponent },
  // { path: 'cadastro', component: CadastroComponent },
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
