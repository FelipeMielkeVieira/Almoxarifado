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
  //4 - Email Inválido / Vermelho
  //5 - Código Inválido (Na redefinição de senha, código recebido por email) / Vermelho
  //6 - As senhas não conferem / Vermelho
  //7 - Preencha todos os Dados / Vermelho
  @Input() tipoMensagemModal: number | undefined;

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
      case 4:
        this.fraseAlertaModal = "Email Inválido!";
        break;
      case 5:
        this.fraseAlertaModal = "Código Incorreto!";
        break;
      case 6:
        this.fraseAlertaModal = "As senhas não conferem!";
        break;
      case 7:
        this.fraseAlertaModal = "Preencha todos os Dados!";
        break;
    }
  }

  // Função usada na div inferior do modal para definir sua cor, dependendo do input recebido
  getClass() {
    //Classe da div com animação de cor (Vermelho / Azul) dependendo do input recebido
    switch (this.tipoMensagemModal) {
      case 1:
        return "animacaoCorAzul";
      case 2:
        return "animacaoCorAzul";
      case 3:
        return "animacaoCorVermelha";
      case 4:
        return "animacaoCorVermelha";
      case 5:
        return "animacaoCorVermelha";
      case 6:
        return "animacaoCorVermelha";
      case 7:
        return "animacaoCorVermelha";
    }
    return "";
  }
}