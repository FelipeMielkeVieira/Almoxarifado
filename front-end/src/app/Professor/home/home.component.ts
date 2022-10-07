import { Component, HostListener, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UsersService) {
    this.listaItens = service.itens;
    this.numResultados = this.listaItens.length;
  }

  numeroPaginas = 6;
  numResultados = 0;

  listaItens;
  listaEmBloco = true;

  paginaAtual = 1;

  modalOrdernar: boolean = false;
  modalFiltrar: boolean = false;

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

  filtrar() {
    this.modalFiltrar = !this.modalFiltrar;
  }

  fecharModalFiltro() {
    this.modalFiltrar = false;
  }
}