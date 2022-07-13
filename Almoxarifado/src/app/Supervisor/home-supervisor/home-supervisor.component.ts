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

    let botaoAzul = document.querySelector('#gerenciarCadastros') as HTMLElement;
    botaoAzul.style.backgroundColor = '#0047B6';
    botaoAzul.style.color = '#ffff'

    let botaoSemAzul = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    botaoSemAzul.style.backgroundColor = '#ffff';
    botaoSemAzul.style.color = '#000';
    let botaoSemAzul2 = document.querySelector('#devolucoes') as HTMLElement;
    botaoSemAzul2.style.backgroundColor = '#ffff';
    botaoSemAzul2.style.color = '#000';
    let botaoSemAzul3 = document.querySelector('#retirada') as HTMLElement;
    botaoSemAzul3.style.backgroundColor = '#ffff';
    botaoSemAzul3.style.color = '#000';
    let botaoSemAzul4 = document.querySelector('#listaItens') as HTMLElement;
    botaoSemAzul4.style.backgroundColor = '#ffff';
    botaoSemAzul4.style.color = '#000';
    let botaoSemAzul5 = document.querySelector('#localizacoes') as HTMLElement;
    botaoSemAzul5.style.backgroundColor = '#ffff';
    botaoSemAzul5.style.color = '#000';
  }

  gerenciarUsuarios() {
    this.gerenciaUsuarios = 1;
    this.gerenciaCadastros = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let botaoAzul = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    botaoAzul.style.backgroundColor = '#0047B6';
    botaoAzul.style.color = '#ffff'

    let botaoSemAzul = document.querySelector('#gerenciarCadastros') as HTMLElement;
    botaoSemAzul.style.backgroundColor = '#ffff';
    botaoSemAzul.style.color = '#000';
    let botaoSemAzul2 = document.querySelector('#devolucoes') as HTMLElement;
    botaoSemAzul2.style.backgroundColor = '#ffff';
    botaoSemAzul2.style.color = '#000';
    let botaoSemAzul3 = document.querySelector('#retirada') as HTMLElement;
    botaoSemAzul3.style.backgroundColor = '#ffff';
    botaoSemAzul3.style.color = '#000';
    let botaoSemAzul4 = document.querySelector('#listaItens') as HTMLElement;
    botaoSemAzul4.style.backgroundColor = '#ffff';
    botaoSemAzul4.style.color = '#000';
    let botaoSemAzul5 = document.querySelector('#localizacoes') as HTMLElement;
    botaoSemAzul5.style.backgroundColor = '#ffff';
    botaoSemAzul5.style.color = '#000';
  }

  baixaDevolucoes() {
    this.devolucoes = 1;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let botaoAzul = document.querySelector('#devolucoes') as HTMLElement;
    botaoAzul.style.backgroundColor = '#0047B6';
    botaoAzul.style.color = '#ffff'

    let botaoSemAzul = document.querySelector('#gerenciarCadastros') as HTMLElement;
    botaoSemAzul.style.backgroundColor = '#ffff';
    botaoSemAzul.style.color = '#000';
    let botaoSemAzul2 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    botaoSemAzul2.style.backgroundColor = '#ffff';
    botaoSemAzul2.style.color = '#000';
    let botaoSemAzul3 = document.querySelector('#retirada') as HTMLElement;
    botaoSemAzul3.style.backgroundColor = '#ffff';
    botaoSemAzul3.style.color = '#000';
    let botaoSemAzul4 = document.querySelector('#listaItens') as HTMLElement;
    botaoSemAzul4.style.backgroundColor = '#ffff';
    botaoSemAzul4.style.color = '#000';
    let botaoSemAzul5 = document.querySelector('#localizacoes') as HTMLElement;
    botaoSemAzul5.style.backgroundColor = '#ffff';
    botaoSemAzul5.style.color = '#000';
  }

  confirmarRetirada() {
    this.retirada = 1;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let botaoAzul = document.querySelector('#retirada') as HTMLElement;
    botaoAzul.style.backgroundColor = '#0047B6';
    botaoAzul.style.color = '#ffff'

    let botaoSemAzul = document.querySelector('#gerenciarCadastros') as HTMLElement;
    botaoSemAzul.style.backgroundColor = '#ffff';
    botaoSemAzul.style.color = '#000';
    let botaoSemAzul2 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    botaoSemAzul2.style.backgroundColor = '#ffff';
    botaoSemAzul2.style.color = '#000';
    let botaoSemAzul3 = document.querySelector('#devolucoes') as HTMLElement;
    botaoSemAzul3.style.backgroundColor = '#ffff';
    botaoSemAzul3.style.color = '#000';
    let botaoSemAzul4 = document.querySelector('#listaItens') as HTMLElement;
    botaoSemAzul4.style.backgroundColor = '#ffff';
    botaoSemAzul4.style.color = '#000';
    let botaoSemAzul5 = document.querySelector('#localizacoes') as HTMLElement;
    botaoSemAzul5.style.backgroundColor = '#ffff';
    botaoSemAzul5.style.color = '#000';
  }

  listaDeItens() {
    this.listaItens = 1;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.contLocalizacoes = 0;

    let botaoAzul = document.querySelector('#listaItens') as HTMLElement;
    botaoAzul.style.backgroundColor = '#0047B6';
    botaoAzul.style.color = '#ffff'

    let botaoSemAzul = document.querySelector('#gerenciarCadastros') as HTMLElement;
    botaoSemAzul.style.backgroundColor = '#ffff';
    botaoSemAzul.style.color = '#000';
    let botaoSemAzul2 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    botaoSemAzul2.style.backgroundColor = '#ffff';
    botaoSemAzul2.style.color = '#000';
    let botaoSemAzul3 = document.querySelector('#devolucoes') as HTMLElement;
    botaoSemAzul3.style.backgroundColor = '#ffff';
    botaoSemAzul3.style.color = '#000';
    let botaoSemAzul4 = document.querySelector('#retirada') as HTMLElement;
    botaoSemAzul4.style.backgroundColor = '#ffff';
    botaoSemAzul4.style.color = '#000';
    let botaoSemAzul5 = document.querySelector('#localizacoes') as HTMLElement;
    botaoSemAzul5.style.backgroundColor = '#ffff';
    botaoSemAzul5.style.color = '#000';
  }

  localizacoes() {
    this.contLocalizacoes = 1;
    this.listaItens = 0;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;

    let botaoAzul = document.querySelector('#localizacoes') as HTMLElement;
    botaoAzul.style.backgroundColor = '#0047B6';
    botaoAzul.style.color = '#ffff'

    let botaoSemAzul = document.querySelector('#gerenciarCadastros') as HTMLElement;
    botaoSemAzul.style.backgroundColor = '#ffff';
    botaoSemAzul.style.color = '#000';
    let botaoSemAzul2 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    botaoSemAzul2.style.backgroundColor = '#ffff';
    botaoSemAzul2.style.color = '#000';
    let botaoSemAzul3 = document.querySelector('#devolucoes') as HTMLElement;
    botaoSemAzul3.style.backgroundColor = '#ffff';
    botaoSemAzul3.style.color = '#000';
    let botaoSemAzul4 = document.querySelector('#retirada') as HTMLElement;
    botaoSemAzul4.style.backgroundColor = '#ffff';
    botaoSemAzul4.style.color = '#000';
    let botaoSemAzul5 = document.querySelector('#listaItens') as HTMLElement;
    botaoSemAzul5.style.backgroundColor = '#ffff';
    botaoSemAzul5.style.color = '#000';
  }

}
