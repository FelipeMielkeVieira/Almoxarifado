import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-editar-user',
  templateUrl: './modal-editar-user.component.html',
  styleUrls: ['./modal-editar-user.component.css'],
})
export class ModalEditarUserComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();

  trocarOlho1: boolean = false;
  olho1: number = 1;
  trocarOlho2: boolean = false;
  olho2: number = 1;

  usuarioNovo: string = "";
  senhaNova: string = "";
  confirmarSenha: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // *Fecha o modal de editar e o de configurações
  fechar() {
    this.fecharModal.emit("1");
  }

  // *Troca o olho do input de senha
  trocarOlho(input: number) {
    let input2: HTMLInputElement;

    switch (input) {
      case 1:
        input2 = document.querySelector('#inputSenha1') as HTMLInputElement;
        if (this.olho1 == 1) {
          this.olho1 = 0;
          this.trocarOlho1 = true;
          input2.type = 'text';
        } else {
          this.olho1 = 1;
          this.trocarOlho1 = false;
          input2.type = 'password';
        }
        break;
      case 2:
        input2 = document.querySelector('#inputSenha2') as HTMLInputElement;
        if (this.olho2 == 1) {
          this.olho2 = 0;
          this.trocarOlho2 = true;
          input2.type = 'text';
        } else {
          this.olho2 = 1;
          this.trocarOlho2 = false;
          input2.type = 'password';
        }
        break;
    }
  }

  // *Irá fechar o modal, salvando as alterações
  salvar() {
    this.fecharModal.emit("2");
    //Fazer fetch para salvar as atualizações
  }
}
