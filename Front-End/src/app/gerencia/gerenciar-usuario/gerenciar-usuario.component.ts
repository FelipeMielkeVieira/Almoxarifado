import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/userService';

@Component({
  selector: 'app-gerenciar-usuario',
  templateUrl: './gerenciar-usuario.component.html',
  styleUrls: ['./gerenciar-usuario.component.scss']
})
export class GerenciarUsuarioComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() usuario: any;
  @Output() removerLista = new EventEmitter<string>();

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
          this.atualizarUsuario();
        }
        break;
      case 2:
        this.modalConfirmarExclusao = false;
        if (resposta) {
          this.abrirModaisFeedback(2);
          this.excluirUsuario();
          this.removerLista.emit(this.usuario.emailUsuario);
        }
        break;
    }
  }

  excluirUsuario() {
    this.userService.deleteUser(this.usuario.emailUsuario).subscribe(
      error => {console.log(error)}
    )
  }

  atualizarUsuario() {
    this.userService.putUser(this.usuario, this.usuario.emailUsuario).subscribe(
      error => {console.log(error)}
    )
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
