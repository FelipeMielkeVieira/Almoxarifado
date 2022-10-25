import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrincipalModule } from '../principal/principal.module';
import { ProfessorModule } from '../professor/professor.module';
import { FormsModule } from '@angular/forms';
import { GerenciarUsuarioComponent } from './gerenciar-usuario/gerenciar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';



@NgModule({
  declarations: [
    HomeComponent,
    GerenciarUsuarioComponent,
    CadastrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    PrincipalModule,
    ProfessorModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    GerenciarUsuarioComponent,
    CadastrarUsuarioComponent
  ]
})
export class GerenciaModule { }
