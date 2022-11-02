import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userService';

@Component({
  selector: 'app-cadastrar-usuario-lista',
  templateUrl: './cadastrar-usuario-lista.component.html',
  styleUrls: ['./cadastrar-usuario-lista.component.scss']
})
export class CadastrarUsuarioListaComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() listaCadastros: any[] = [];
  usuarioAtual: any;

  modalConfirmarRecusa = false;
  modalConfirmarAceite = false;

  feedbackRecusaCadastro = false;
  feedbackAceiteCadastro = false;

  ngOnInit(): void {
  }

  // Função para abrir os modais de confirmação
  abrirModaisConfirmacao(numero: number, indexLista : number) {
    switch (numero) {
      case 1:
        this.modalConfirmarRecusa = true;
        break;
      case 2:
        this.modalConfirmarAceite = true;
        break;
    }
    this.usuarioAtual = this.listaCadastros[indexLista];
  }

  // Função ativada quando os modais de confirmação são fechados
  fecharModaisConfirmacao(numero: number, resposta: boolean) {
    switch (numero) {
      case 1:
        this.modalConfirmarRecusa = false;
        if (resposta) {
          this.recusarUsuario();
          this.abrirModaisFeedback(1);
        }
        break;
      case 2:
        this.modalConfirmarAceite = false;
        if (resposta) {
          this.aceitarUsuario();
          this.abrirModaisFeedback(2);
        }
    }
  }

  recusarUsuario() {
    this.userService.deleteUser(this.usuarioAtual.emailUsuario).subscribe(
      error => {console.log(error)}
    )
    this.removerUsuarioLista(this.usuarioAtual);
  }

  aceitarUsuario() {
    this.usuarioAtual.tipoUsuario = "PROFESSOR";
    this.userService.putUser(this.usuarioAtual, this.usuarioAtual.emailUsuario).subscribe(
      error => {console.log(error)}
    )
    this.removerUsuarioLista(this.usuarioAtual);
  }

  removerUsuarioLista(usuario: any) {
    for(let i = 0; i < this.listaCadastros.length; i++) {
      if(this.listaCadastros[i].emailUsuario == usuario.emailUsuario) {
        this.listaCadastros.splice(i, 1);
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
