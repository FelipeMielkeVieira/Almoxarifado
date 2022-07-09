import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-atendente',
  templateUrl: './home-atendente.component.html',
  styleUrls: ['./home-atendente.component.css']
})
export class HomeAtendenteComponent implements OnInit {

  aparecer: number = 0
  localizacao: number = 0
  listaItens: number = 0
  confirmarRetirada: number = 0
  baixaDevolucoes: number = 0

  constructor() { }

  ngOnInit() {
  }

  aparecerModal() {
    this.aparecer = 1
  }

  fecharModal() {
    this.aparecer = 0
  }

  telaLocalizacoes() {
    this.listaItens = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 0
    this.localizacao = 1
  }

  telaListaItens() {
    this.localizacao = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 0
    this.listaItens = 1
  }

  telaConfirmarRetirada() {
    this.localizacao = 0
    this.listaItens = 0
    this.baixaDevolucoes = 0
    this.confirmarRetirada = 1
  }

  telaBaixaDevolucoes() {
    this.localizacao = 0
    this.listaItens = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 1

      let botaoAzul = document.querySelector('#baixaDevolucoes') as HTMLElement;
      botaoAzul.style.backgroundColor = '#0047B6';
      botaoAzul.style.color = '#ffff'

      let botaoSemAzul = document.querySelectorAll('.semAzul') as HTMLElement;
      botaoSemAzul.style.backgroundColor = '#ffff';
      botaoSemAzul.style.color = '#000';


  }

}
