import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../Principal/item/item.component';
import { SacolaComponent } from '../Principal/sacola/sacola.component';
import { ReservaComponent } from '../Principal/reserva/reserva.component';
import { HeaderComponent } from '../Principal/header/header.component';
import { HomeComponent } from '../Principal/home/home.component';
import { MinhasReservasComponent } from '../Principal/minhas-reservas/minhas-reservas.component';
import { MinhaSacolaComponent } from '../Principal/minha-sacola/minha-sacola.component';
import { SacolasComponent } from '../Principal/sacolas/sacolas.component';
import { HomeProfessorComponent } from '../Professor/home-professor/home-professor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemComponent, SacolaComponent, ReservaComponent, HeaderComponent, HomeComponent, MinhasReservasComponent, MinhaSacolaComponent, SacolasComponent, HomeProfessorComponent]
})
export class PrincipalModule { }
