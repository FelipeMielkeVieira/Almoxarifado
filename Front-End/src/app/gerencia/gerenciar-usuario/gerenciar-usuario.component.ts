import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-usuario',
  templateUrl: './gerenciar-usuario.component.html',
  styleUrls: ['./gerenciar-usuario.component.scss']
})
export class GerenciarUsuarioComponent implements OnInit {

  constructor() { }

  modalConfirmarEdicao = false;
  modalConfirmarExclusao = false;

  ngOnInit(): void {
  }

  // Função para fechar os modais de confirmação de edição e exclusão
  fecharModaisConfirmacao(numero: number, resposta: boolean) {
    switch (numero) {
      case 1:
        this.modalConfirmarEdicao = false;
        if (resposta) {

        }
        break;
      case 2:
        this.modalConfirmarExclusao = false;
        if (resposta) {

        }
        break;
    }
  }

}
