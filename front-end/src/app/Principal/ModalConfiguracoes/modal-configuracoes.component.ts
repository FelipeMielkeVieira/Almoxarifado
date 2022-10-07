import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-configuracoes',
  templateUrl: './modal-configuracoes.component.html',
  styleUrls: ['./modal-configuracoes.component.css'],
})
export class ModalConfiguracoesComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();

  fonteAtual: number = 3;

  constructor() {}

  // *Pega o email e nome do usuario logado
  ngOnInit() {}

  // *Fecha o modal de editar e o de configurações
  fechar() {
    this.fecharModal.emit();
  }

  // *Troca a fonte do site
  salvarConfig() {
    this.fechar();
    if (this.fonteAtual == 1) {
      document.documentElement.style.setProperty(
        '--font-size--verysmall',
        '6px'
      );
      document.documentElement.style.setProperty('--font-size--small', '10px');
      document.documentElement.style.setProperty(
        '--font-size--default',
        '12px'
      );
      document.documentElement.style.setProperty('--font-size--medium', '14px');
      document.documentElement.style.setProperty('--font-size--big', '16px');
      document.documentElement.style.setProperty(
        '--font-size--verybig',
        '20px'
      );
      document.documentElement.style.setProperty('--font-size--giant', '26px');
      document.documentElement.style.setProperty(
        '--font-size--extreme',
        '36px'
      );
    }
    if (this.fonteAtual == 2) {
      document.documentElement.style.setProperty(
        '--font-size--verysmall',
        '8px'
      );
      document.documentElement.style.setProperty('--font-size--small', '12px');
      document.documentElement.style.setProperty(
        '--font-size--default',
        '14px'
      );
      document.documentElement.style.setProperty('--font-size--medium', '16px');
      document.documentElement.style.setProperty('--font-size--big', '18px');
      document.documentElement.style.setProperty(
        '--font-size--verybig',
        '22px'
      );
      document.documentElement.style.setProperty('--font-size--giant', '28px');
      document.documentElement.style.setProperty(
        '--font-size--extreme',
        '38px'
      );
    }
    if (this.fonteAtual == 3) {
      document.documentElement.style.setProperty(
        '--font-size--verysmall',
        '10px'
      );
      document.documentElement.style.setProperty('--font-size--small', '14px');
      document.documentElement.style.setProperty(
        '--font-size--default',
        '16px'
      );
      document.documentElement.style.setProperty('--font-size--medium', '18px');
      document.documentElement.style.setProperty('--font-size--big', '20px');
      document.documentElement.style.setProperty(
        '--font-size--verybig',
        '24px'
      );
      document.documentElement.style.setProperty('--font-size--giant', '30px');
      document.documentElement.style.setProperty(
        '--font-size--extreme',
        '40px'
      );
    }
    if (this.fonteAtual == 4) {
      document.documentElement.style.setProperty(
        '--font-size--verysmall',
        '12px'
      );
      document.documentElement.style.setProperty('--font-size--small', '16px');
      document.documentElement.style.setProperty(
        '--font-size--default',
        '18px'
      );
      document.documentElement.style.setProperty('--font-size--medium', '20px');
      document.documentElement.style.setProperty('--font-size--big', '22px');
      document.documentElement.style.setProperty(
        '--font-size--verybig',
        '26px'
      );
      document.documentElement.style.setProperty('--font-size--giant', '32px');
      document.documentElement.style.setProperty(
        '--font-size--extreme',
        '42px'
      );
    }
    if (this.fonteAtual == 5) {
      document.documentElement.style.setProperty(
        '--font-size--verysmall',
        '14px'
      );
      document.documentElement.style.setProperty('--font-size--small', '18px');
      document.documentElement.style.setProperty(
        '--font-size--default',
        '20px'
      );
      document.documentElement.style.setProperty('--font-size--medium', '22px');
      document.documentElement.style.setProperty('--font-size--big', '24px');
      document.documentElement.style.setProperty(
        '--font-size--verybig',
        '28px'
      );
      document.documentElement.style.setProperty('--font-size--giant', '34px');
      document.documentElement.style.setProperty(
        '--font-size--extreme',
        '44px'
      );
    }
  }
}
