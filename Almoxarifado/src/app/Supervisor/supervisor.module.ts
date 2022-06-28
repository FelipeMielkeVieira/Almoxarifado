import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSupervisorComponent } from '../Supervisor/home-supervisor/home-supervisor.component';
import { AtendentesModule } from '../Atendentes/atendentes.module';
import { PrincipalModule } from '../Principal/principal.module';

@NgModule({
  imports: [
    CommonModule,
    AtendentesModule,
    PrincipalModule
  ],
  declarations: [HomeSupervisorComponent],
  exports: [HomeSupervisorComponent]
})
export class SupervisorModule { }
