import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.component.html',
  styleUrls: ['./minhas-reservas.component.scss']
})
export class MinhasReservasComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.atualizarListaReservas(1);
  }

  // <!-- ------------------------------- CAMINHO DO SITE (O PATH) ------------------------------ -->
  reservasPendentes: boolean = true;
  reservasHistorico: boolean = false;
  listaReservas: any[] = [];

  // *Vai para o home do usuário logado
  home() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

  // Troca a visualização das reservas
  trocarVisualizacao(numero: number) {
    if (numero == 1) {
      this.reservasHistorico = false;
      this.reservasPendentes = true;
      (document.querySelector('.reservasPendentes') as HTMLElement).className = "historicoReservas";
      (document.querySelector('.historicoReservas') as HTMLElement).className = "reservasPendentes";
    } else {
      (document.querySelector('.historicoReservas') as HTMLElement).className = "reservasPendentes";
      (document.querySelector('.reservasPendentes') as HTMLElement).className = "historicoReservas";
      this.reservasHistorico = true;
      this.reservasPendentes = false;
    }
    this.atualizarListaReservas(numero);
  }

  // Atualiza a lista de reservas na troca de visualização
  atualizarListaReservas(numero: number) {
    if (numero == 1) {
      let listaNova: any = [];
      this.service.reserva.forEach(e => {
        if (localStorage.getItem('emailAtual') == e.usuario_email && e.status < 3) {
          listaNova.push(e);
        }
      });
      this.listaReservas = listaNova;
    } else {
      let listaNova: any = [];
      this.service.reserva.forEach(e => {
        if (localStorage.getItem('emailAtual') == e.usuario_email && e.status > 2) {
          listaNova.push(e);
        }
      });
      this.listaReservas = listaNova;
    }
  }

  // <!-- ------------------------------- FIM CAMINHO DO SITE (O PATH) ------------------------------ -->
}