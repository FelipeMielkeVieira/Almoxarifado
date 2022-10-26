import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-devolucao-reserva',
    templateUrl: './devolucao-reserva.component.html',
    styleUrls: ['./devolucao-reserva.component.scss']
})
export class DevolucaoReservaComponent implements OnInit {

    constructor() { }

    @Input() reserva = { id: 0, data_retirada: "", data_devolucao: "", status: "", usuario_email: "" }

    @Output() fecharModal = new EventEmitter<string>();

    naoDevolvido = false;

    modalConfirmacaoDevolucao = false;
    modalAlertarAtraso = false;
    modalInformarDefeito = false;

    ngOnInit() {
    }

    fecharModalDevolucao(texto: string) {
        this.fecharModal.emit(texto);
    }

    selecionarNaoDevolucao() {
        this.naoDevolvido = !this.naoDevolvido;
        if (this.naoDevolvido) {
            (document.querySelector("#botaoNaoDevolvido") as HTMLButtonElement).style.backgroundColor = "red";
        } else {
            (document.querySelector("#botaoNaoDevolvido") as HTMLButtonElement).style.backgroundColor = "gray";
        }
    }

    darBaixaReserva() {
        this.modalConfirmacaoDevolucao = true;
    }

    // Função para fechar o modal de confirmação de devolução e efetuar a devolução da reserva
    confirmacaoDevolucao(event: boolean) {
        this.modalConfirmacaoDevolucao = false;
        if (event) {
            // Efetuar baixa
            this.fecharModalDevolucao('baixa');
        }
    }

    // Função para fechar os modais de ocorrências
    fecharModaisOcorrencias(numero: number, resposta: string) {
        switch(numero) {
            case 1:
                this.modalAlertarAtraso = false;
                if(resposta == "salvar") {
                    this.fecharModalDevolucao("atraso");
                }
                break;
            case 2:
                this.modalInformarDefeito = false;
                if(resposta == "salvar") {
                    // Salvar defeito do item
                }
                break;
        }
    }
}