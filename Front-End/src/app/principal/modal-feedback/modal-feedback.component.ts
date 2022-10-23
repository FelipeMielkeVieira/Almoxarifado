import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.scss']
})
export class ModalFeedback implements OnInit {

  @Input() tipoFeedback: number = 0;

  @Output() fecharModal = new EventEmitter();

  constructor() {
  }

  ngOnInit() { }

  retornaTextoFeedback() {
    switch (this.tipoFeedback) {
      case 1:
        return "Reserva efetuada com sucesso!";
      case 2:
        return "Item adicionado à sacola!";
      case 3:
        return "Item editado com sucesso!";
      case 4:
        return "Item removido com sucesso!";
      case 5:
        return "Sacola excluída com sucesso!";
    }
    return "";
  }

  fecharModalFeedback() {
    this.fecharModal.emit();
  }
}