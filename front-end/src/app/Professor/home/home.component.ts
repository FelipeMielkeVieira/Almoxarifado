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

  paginaAtual = 1;

  modalOrdenar: boolean = false;
  modalFiltrar: boolean = false;

  listaFiltros: [boolean, boolean, boolean, boolean] = [false, false, false, false];
  listaOrdenacoes = [false, false, false, false];

  ngOnInit() {

    // Função para fechamento dos modais ordenar e filtrar caso tenha sido clicado fora
    var self = this;
    window.onclick = function (event) {
      if (!(event.target as HTMLElement).className.includes("parteModal")) {
        if (!(event.target as HTMLElement).className.includes("iconsModais")) {
          if (self.modalFiltrar) {
            self.modalFiltrar = false;
          }
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

  // Função para abrir e fechar o modal de filtragem
  abrirModalFiltro() {
    this.modalFiltrar = !this.modalFiltrar;
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

  // Função para fechar o modal de filtro e receber os filtros definidos
  fecharModalFiltro(event: any) {
    this.modalFiltrar = false;
    this.listaFiltros = JSON.parse(event);
  }

  // Função para listar os itens de acordo com a lista armazenada
  filtrarItens(event: any) {
    this.listaFiltros = JSON.parse(event);

    this.listaItensFiltrada = this.listaItens.filter(e => {
      if (this.listaFiltros[0] == true && e.descartavel == false) {
        return false;
      }
      if (this.listaFiltros[1] == true && e.descartavel == true) {
        return false;
      }
      if (this.listaFiltros[2] == true && e.quantidade <= 0) {
        return false;
      }
      if (this.listaFiltros[3] == true && e.quantidade > 0) {
        return false;
      }
      return true;
    })
  }

  //Função para ordenar os itens, recebendo um array de booleanos que remetem às diferentes ordenações
  ordenarItens(event: any) {
    this.listaOrdenacoes = JSON.parse(event);
  }
}
