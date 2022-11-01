import { TelaCarregamentoComponent } from './tela-carregamento/tela-carregamento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FiltroComponent } from './filtro/filtro.component';
import { HeaderComponent } from './header/header.component';
import { ModalConfiguracoesComponent } from './modal-configuracoes/modal-configuracoes.component';
import { ModalEditarUserComponent } from './modal-editar-user/modal-editar-user.component';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { ModalOrdernar } from './modal-ordenar/modal-ordenar.component';
import { ItemComponent } from './item/item.component';
import { ModalReservarItem } from './modal-reservar-item/modal-reservar-item.component';
import { ModalFeedback } from './modal-feedback/modal-feedback.component';
import { AnexosItemComponent } from './anexos-item/anexos-item.component';
import { ModalEditarItem } from './modal-editar-item/modal-editar-item.component';
import { ModalMotivoEdicaoComponent } from './modal-motivo-edicao/modal-motivo-edicao.component';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';
import { ModalHistoricoEdicaoComponent } from './modal-historico-edicao/modal-historico-edicao.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ItemListaComponent } from './item-lista/item.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CalendarioComponent } from './calendario/calendario.component';
import { GerenciarFiltrosComponent } from './gerenciar-filtros/gerenciar-filtros.component';
import { FavoritoItemComponent } from './favorito-item/favorito-item.component';
import { EditarDescricaoItemComponent } from './editar-descricao-item/editar-descricao-item.component';


@NgModule({
  declarations: [
    FiltroComponent,
    HeaderComponent,
    ModalConfiguracoesComponent,
    ModalEditarUserComponent,
    ModalUserComponent,
    ModalOrdernar,
    ItemComponent,
    ModalReservarItem,
    ModalFeedback,
    AnexosItemComponent,
    ModalEditarItem,
    ModalMotivoEdicaoComponent,
    ModalConfirmacaoComponent,
    ModalHistoricoEdicaoComponent,
    PaginacaoComponent,
    AjudaComponent,
    ItemListaComponent,
    TelaCarregamentoComponent,
    CalendarioComponent,
    GerenciarFiltrosComponent,
    FavoritoItemComponent,
    EditarDescricaoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [
    FiltroComponent,
    HeaderComponent,
    ModalEditarUserComponent,
    ModalConfiguracoesComponent,
    ModalUserComponent,
    ModalOrdernar,
    ItemComponent,
    ModalReservarItem,
    ModalFeedback,
    AnexosItemComponent,
    ModalEditarItem,
    ModalMotivoEdicaoComponent,
    ModalConfirmacaoComponent,
    ModalHistoricoEdicaoComponent,
    ItemListaComponent,
    TelaCarregamentoComponent,
    CalendarioComponent,
    GerenciarFiltrosComponent
  ]
})
export class PrincipalModule { }
