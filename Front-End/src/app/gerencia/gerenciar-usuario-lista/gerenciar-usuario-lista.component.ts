import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-usuario-lista',
  templateUrl: './gerenciar-usuario-lista.component.html',
  styleUrls: ['./gerenciar-usuario-lista.component.scss']
})
export class GerenciarUsuarioListaComponent implements OnInit {
  @Input() listaUsuarios: any = [];
  listaFuncoes: any[] = [{ id: 1, funcao: "Professor" }, { id: 2, funcao: "Atendente1" }, { id: 3, funcao: "Atendente2" }, { id: 4, funcao: "Supervisor" }];
  // selectedValue;

  constructor() { }

  modalConfirmarEdicao = false;
  modalConfirmarExclusao = false;

  feedbackEdicaoUsuario = false;
  feedbackExclusaoUsuario = false;

  ngOnInit(): void {
  }

  // Função para abrir os modais de confirmação de edição e exclusão
  abrirModaisConfirmacao(numero: number) {
    switch (numero) {
      case 1:
        this.modalConfirmarEdicao = true;
        break;
      case 2:
        this.modalConfirmarExclusao = true;
        break;
    }
  }

  // Função para fechar os modais de confirmação de edição e exclusão
  fecharModaisConfirmacao(numero: number, resposta: boolean) {
    switch (numero) {
      case 1:
        this.modalConfirmarEdicao = false;
        if (resposta) {
          this.abrirModaisFeedback(1);
          //Editar usuário
        }
        break;
      case 2:
        this.modalConfirmarExclusao = false;
        if (resposta) {
          this.abrirModaisFeedback(2);
          //Excluir usuário
        }
        break;
    }
  }

  // Função para abrir os modais de feedback de edição e exclusão
  abrirModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackEdicaoUsuario = true;
        setTimeout(() => {
          this.feedbackEdicaoUsuario = false;
        }, 4000);
        break;
      case 2:
        this.feedbackExclusaoUsuario = true;
        setTimeout(() => {
          this.feedbackExclusaoUsuario = false;
        }, 4000);
        break;
    }
  }

  // Função para fechar os modais de feedback de edição e exclusão
  fecharModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackEdicaoUsuario = false;
        break;
      case 2:
        this.feedbackExclusaoUsuario = false;
        break;
    }
  }

  getFuncaoUsuario(idFuncao: Number) {
    console.log(idFuncao)
    let funcao = this.listaFuncoes.find(x => x.id == idFuncao);
    console.log(funcao)
    return funcao;
  }

}
