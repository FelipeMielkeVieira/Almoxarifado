import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSupervisorComponent } from '../Supervisor/home-supervisor/home-supervisor.component';
import { AtendentesModule } from '../Atendentes/atendentes.module';
import { PrincipalModule } from '../Principal/principal.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AtendentesModule,
    PrincipalModule,
    FormsModule
  ],
  declarations: [HomeSupervisorComponent],
  exports: [HomeSupervisorComponent]
})
export class SupervisorModule { }
