import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home-atendente',
  templateUrl: './home-atendente.component.html',
  styleUrls: ['./home-atendente.component.css']
})
export class HomeAtendenteComponent implements OnInit {

  aparecer: boolean = false
  localizacaoModal: boolean = false;
  cadastrarModal: boolean = false;
  devolucaoModal: boolean = false;
  informarDefeitoModal: boolean = false;
  localizacao: number = 0
  listaItens: number = 0
  confirmarRetirada: number = 0
  baixaDevolucoes: number = 1
  aparecerEspecificacaoReserva: boolean = false;
  nao: boolean = false;
  cadastroProduto: number = 0;
  codUser: number;

  constructor(private service: UsersService) {
    this.listaItens2 = service.itens;
    this.codUser = parseInt(localStorage.getItem('usuario'));
    this.cadastroProduto = parseInt(localStorage.getItem('usuario'));
  }

  listaItens2;

  ngOnInit() {
  }

  aparecerModalLocalizacao() {
    this.aparecer = true;
    this.localizacaoModal = true;
  }

  fecharModalLocalizacao() {
    this.aparecer = false;
    this.localizacaoModal = false;
  }

  aparecerModalCadastrar() {
    this.aparecer = true;
    this.cadastrarModal = true;
  }

  fecharModalCadastrar() {
    this.aparecer = false;
    this.cadastrarModal = false;
  }

  telaLocalizacoes() {
    this.listaItens = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 0
    this.localizacao = 1

    let semAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#confirmarRetirada') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#listaItens') as HTMLElement;
    semAzul3.className = "semAzul"
    if(this.codUser == 3) {
      let comAzul = document.querySelector('#localizacoes') as HTMLElement;
      comAzul.className = "comAzul"
    }

  }

  telaListaItens() {
    this.localizacao = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 0
    this.listaItens = 1

    let semAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#confirmarRetirada') as HTMLElement;
    semAzul2.className = "semAzul"
    if(this.codUser == 3) {
      let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      semAzul3.className = "semAzul"
    }
    let comAzul = document.querySelector('#listaItens') as HTMLElement;
    comAzul.className = "comAzul" 
  }

  telaConfirmarRetirada() {
    this.localizacao = 0
    this.listaItens = 0
    this.baixaDevolucoes = 0
    this.confirmarRetirada = 1

    let semAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    if(this.codUser == 3) {
      let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      semAzul3.className = "semAzul"
    }
    let comAzul = document.querySelector('#confirmarRetirada') as HTMLButtonElement;
    comAzul.className = "comAzul" 

  }

  telaBaixaDevolucoes() {
    this.localizacao = 0
    this.listaItens = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 1

    let semAzul1 = document.querySelector('#confirmarRetirada') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    if(this.codUser == 3) {
      let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      semAzul3.className = "semAzul"
    }
    let comAzul = document.querySelector('#baixaDevolucoes') as HTMLElement;
    comAzul.className = "comAzul"
  }

  abrirDevolucao(numero) {
    this.devolucaoModal = true;
    this.aparecer = true;
    if (numero == 2) {
      this.nao = true;
    } else {
      this.nao = false;
    }
  }

  fecharModalBaixaDevolucao() {
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  darBaixaDevolucao() {
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  informarDefeitoItem() {
    this.devolucaoModal = false;
    this.informarDefeitoModal = true;
  }

  voltarDevolucaoItens() {
    this.informarDefeitoModal = false;
    this.devolucaoModal = true;
  }

  cadastrar(){
    this.aparecer = false;
    this.cadastrarModal = false;
  }

}
