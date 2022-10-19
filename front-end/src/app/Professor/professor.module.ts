import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PrincipalModule } from '../principal/principal.module';
import { MinhasReservasComponent } from './minhas-reservas/minhas-reservas.component';



@NgModule({
  declarations: [
    HomeComponent,
    MinhasReservasComponent
  ],
  imports: [
    CommonModule,
    PrincipalModule
  ],
  exports: [
    HomeComponent,
    MinhasReservasComponent
  ]
})
export class ProfessorModule { }
