import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-historico-edicao',
  templateUrl: './modal-historico-edicao.component.html',
  styleUrls: ['./modal-historico-edicao.component.scss']
})
export class ModalHistoricoEdicaoComponent implements OnInit {

  constructor() {
  }

  @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: 0 };

  @Output() fecharModal = new EventEmitter<string>();

  ngOnInit() { }

  fecharModalHistorico() {
    this.fecharModal.emit("fechar");
  }

}