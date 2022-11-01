import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/userService';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() listaEmBloco: boolean = false;
  @Input() usuario: any;
  @Output() removerLista = new EventEmitter<string>();

  modalConfirmarRecusa = false;
  modalConfirmarAceite = false;

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
          this.recusarUsuario();
        }
        break;
      case 2:
        this.modalConfirmarAceite = false;
        if (resposta) {
          this.aceitarUsuario();
        }
    }
  }

  recusarUsuario() {
    this.userService.deleteUser(this.usuario.emailUsuario).subscribe(
      error => {console.log(error)}
    )
    this.removerLista.emit("2*" + this.usuario.emailUsuario);
  }

  aceitarUsuario() {
    this.usuario.tipoUsuario = "PROFESSOR";
    this.userService.putUser(this.usuario, this.usuario.emailUsuario).subscribe(
      error => {console.log(error)}
    )
    this.removerLista.emit("1*" + this.usuario.emailUsuario);
  }

}
