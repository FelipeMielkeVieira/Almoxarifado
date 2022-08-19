import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css']
})
export class SacolaComponent implements OnInit {

  constructor(private router:Router) { }

  id:number = 1;

  contadorReservar: number;
  reservaFeita: number;

  calendarioAberto1: number = 0;
  calendarioAberto2: number = 0;

  dataRetirada: string = "__/__/____ 00:00"
  dataDevolucao: string = "__/__/____ 00:00"

  listaProfessores = this.buscarProfessores();

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

  verDetalhes(){
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas/' + this.id]);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas/' + this.id]);
    } else {
      this.router.navigate(['/supervisor/sacolas/' + this.id])
    }
  }

  buscarProfessores() {
    return [{ id: 1, nome: "Professor 1" }, { id: 2, nome: "Professor 2" },
    { id: 3, nome: "Professor 3" }, { id: 4, nome: "Professor 4" },
    { id: 5, nome: "Professor 5" }];
  }

}
