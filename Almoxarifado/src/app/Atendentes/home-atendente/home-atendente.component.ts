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
  nao= 0;
  cadastroProduto: number = 0;
  codUser: number;
  listaItens2;
  feedback = 0;
  item = 0;

  paredeCentro = [];
  armario = [];
  porta = [];
  localizacoesFiltradas = [];
  localizacaoAtual = "paredeCentro";

  constructor(private service: UsersService) {
    this.listaItens2 = service.itens;
    this.codUser = parseInt(localStorage.getItem('usuario'));
    this.cadastroProduto = parseInt(localStorage.getItem('usuario'));

    this.paredeCentro = service.paredeCentro;
    this.armario = service.armario;
    this.porta = service.porta;
  }

  ngOnInit() {
    this.filtrarLocalizacao();
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
    if (this.codUser == 3) {
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
    if (this.codUser == 3) {
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
    if (this.codUser == 3) {
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
    if (this.codUser == 3) {
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
      this.nao = 1;
    } else {
      this.nao = 2;
    }
  }

  fecharModalBaixaDevolucao() {
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  darBaixaDevolucao() {
    this.devolucaoModal = false;
    this.aparecer = false;
    this.nao = 2;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  informarDefeitoItem() {
    this.devolucaoModal = false;
    this.informarDefeitoModal = true;
  }

  voltarDevolucaoItens() {
    this.informarDefeitoModal = false;
    this.devolucaoModal = true;
  }

  botaoConfirmarRetirada() {
    this.devolucaoModal = false;
    this.aparecer = false;
    this.nao = 1;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  cadastrar() {
    this.aparecer = false;
    this.cadastrarModal = false;
    this.nao = 0;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  cadastrar2(){
    this.aparecer = false;
    this.cadastrarModal = false;
    this.nao = 3;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  filtrarLocalizacao() {
    if(this.localizacaoAtual == "paredeCentro") {
      this.localizacoesFiltradas = this.paredeCentro;
    }
    if(this.localizacaoAtual == "armario") {
      this.localizacoesFiltradas = this.armario;
    }
    if(this.localizacaoAtual == "porta") {
      this.localizacoesFiltradas = this.porta;
    }
  }

  excluirLocalizacao(index) {
    let loc = this.localizacoesFiltradas[index];
    let index1 = this.service.paredeCentro.findIndex((e) => {
      if(e.nome == loc.nome) {
        return true;
      };
      return false;
    })
    if(index1 != -1) {
      this.service.paredeCentro.splice(index1, 1);
    }

    let index2 = this.service.armario.findIndex((e) => {
      if(e.nome == loc.nome) {
        return true;
      };
      return false;
    })
    if(index2 != -1) {
      this.service.armario.splice(index2, 1);
    }

    let index3 = this.service.porta.findIndex((e) => {
      if(e.nome == loc.nome) {
        return true;
      };
      return false;
    })
    if(index3 != -1) {
      this.service.porta.splice(index3, 1);
    }
  }
}
