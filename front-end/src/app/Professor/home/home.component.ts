import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: UsersService) {
    this.listaItens = service.itens;
    this.listaItensFiltrada = this.listaItens;
    this.numResultados = this.listaItens.length;
  }

  numeroPaginas = 6;
  numResultados = 0;

  listaItens;
  listaItensFiltrada;
  listaEmBloco = true;

  feedbackSacolaReservada: boolean = false;
  feedbackSacolaExcluida: boolean = false;

  paginaAtual = 1;

  modalOrdenar: boolean = false;

  listaOrdenacoes = [false, false, false, false];

  ngOnInit() {

    if (localStorage.getItem('excluir')) {
      localStorage.removeItem('excluir');
      this.abrirFeedback(1);
    } else if (localStorage.getItem('reservar')) {
      localStorage.removeItem('reservar');
      this.abrirFeedback(2);
    }

    // Função para fechamento dos modais ordenar e filtrar caso tenha sido clicado fora
    var self = this;
    window.onclick = function (event) {
      if (!(event.target as HTMLElement).className.includes("parteModal")) {
        if (!(event.target as HTMLElement).className.includes("iconsModais")) {
          if (self.modalOrdenar) {
            self.modalOrdenar = false;
          }
        }
      }
    }
  }

  // Função para mudar a visualização dos itens entre lista e bloco
  trocarVisualizacaoItem() {
    this.listaEmBloco = !this.listaEmBloco;
  }

  // Função para abrir e fechar o modal de ordenação
  mudarModalOrdenar() {
    this.modalOrdenar = !this.modalOrdenar;
  }

  // Função para voltar para a página anterior na lista de itens
  voltarPagina() {
    this.paginaAtual--;
  }

  // Função para ir para a próxima página na lista de itens
  proximoPagina() {
    this.paginaAtual++;
  }

  // Função para ir para uma página específica na lista de itens
  irPagina(numero: any) {
    this.paginaAtual = numero;
  }

  //Função para ordenar os itens, recebendo um array de booleanos que remetem às diferentes ordenações
  ordenarItens(event: any) {
    this.listaOrdenacoes = JSON.parse(event);
  }

  abrirFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackSacolaExcluida = true;
        setTimeout(() => {
          this.feedbackSacolaExcluida = false;
        }, 4500)
        break;
      case 2:
        this.feedbackSacolaReservada = true;
        setTimeout(() => {
          this.feedbackSacolaReservada = false;
        }, 4500)
        break;
    }
  }

  fecharModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackSacolaExcluida = false;
        break;
      case 2:
        this.feedbackSacolaReservada = false;
        break;
    }
  }
}
