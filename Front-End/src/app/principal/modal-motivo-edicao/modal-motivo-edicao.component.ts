import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-motivo-edicao',
  templateUrl: './modal-motivo-edicao.component.html',
  styleUrls: ['./modal-motivo-edicao.component.scss']
})
export class ModalMotivoEdicaoComponent implements OnInit {

  constructor() {
  }

  @Output() fecharModal = new EventEmitter<string>();

  ngOnInit() {

  }

  fecharModalMotivo() {

  }

  editarQuantidade() {

  }
}
