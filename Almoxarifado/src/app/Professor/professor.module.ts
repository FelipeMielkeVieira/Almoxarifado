import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProfessorComponent } from './home-professor/home-professor.component';
import { PrincipalModule } from '../Principal/principal.module';

@NgModule({
  imports: [
    CommonModule,
    PrincipalModule
  ],
  declarations: [HomeProfessorComponent],
  exports: [HomeProfessorComponent]
})
export class ProfessorModule { }
