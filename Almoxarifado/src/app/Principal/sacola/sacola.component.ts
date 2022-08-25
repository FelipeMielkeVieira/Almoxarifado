import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css']
})
export class SacolaComponent implements OnInit {

  constructor(private router:Router, private service: UsersService) {}

  @Input() sacola: {id: 0, data_retirada: '0000-00-00', data_devolucao: '0000-00-00', usuario_email: ''};

  id:number = 1;
  listaItens = [];

  contadorReservar: number = 0;
  contadorExcluir: number = 0;
  reservaFeita: number;

  calendarioAberto1: number = 0;
  calendarioAberto2: number = 0;

  listaProfessores = this.buscarProfessores();

  ngOnInit() {
    this.listaItens = this.service.retornaProdutosSacola(this.sacola.id);
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
    this.contadorExcluir = 0;
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
    this.sacola.data_retirada = event;
  }

  salvarData2(event) {
    this.calendarioAberto2 = 0;
    this.sacola.data_devolucao = event;
  }

  verDetalhes(){
    localStorage.setItem("reserva", "2");
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas/' + this.id]);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas/' + this.id]);
    } else {
      this.router.navigate(['/supervisor/sacolas/' + this.id])
    }
  }

  atendente() {
    let usuario = parseInt(localStorage.getItem("usuario"));
    if (usuario == 2 || usuario == 3)
      return true;
    return false;
  }

  buscarProfessores() {
    return [{ id: 1, nome: "Professor 1" }, { id: 2, nome: "Professor 2" },
    { id: 3, nome: "Professor 3" }, { id: 4, nome: "Professor 4" },
    { id: 5, nome: "Professor 5" }];
  }

  excluirModal() {
    this.contadorExcluir = 1;
  }

  excluir() {
    this.contadorExcluir = 0;
  }

  formatarData(data: string) {
    return new Date(data).toLocaleString();
  }

}
