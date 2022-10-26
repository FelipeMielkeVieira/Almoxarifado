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
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ReservaComponent } from './reserva/reserva.component';
import { RetiradaReservaComponent } from './retirada-reserva/retirada-reserva.component';
import { ModalOcorrenciaComponent } from './modal-ocorrencia/modal-ocorrencia.component';
import { CadastrarUsuarioListaComponent } from './cadastrar-usuario-lista/cadastrar-usuario-lista.component';
import { CadastrarLocalizacaoModalComponent } from './cadastrar-localizacao-modal/cadastrar-localizacao-modal.component';
import { DevolucaoReservaComponent } from './devolucao-reserva/devolucao-reserva.component';
import { CadastrarItemComponent } from './cadastrar-item/cadastrar-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    GerenciarUsuarioComponent,
    CadastrarUsuarioComponent,
    LocalizacaoComponent,
    ReservaComponent,
    RetiradaReservaComponent,
    ModalOcorrenciaComponent,
    CadastrarUsuarioListaComponent,
    CadastrarLocalizacaoModalComponent,
    DevolucaoReservaComponent,
    CadastrarItemComponent
  ],
  imports: [
    CommonModule,
    PrincipalModule,
    ProfessorModule,
    FormsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    GerenciarUsuarioComponent,
    CadastrarUsuarioComponent,
    LocalizacaoComponent,
    ReservaComponent,
    RetiradaReservaComponent,
    ModalOcorrenciaComponent,
    DevolucaoReservaComponent,
    CadastrarUsuarioListaComponent
  ]
})
export class GerenciaModule { }
