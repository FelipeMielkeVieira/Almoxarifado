import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroComponent } from '../Login/cadastro/cadastro.component';
import { LoginComponent } from '../Login/login/login.component';
import { AlertaFeitoComponent } from './alertaFeito/alertaFeito.component';
import { EsquecerSenhaComponent } from './esquecerSenha/esquecerSenha.component';

import { UsersService } from '../service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [LoginComponent, CadastroComponent, AlertaFeitoComponent, EsquecerSenhaComponent],
  exports: [CadastroComponent, LoginComponent, AlertaFeitoComponent, EsquecerSenhaComponent],
  providers: [UsersService]
})
export class LoginModule { }