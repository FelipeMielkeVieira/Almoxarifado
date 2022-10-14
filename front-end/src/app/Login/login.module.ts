import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { AlertaFeitoComponent } from './alerta-feito/alerta-feito.component';
import { EsquecerSenhaComponent } from './esquecer-senha/esquecer-senha.component';
import { ConfirmarCadastroComponent } from './confirmar-cadastro/confirmar-cadastro.component';

import { UsersService } from '../service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CadastroComponent,
    LoginComponent,
    AlertaFeitoComponent,
    EsquecerSenhaComponent,
    ConfirmarCadastroComponent
  ],
  exports: [
    CadastroComponent, 
    LoginComponent, 
    AlertaFeitoComponent, 
    EsquecerSenhaComponent,
    ConfirmarCadastroComponent
  ],
  providers: [
    UsersService
  ]
})
export class LoginModule { }
