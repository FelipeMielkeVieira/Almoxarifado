import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-atendente',
  templateUrl: './home-atendente.component.html',
  styleUrls: ['./home-atendente.component.css']
})
export class HomeAtendenteComponent implements OnInit {

  aparecer: number = 0
  localizacao: number = 1
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

    let botaoAzul = document.querySelector('#localizacoes') as HTMLElement;
    botaoAzul.style.backgroundColor = '#0047B6';
    botaoAzul.style.color = '#ffff'
    
    let botaoSemAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
    botaoSemAzul1.style.backgroundColor = '#ffff';
    botaoSemAzul1.style.color = '#000'

    let botaoSemAzul2 = document.querySelector('#confirmarRetirada') as HTMLElement;
    botaoSemAzul2.style.backgroundColor = '#ffff';
    botaoSemAzul2.style.color = '#000';
    
    let botaoSemAzul3 = document.querySelector('#listaItens') as HTMLElement;
    botaoSemAzul3.style.backgroundColor = '#ffff';
    botaoSemAzul3.style.color = '#000';

  }

  telaListaItens() {
    this.localizacao = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 0
    this.listaItens = 1

    let botaoAzul = document.querySelector('#listaItens') as HTMLElement;
      botaoAzul.style.backgroundColor = '#0047B6';
      botaoAzul.style.color = '#ffff'
      
      let botaoSemAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
      botaoSemAzul1.style.backgroundColor = '#ffff';
      botaoSemAzul1.style.color = '#000'

      let botaoSemAzul2 = document.querySelector('#confirmarRetirada') as HTMLElement;
      botaoSemAzul2.style.backgroundColor = '#ffff';
      botaoSemAzul2.style.color = '#000';
      
      let botaoSemAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      botaoSemAzul3.style.backgroundColor = '#ffff';
      botaoSemAzul3.style.color = '#000';
  }

  telaConfirmarRetirada() {
    this.localizacao = 0
    this.listaItens = 0
    this.baixaDevolucoes = 0
    this.confirmarRetirada = 1

      let botaoAzul = document.querySelector('#confirmarRetirada') as HTMLElement;
      botaoAzul.style.backgroundColor = '#0047B6';
      botaoAzul.style.color = '#ffff'

      let botaoSemAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
      botaoSemAzul1.style.backgroundColor = '#ffff';
      botaoSemAzul1.style.color = '#000'

      let botaoSemAzul2 = document.querySelector('#listaItens') as HTMLElement;
      botaoSemAzul2.style.backgroundColor = '#ffff';
      botaoSemAzul2.style.color = '#000';
      
      let botaoSemAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      botaoSemAzul3.style.backgroundColor = '#ffff';
      botaoSemAzul3.style.color = '#000';
    
  }

  telaBaixaDevolucoes() {
    this.localizacao = 0
    this.listaItens = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 1

      let botaoAzul = document.querySelector('#baixaDevolucoes') as HTMLElement;
      botaoAzul.style.backgroundColor = '#0047B6';
      botaoAzul.style.color = '#ffff'

      let botaoSemAzul1 = document.querySelector('#confirmarRetirada') as HTMLElement;
      botaoSemAzul1.style.backgroundColor = '#ffff';
      botaoSemAzul1.style.color = '#000';

      let botaoSemAzul2 = document.querySelector('#listaItens') as HTMLElement;
      botaoSemAzul2.style.backgroundColor = '#ffff';
      botaoSemAzul2.style.color = '#000';

      let botaoSemAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      botaoSemAzul3.style.backgroundColor = '#ffff';
      botaoSemAzul3.style.color = '#000';
  }

}
