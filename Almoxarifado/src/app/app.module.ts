import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { PrincipalModule } from './Principal/principal.module';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    PrincipalModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
