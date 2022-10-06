import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './Filtro/filtro.component';
import { HeaderComponent } from './Header/header.component';
import { ModalEditarUserComponent } from './ModalEditarUser/modal-editar-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FiltroComponent, HeaderComponent, ModalEditarUserComponent],
  exports: [FiltroComponent, HeaderComponent, ModalEditarUserComponent]
})
export class PrincipalModule { }