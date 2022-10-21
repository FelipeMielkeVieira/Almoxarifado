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
        }
        return "";
    }

    fecharModalConfirmacao(resposta: boolean) {
        this.fecharModal.emit(resposta);
    }
}