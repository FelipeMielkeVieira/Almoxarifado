import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import CheckLogged from './checkLogged/checkLogged.canactivate';
import { LoginModule } from './login/login.module';
import { PrincipalModule } from './principal/principal.module';
import { ProfessorModule } from './professor/professor.module';
import { UsersService } from './service';
import { GerenciaModule } from './gerencia/gerencia.module';
import CheckLoggedProfessor from './checkLogged/checkLoggedProfessor.canactivate';
import CheckLoggedAtendente from './checkLogged/checkLoggedAtendente.canactivate';
import CheckLoggedSupervisor from './checkLogged/checkLoggedSupervisor.canactivate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    ProfessorModule,
    PrincipalModule,
    GerenciaModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [CheckLogged, UsersService, CheckLoggedProfessor, CheckLoggedAtendente, CheckLoggedSupervisor],
  bootstrap: [AppComponent]
})
export class AppModule { }
