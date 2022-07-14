import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home-supervisor',
  templateUrl: './home-supervisor.component.html',
  styleUrls: ['./home-supervisor.component.css']
})
export class HomeSupervisorComponent implements OnInit {

  constructor(private service: UsersService) {
    this.listaItens2 = service.itens;
  }

  listaItens2;

  ngOnInit() {
  }

  contadorRecusar = 0;
  contadorAceitar = 0;
  gerenciaUsuarios = 1;
  gerenciaCadastros = 0;
  devolucoes = 0;
  retirada = 0;
  listaItens = 0;
  contLocalizacoes = 0;

  modalRecusar() {
    this.contadorRecusar = 1;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '0.5';
  }

  modalAceitar() {
    this.contadorAceitar = 1;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '0.5';
  }

  cancelar() {
    this.contadorRecusar = 0;
    this.contadorAceitar = 0;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '1';
  }

  gerenciarCadastros() {
    this.gerenciaCadastros = 1;
    this.gerenciaUsuarios = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#retirada') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#gerenciarCadastros') as HTMLElement;
    comAzul.className = "comAzul"
  }

  gerenciarUsuarios() {
    this.gerenciaUsuarios = 1;
    this.gerenciaCadastros = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#retirada') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    comAzul.className = "comAzul"
  }

  baixaDevolucoes() {
    this.devolucoes = 1;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#retirada') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#devolucoes') as HTMLElement;
    comAzul.className = "comAzul"
  }

  confirmarRetirada() {
    this.retirada = 1;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#retirada') as HTMLElement;
    comAzul.className = "comAzul"
  }

  listaDeItens() {
    this.listaItens = 1;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#retirada') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#listaItens') as HTMLElement;
    comAzul.className = "comAzul"
  }

  localizacoes() {
    this.contLocalizacoes = 1;
    this.listaItens = 0;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;

    let semAzul1 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#retirada') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#listaItens') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#localizacoes') as HTMLElement;
    comAzul.className = "comAzul"
  }

}
