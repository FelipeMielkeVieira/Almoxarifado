import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaAtendenteComponent } from '../Atendentes/reserva-atendente/reserva-atendente.component';
import { HomeAtendenteComponent } from '../Atendentes/home-atendente/home-atendente.component';
import { PrincipalModule } from '../Principal/principal.module';

@NgModule({
  imports: [
    CommonModule,
    PrincipalModule
  ],
  declarations: [ReservaAtendenteComponent, HomeAtendenteComponent],
  exports: [HomeAtendenteComponent, ReservaAtendenteComponent]
})
export class AtendentesModule { }
