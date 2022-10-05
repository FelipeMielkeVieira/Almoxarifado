import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-confirmacaoExecucao",
  templateUrl: "./confirmacaoExecucao.component.html",
  styleUrls: ["./confirmacaoExecucao.component.css"],
})
export class ConfirmacaoExecucaoComponent implements OnInit {
  // Input numérico usado para definir o texto que aparece no modal
  //1 - Tem certeza de que deseja excluir a sacola?
  //2 - Tem certeza de que deseja reservar a sacola?
  @Input() tipoMensagemModal: number;

  //Output para fechar o modal na página de login ao clicar no X
  @Output() fecharModal = new EventEmitter<string>();
  fraseAlertaModal = "";

  constructor() {}

  // Usado para definir qual será a frase do alerta a partir do input numérico
  ngOnInit() {
    switch (this.tipoMensagemModal) {
      case 1:
        this.fraseAlertaModal = "Tem certeza que deseja excluir a sacola?";
        break;
      case 2:
        this.fraseAlertaModal = "Tem certeza de que deseja reservar a sacola?";
        break;
    }
  }

  fechar(numero: number) {
    this.fecharModal.emit(numero.toString());
  }
}
