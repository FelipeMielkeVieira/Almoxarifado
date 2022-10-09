import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PrincipalModule } from '../principal/principal.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrincipalModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ProfessorModule { }
