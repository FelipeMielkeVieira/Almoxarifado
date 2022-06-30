import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import CheckLogged from './checkLogged.canactivate';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { PrincipalModule } from './Principal/principal.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/login/login.component';
import { CadastroComponent } from './Login/cadastro/cadastro.component';
import { HomeProfessorComponent } from './Professor/home-professor/home-professor.component';
import { MinhasReservasComponent } from './Principal/minhas-reservas/minhas-reservas.component';
import { MinhaSacolaComponent } from './Principal/minha-sacola/minha-sacola.component';
import { SacolasComponent } from './Principal/sacolas/sacolas.component';
import { HomeAtendenteComponent } from './Atendentes/home-atendente/home-atendente.component';
import { HomeSupervisorComponent } from './Supervisor/home-supervisor/home-supervisor.component';
import { LoginModule } from './Login/login.module';
import { ProfessorModule } from './Professor/professor.module';
import { SupervisorModule } from './Supervisor/supervisor.module';
import { CalendarCreator } from './Principal/calendario/calendarCreator.service';
import { FiltroComponent } from './Principal/filtro/filtro.component';

const rotas: Routes = [
  {path: 'teste', component: FiltroComponent},
  { path: '', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'professor', canActivate: [CheckLogged], children: [
    { path: '', component: HomeProfessorComponent},
    { path: 'reservas', component: MinhasReservasComponent},
    { path: 'sacolas', children: [
      { path: '', component: SacolasComponent},
      { path: ':id', component: MinhaSacolaComponent}
    ]}
  ]},
  { path: 'atendente', canActivate: [CheckLogged], children: [
    { path: '', component: HomeAtendenteComponent},
    { path: 'sacolas', children: [
      { path: '', component: SacolasComponent},
      { path: ':id', component: MinhaSacolaComponent}
    ]}
  ]},
  { path: 'supervisor', canActivate: [CheckLogged], children: [
    { path: '', component: HomeSupervisorComponent},
    { path: 'sacolas', children: [
      { path: '', component: SacolasComponent},
      { path: ':id', component: MinhaSacolaComponent}
    ]}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(rotas),
    RouterModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    PrincipalModule,
    LoginModule,
    ProfessorModule,
    SupervisorModule
  ],
  providers: [
    UsersService,
    CheckLogged,
    CalendarCreator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
