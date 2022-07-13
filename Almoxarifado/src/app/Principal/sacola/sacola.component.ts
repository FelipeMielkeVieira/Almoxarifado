import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css']
})
export class SacolaComponent implements OnInit {

  constructor() { }

  contadorReservar: number;
  reservaFeita: number;

  ngOnInit() {
  }

  reservar() {
    this.contadorReservar = 1;
  }

  finalizarReserva() {
    this.contadorReservar = 0;
    this.reservaFeita = 1;
    setTimeout(() => {
      this.reservaFeita = 0;
    }, 5000)
  }

  cancelar() {
    this.contadorReservar = 0;
    this.reservaFeita = 0;
  }

}
