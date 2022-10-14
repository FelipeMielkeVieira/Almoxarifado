import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta-feito',
  templateUrl: './alerta-feito.component.html',
  styleUrls: ['./alerta-feito.component.scss']
})
export class AlertaFeitoComponent implements OnInit {
  // Input numérico usado para definir o texto que aparece no modal e a cor da div inferior
  //1 - Sua solicitação de cadastro foi enviada para confirmação
  //2 - Sua redefinição de senha foi realizada com sucesso
  //3 - Usuário ou senha incorretos
  //4 - Email Inválido
  //5 - Código Inválido (Na redefinição de senha, código recebido por email)
  //6 - As senhas não conferem
  //7 - Preencha todos os Dados
  @Input() tipoMensagemModal: number | undefined;

  //Output para fechar o modal na página de login ao clicar no X
  @Output() fecharModal = new EventEmitter<string>();
  fraseAlertaModal = "";

  constructor() { }

  // Função para emitir o output e fechar o modal
  fechar() {
    this.fecharModal.emit("fechar");
  }

  // Usado para definir qual será a frase do alerta a partir do input numérico
  ngOnInit() {
    switch (this.tipoMensagemModal) {
      case 1:
        this.fraseAlertaModal = "Solicitação de cadastro enviada para confirmação!";
        break;
      case 2:
        this.fraseAlertaModal = "Sua redefinição de senha foi realizada com sucesso!";
        break;
      case 3:
        this.fraseAlertaModal = "Usuário ou senha incorretos!";
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
}
