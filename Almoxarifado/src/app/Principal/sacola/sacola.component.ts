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

  calendarioAberto1: number = 0;
  calendarioAberto2: number = 0;

  dataRetirada: string = "__/__/____ 00:00"
  dataDevolucao: string = "__/__/____ 00:00"

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

  abrirCalendario1() {
    this.calendarioAberto2 = 0;
    if(this.calendarioAberto1 == 0) {
      this.calendarioAberto1 = 1;
    } else {
      this.calendarioAberto1 = 0;
    }
  }

  abrirCalendario2() {
    this.calendarioAberto1 = 0;
    if(this.calendarioAberto2 == 0) {
      this.calendarioAberto2 = 1;
    } else {
      this.calendarioAberto2 = 0;
    }
  }

  salvarData1(event) {
    this.calendarioAberto1 = 0;
    this.dataRetirada = event;
  }

  salvarData2(event) {
    this.calendarioAberto2 = 0;
    this.dataDevolucao = event;
  }

}
