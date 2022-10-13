import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import CheckLogged from './checkLogged.canactivate';
import { LoginModule } from './login/login.module';
import { PrincipalModule } from './principal/principal.module';
import { ProfessorModule } from './professor/professor.module';
import { UsersService } from './service';

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
    PrincipalModule
  ],
  providers: [CheckLogged, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }