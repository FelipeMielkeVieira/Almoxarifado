import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal-confirmacao',
    templateUrl: './modal-confirmacao.component.html',
    styleUrls: ['./modal-confirmacao.component.scss']
})
export class ModalConfirmacaoComponent implements OnInit {

    constructor() { }

    @Input() tipoTexto: number = 0;

    @Output() fecharModal = new EventEmitter<boolean>();

    ngOnInit() { }

    retornaTextoConfirmacao() {
        switch(this.tipoTexto) {
            case 1:
                return "Tem certeza que deseja excluir este item?";
            case 2:
                return "Tem certeza que deseja excluir essa sacola?";
            case 3:
                return "Tem certeza que deseja efetuar a reserva?";
            case 4:
                return "Tem certeza que deseja recusar este usuário?";
            case 5:
                return "Tem certeza que deseja aceitar este usuário?";
            case 6:
                return "Tem certeza que deseja atualizar este usuário?";
            case 7:
                return "Tem certeza que deseja excluir este usuário?";
            case 8:
                return "Tem certeza que deseja confirmar a retirada?";
            case 9:
                return "Tem certeza que deseja confirmar a devolução?";
        }
        return "";
    }

    fecharModalConfirmacao(resposta: boolean) {
        this.fecharModal.emit(resposta);
    }
}