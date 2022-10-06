import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrincipalModule } from '../Principal/principal.module';

@NgModule({
  imports: [
    CommonModule,
    PrincipalModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class ProfessorModule { }