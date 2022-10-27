import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-ordenar',
  templateUrl: './modal-ordenar.component.html',
  styleUrls: ['./modal-ordenar.component.scss']
})
export class ModalOrdernar implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();
  @Output() ordenarItens = new EventEmitter<string>();
  @Input() listaOrdenacoes = [false, false, false, false];

  constructor() {
  }

  ngOnInit() {

  }

  ordenar(numero: number) {
    switch (numero) {
      case 0:
        if (this.listaOrdenacoes[0]) {
          this.listaOrdenacoes[1] = false;
          this.listaOrdenacoes[2] = false;
          this.listaOrdenacoes[3] = false;
        }
        break;
      case 1:
        if (this.listaOrdenacoes[1]) {
          this.listaOrdenacoes[0] = false;
          this.listaOrdenacoes[2] = false;
          this.listaOrdenacoes[3] = false;
        }
        break;
      case 2:
        if (this.listaOrdenacoes[2]) {
          this.listaOrdenacoes[0] = false;
          this.listaOrdenacoes[1] = false;
          this.listaOrdenacoes[3] = false;
        }
        break;
      case 3:
        if (this.listaOrdenacoes[3]) {
          this.listaOrdenacoes[0] = false;
          this.listaOrdenacoes[1] = false;
          this.listaOrdenacoes[2] = false;
        }
        break;
    }
    this.ordenarItens.emit(JSON.stringify(this.listaOrdenacoes));
  }

  limparOrdenacao() {
    this.listaOrdenacoes = [false, false, false, false];
    this.fecharModal.emit('fechar');
    this.ordenarItens.emit(JSON.stringify(this.listaOrdenacoes));
  }
}
