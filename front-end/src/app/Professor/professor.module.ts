import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PrincipalModule } from '../principal/principal.module';
import { MinhasReservasComponent } from './minhas-reservas/minhas-reservas.component';
import { ReservaProfessorComponent } from './reserva-professor/reserva-professor.component';
import { MinhasSacolasComponent } from './minhas-sacolas/minhas-sacolas.component';
import { SacolaComponent } from './sacola/sacola.component';
import { DetalhesReservaComponent } from './detalhes-reserva/detalhes-reserva.component';



@NgModule({
  declarations: [
    HomeComponent,
    MinhasReservasComponent,
    ReservaProfessorComponent,
    MinhasSacolasComponent,
    SacolaComponent,
    DetalhesReservaComponent
  ],
  imports: [
    CommonModule,
    PrincipalModule
  ],
  exports: [
    HomeComponent,
    MinhasReservasComponent,
    ReservaProfessorComponent,
    MinhasSacolasComponent,
    SacolaComponent,
    DetalhesReservaComponent
  ]
})
export class ProfessorModule { }
