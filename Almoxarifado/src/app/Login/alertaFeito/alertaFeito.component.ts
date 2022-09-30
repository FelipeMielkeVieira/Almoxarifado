import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-alertaFeito",
  templateUrl: "./alertaFeito.component.html",
  styleUrls: ["./alertaFeito.component.css"],
})
export class AlertaFeitoComponent implements OnInit {
  // Input numérico usado para definir o texto que aparece no modal e a cor da div inferior
  //1 - Sua solicitação de cadastro foi enviada para confirmação / Azul
  //2 - Sua redefinição de senha foi realizada com sucesso / Azul
  //3 - Usuário ou senha incorretos / Vermelho
  @Input() tipoMensagemModal: number;

  //Output para fechar o modal na página de login ao clicar no X
  @Output() fecharModal = new EventEmitter<string>();
  fraseAlertaModal = "";

  constructor() {}

  // Função para emitir o output e fechar o modal
  fechar() {
    this.fecharModal.emit("fechar");
  }

  // Usado para definir qual será a frase do alerta a partir do input numérico
  ngOnInit() {
    switch (this.tipoMensagemModal) {
      case 1:
        this.fraseAlertaModal =
          "Sua solicitação de cadastro foi enviada para confirmação";
        break;
      case 2:
        this.fraseAlertaModal =
          "Sua redefinição de senha foi realizada com sucesso";
        break;
      case 3:
        this.fraseAlertaModal = "Usuário ou senha incorretos";
        break;
    }
  }

  // Função usada na div inferior do modal para definir sua cor, dependendo do input recebido
  getClass() {
    //Classe da div com animação de cor (Vermelho / Azul) dependendo do input recebido
    if (this.tipoMensagemModal == 1 || this.tipoMensagemModal == 2) {
      return "animacaoCorAzul";
    } else {
      return "animacaoCorVermelha";
    }
  }
}
