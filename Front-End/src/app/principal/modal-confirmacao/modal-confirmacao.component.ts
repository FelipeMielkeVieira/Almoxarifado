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
        switch (this.tipoTexto) {
            case 1:
                return "Deseja excluir este item?";
            case 2:
                return "Deseja excluir essa sacola?";
            case 3:
                return "Deseja efetuar a reserva?";
            case 4:
                return "Deseja recusar este usuário?";
            case 5:
                return "Deseja aceitar este usuário?";
            case 6:
                return "Deseja atualizar este usuário?";
            case 7:
                return "Deseja excluir este usuário?";
            case 8:
                return "Deseja confirmar a retirada?";
            case 9:
                return "Deseja confirmar a devolução?";
            case 10:
                return "Deseja excluir a classificação?"
            case 11:
                return "Deseja salvar alterações?"
            case 12:
                return "Deseja excluir as localizações?"
        }
        return "";
    }

    fecharModalConfirmacao(resposta: boolean) {
        this.fecharModal.emit(resposta);
    }
}