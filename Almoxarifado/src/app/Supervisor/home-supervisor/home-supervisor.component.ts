import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-supervisor',
  templateUrl: './home-supervisor.component.html',
  styleUrls: ['./home-supervisor.component.css']
})
export class HomeSupervisorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contadorRecusar = 0;
  contadorAceitar = 0;
  contadorUsuarios = 0;
  contadorCadastros = 0;

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

  gerenciarUsuarios() {
    this.contadorUsuarios = 1;
    let botaoAzul = document.querySelector('#botaoMenu') as HTMLElement;
    botaoAzul.style.backgroundColor = '#0047B6';
    botaoAzul.style.color = '#ffff'
    let botaoSemAzul = document.querySelector('#botaoMenuCor') as HTMLElement;
    botaoSemAzul.style.backgroundColor = '#ffff';
    botaoSemAzul.style.color = '#000';
    let tirarDiv = document.querySelector('.usuarios') as HTMLElement;
    tirarDiv.remove();
  }


}
