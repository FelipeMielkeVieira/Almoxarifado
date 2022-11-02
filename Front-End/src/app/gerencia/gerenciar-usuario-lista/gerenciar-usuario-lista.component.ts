import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userService';

@Component({
  selector: 'app-gerenciar-usuario-lista',
  templateUrl: './gerenciar-usuario-lista.component.html',
  styleUrls: ['./gerenciar-usuario-lista.component.scss']
})
export class GerenciarUsuarioListaComponent implements OnInit {
  @Input() listaUsuarios: any = [];
  usuarioAtual: any;

  constructor(private userService: UserService) { }

  modalConfirmarEdicao = false;
  modalConfirmarExclusao = false;

  feedbackEdicaoUsuario = false;
  feedbackExclusaoUsuario = false;

  ngOnInit(): void {
  }

  // Função para abrir os modais de confirmação de edição e exclusão
  abrirModaisConfirmacao(numero: number, usuario: any) {
    switch (numero) {
      case 1:
        this.modalConfirmarEdicao = true;
        break;
      case 2:
        this.modalConfirmarExclusao = true;
        break;
    }
    this.usuarioAtual = usuario;
  }

  // Função para fechar os modais de confirmação de edição e exclusão
  fecharModaisConfirmacao(numero: number, resposta: boolean) {
    switch (numero) {
      case 1:
        this.modalConfirmarEdicao = false;
        if (resposta) {
          this.abrirModaisFeedback(1);
          this.atualizarUsuario();
        }
        break;
      case 2:
        this.modalConfirmarExclusao = false;
        if (resposta) {
          this.abrirModaisFeedback(2);
          this.excluirUsuario();
          this.removerUsuarioLista();
        }
        break;
    }
  }

  atualizarUsuario() {
    this.userService.putUser(this.usuarioAtual, this.usuarioAtual.emailUsuario).subscribe(
      error => {console.log(error)}
    )
  }

  excluirUsuario() {
    this.userService.deleteUser(this.usuarioAtual.emailUsuario).subscribe(
      error => {console.log(error)}
    )
  }

  removerUsuarioLista() {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (this.usuarioAtual.emailUsuario == this.listaUsuarios[i].emailUsuario) {
        this.listaUsuarios.splice(i, 1);
      }
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

}
