import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaAtendenteComponent } from '../Atendentes/reserva-atendente/reserva-atendente.component';
import { HomeAtendenteComponent } from '../Atendentes/home-atendente/home-atendente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservaAtendenteComponent, HomeAtendenteComponent]
})
export class AtendentesModule { }
