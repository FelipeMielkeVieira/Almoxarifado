import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-retirada-reserva',
    templateUrl: './retirada-reserva.component.html',
    styleUrls: ['./retirada-reserva.component.scss']
})
export class RetiradaReservaComponent implements OnInit {

    constructor() { }

    @Input() reserva = { id: 0, data_retirada: "", data_devolucao: "", status: "", usuario_email: "" }

    @Output() fecharModal = new EventEmitter<string>();

    confirmacaoRetirada = false;

    modalCancelarReserva = false;

    ngOnInit() {
    }

    // Função que fecha o modal da reserva, passando um parâmetro para uso ou não do feedback
    fecharModalDetalhes(resposta: string) {
        this.fecharModal.emit(resposta);
    }

    // Função para fechar o modal caso uma confirmação de retirada seja feita
    confirmacaoReserva(event: boolean) {
        this.confirmacaoRetirada = false;
        if(event) {
            this.fecharModalDetalhes("retiradaFeita");
        }
    }

    // Função para abrir o modal de confirmação para confirmar a retirada
    confirmarReserva() {
        this.confirmacaoRetirada = true;
    }

    // Função para abrir modais de ocorrências
    abrirModaisOcorrencias(numero: number) {
        switch(numero) {
            case 1:
                this.modalCancelarReserva = true;
                break;
        }
    }

    // Função para fechar os modais de ocorrências
    fecharModaisOcorrencias(numero: number, event: string) {
        switch(numero) {
            case 1:
                this.modalCancelarReserva = false;
                break;
        }
    }

}