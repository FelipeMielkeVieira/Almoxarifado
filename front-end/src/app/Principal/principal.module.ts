import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FiltroComponent } from './filtro/filtro.component';
import { HeaderComponent } from './header/header.component';
import { ModalConfiguracoesComponent } from './modal-configuracoes/modal-configuracoes.component';
import { ModalEditarUserComponent } from './modal-editar-user/modal-editar-user.component';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { ModalFiltragemItens } from './modal-filtragem-itens/modal-filtragem-itens.component';
import { ModalOrdernar } from './modal-ordenar/modal-ordenar.component';
import { ItemComponent } from './item/item.component';
import { ModalReservarItem } from './modal-reservar-item/modal-reservar-item.component';
import { ModalFeedback } from './modal-feedback/modal-feedback.component';


@NgModule({
  declarations: [
    FiltroComponent,
    HeaderComponent,
    ModalConfiguracoesComponent,
    ModalEditarUserComponent,
    ModalUserComponent,
    ModalFiltragemItens,
    ModalOrdernar,
    ItemComponent,
    ModalReservarItem,
    ModalFeedback
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FiltroComponent,
    HeaderComponent,
    ModalEditarUserComponent,
    ModalConfiguracoesComponent,
    ModalUserComponent,
    ModalFiltragemItens,
    ModalOrdernar,
    ItemComponent,
    ModalReservarItem,
    ModalFeedback
  ]
})
export class PrincipalModule { }
