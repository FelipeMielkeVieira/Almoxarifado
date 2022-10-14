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

  modalOrdernar: boolean = false;
  modalFiltrar: boolean = false;

  listaFiltros: [boolean, boolean, boolean, boolean] = [false, false, false, false];

  ngOnInit() {
  }

  mostrarEmBloco() {
    this.listaEmBloco = true;
  }

  mostrarEmLista() {
    this.listaEmBloco = false;
  }
  abrirModal(abrir: boolean) {
    if (abrir) {
      this.modalOrdernar = true;
      document.documentElement.style.overflow = 'hidden';
    } else {
      this.modalOrdernar = false;
      document.documentElement.style.overflow = 'auto';
    }

  }

  ordernar() {
    this.abrirModal(true);
  }

  fecharModalOrdenar() {
    this.abrirModal(false);
  }

  cancelarOrdenar() {
    this.abrirModal(false);
  }

  realizarOrdenacao() {
    this.abrirModal(false);
  }

  voltarPagina() {
    this.paginaAtual--;
  }

  irPagina(numero: any) {
    this.paginaAtual = numero;
  }

  proximoPagina() {
    this.paginaAtual++;
  }

  abrirModalFiltro() {
    this.modalFiltrar = !this.modalFiltrar;
  }

  fecharModalFiltro(event: any) {
    this.modalFiltrar = false;
    this.listaFiltros = JSON.parse(event);
  }

  filtrarItens(event: any) {
    this.listaFiltros = JSON.parse(event);

    this.listaItensFiltrada = this.listaItens.filter(e => {
      if(this.listaFiltros[0] == true && e.descartavel == false) {
        return false;
      }
      if(this.listaFiltros[1] == true && e.descartavel == true) {
        return false;
      }
      if(this.listaFiltros[2] == true && e.quantidade <= 0) {
        return false;
      }
      if(this.listaFiltros[3] == true && e.quantidade > 0) {
        return false;
      }
      return true;
    })
  }
}
