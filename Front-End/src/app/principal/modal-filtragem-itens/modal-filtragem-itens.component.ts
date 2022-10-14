import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-filtragem-itens',
  templateUrl: './modal-filtragem-itens.component.html',
  styleUrls: ['./modal-filtragem-itens.component.scss']
})
export class ModalFiltragemItens implements OnInit {

  @Output() acaoFiltrar = new EventEmitter<string>();
  @Output() fecharModal = new EventEmitter<string>();
  @Input() filtrosAtuais: [boolean, boolean, boolean, boolean] = [false, false, false, false];

  constructor() {
  }

  ngOnInit() {

  }

  enviarFiltros() {
    this.acaoFiltrar.emit(JSON.stringify(this.filtrosAtuais));
  }

  limparFiltros() {
    this.filtrosAtuais = [false, false, false, false];
    this.fecharModalFiltro();
  }

  fecharModalFiltro() {
    this.fecharModal.emit(JSON.stringify(this.filtrosAtuais));
  }
}
