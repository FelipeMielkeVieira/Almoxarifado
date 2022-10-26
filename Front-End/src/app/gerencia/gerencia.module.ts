import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrincipalModule } from '../principal/principal.module';
import { ProfessorModule } from '../professor/professor.module';
import { FormsModule } from '@angular/forms';
import { GerenciarUsuarioComponent } from './gerenciar-usuario/gerenciar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReservaComponent } from './reserva/reserva.component';
import { RetiradaReservaComponent } from './retirada-reserva/retirada-reserva.component';
import { ModalOcorrenciaComponent } from './modal-ocorrencia/modal-ocorrencia.component';

@NgModule({
  declarations: [
    HomeComponent,
    GerenciarUsuarioComponent,
    CadastrarUsuarioComponent,
    LocalizacaoComponent,
    ReservaComponent,
    RetiradaReservaComponent,
    ModalOcorrenciaComponent
  ],
  imports: [
    CommonModule,
    PrincipalModule,
    ProfessorModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    HomeComponent,
    GerenciarUsuarioComponent,
    CadastrarUsuarioComponent,
    LocalizacaoComponent,
    ReservaComponent,
    RetiradaReservaComponent,
    ModalOcorrenciaComponent
  ]
})
export class GerenciaModule { }
