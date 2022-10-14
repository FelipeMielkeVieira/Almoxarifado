import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.component.html',
  styleUrls: ['./minhas-reservas.component.css']
})
export class MinhasReservasComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    var self = this;
    this.service.reserva.forEach(e => {
      if(localStorage.getItem('emailAtual') == e.usuario_email && e.status < 3) {
        self.listaReservas.push(e);
      }
    });
    this.service.reserva.forEach(e => {
      if(localStorage.getItem('emailAtual') == e.usuario_email && e.status > 2) {
        self.listaReservas2.push(e);
      }
    });
  }

  // <!-- ------------------------------- CAMINHO DO SITE (O PATH) ------------------------------ -->
  reservasPendentes: number =  1;
  reservasHistorico: number =  0;
  listaReservas = [];
  listaReservas2 = [];

  // *Vai para o home do usuário logado
  home() {
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

  // *Vai para a visualização de reservas
  botaoReservas(){
    this.reservasHistorico = 0;
    this.reservasPendentes = 1;

    let comAzul = document.querySelector('.reservasPendentes') as HTMLElement;
    comAzul.className = "historicoReservas"
    let semAzul = document.querySelector('.historicoReservas') as HTMLElement;
    semAzul.className = "reservasPendentes"
  }

  // *Vai para a visualização de histórico de reservas
  botaoHistorico(){
    this.reservasHistorico = 1;
    this.reservasPendentes = 0;

    let comAzul = document.querySelector('.historicoReservas') as HTMLElement;
    comAzul.className = "reservasPendentes"
    let semAzul = document.querySelector('.reservasPendentes') as HTMLElement;
    semAzul.className = "historicoReservas"
  }

  // <!-- ------------------------------- FIM CAMINHO DO SITE (O PATH) ------------------------------ -->
}
