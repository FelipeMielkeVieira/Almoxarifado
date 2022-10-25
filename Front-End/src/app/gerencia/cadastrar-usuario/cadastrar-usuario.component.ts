import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor() { }

  @Input() listaEmBloco: boolean = false;

  modalConfirmarRecusa = false;
  modalConfirmarAceite = false;

  feedbackRecusaCadastro = false;
  feedbackAceiteCadastro = false;

  ngOnInit(): void {
  }

  // Função que retorna a classe de um elemento usada em ngClass (para visualização lista / bloco)
  retornaClasseElemento(numero: number) {
    switch (numero) {
      case 1:
        if (this.listaEmBloco) {
          return 'containerUsuario';
        }
        return "containerUsuarioLista";
    }
    return "";
  }

  // Função para abrir os modais de confirmação
  abrirModaisConfirmacao(numero: number) {
    switch (numero) {
      case 1:
        this.modalConfirmarRecusa = true;
        break;
      case 2:
        this.modalConfirmarAceite = true;
        break;
    }
  }

  // Função ativada quando os modais de confirmação são fechados
  fecharModaisConfirmacao(numero: number, resposta: boolean) {
    switch (numero) {
      case 1:
        this.modalConfirmarRecusa = false;
        if (resposta) {
          // Recusar usuário
          this.abrirModaisFeedback(1);
        }
        break;
      case 2:
        this.modalConfirmarAceite = false;
        if (resposta) {
          // Aceitar usuário
          this.abrirModaisFeedback(2);
        }
    }
  }

  // Função para abrir os modais de feedback após a confirmação de recusa ou aceitação
  abrirModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackRecusaCadastro = true;
        setTimeout(() => {
          this.feedbackRecusaCadastro = false;
        }, 4000);
        break;
      case 2:
        this.feedbackAceiteCadastro = true;
        setTimeout(() => {
          this.feedbackAceiteCadastro = false;
        }, 4000);
    }
  }

  // Função para fechar os modais de feedback após confirmações
  fecharModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackRecusaCadastro = false;
        break;
      case 2:
        this.feedbackAceiteCadastro = false;
        break;
    }
  }

}
