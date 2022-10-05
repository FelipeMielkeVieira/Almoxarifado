import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../Login/login/login.component';
import { CadastroComponent } from '../Login/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { AlertaFeitoComponent } from './alertaFeito/alertaFeito.component';
import { EsquecerSenhaComponent } from './esquecerSenha/esquecerSenha.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent, CadastroComponent, AlertaFeitoComponent, EsquecerSenhaComponent],
  exports: [CadastroComponent, LoginComponent, AlertaFeitoComponent, EsquecerSenhaComponent]
})
export class LoginModule { }