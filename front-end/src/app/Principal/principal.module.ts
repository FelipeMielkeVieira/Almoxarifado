import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FiltroComponent } from './filtro/filtro.component';
import { HeaderComponent } from './header/header.component';
import { ModalConfiguracoesComponent } from './modal-configuracoes/modal-configuracoes.component';
import { ModalEditarUserComponent } from './modal-editar-user/modal-editar-user.component';
import { ModalUserComponent } from './modal-user/modal-user.component';


@NgModule({
  declarations: [
    FiltroComponent,
    HeaderComponent,
    ModalConfiguracoesComponent,
    ModalEditarUserComponent,
    ModalUserComponent
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
    ModalUserComponent
  ]
})
export class PrincipalModule { }
