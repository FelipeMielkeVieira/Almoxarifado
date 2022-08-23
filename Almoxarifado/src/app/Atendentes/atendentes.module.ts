import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservaAtendenteComponent } from '../Atendentes/reserva-atendente/reserva-atendente.component';
import { PrincipalModule } from '../Principal/principal.module';

@NgModule({
  imports: [
    CommonModule,
    PrincipalModule,
    FormsModule
  ],
  declarations: [ReservaAtendenteComponent],
  exports: [ReservaAtendenteComponent]
})
export class AtendentesModule { }
