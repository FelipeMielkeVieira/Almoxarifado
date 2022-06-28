import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../Login/login/login.component';
import { CadastroComponent } from '../Login/cadastro/cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, CadastroComponent],
  exports: [CadastroComponent, LoginComponent]
})
export class LoginModule { }
