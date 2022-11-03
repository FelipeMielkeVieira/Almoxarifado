import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-reserva',
    templateUrl: './reserva.component.html',
    styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

    constructor() { }

    @Input() reserva = { id: 0, data_retirada: "", data_devolucao: "", status: "", usuario_email: "" }

    modalRetirada = false;
    modalDevolucao = false;

    feedbackRetiradaConfirmada = false;
    feedbackReservaCancelada = false;
    feedbackDevolucaoConfirmada = false;
    feedbackAtrasoDevolucao = false;

    ngOnInit() {
    }

    // Função para abrir / fechar o modal de detalhes (pode ser devolução ou retirada)
    mudarModalDetalhes(event: string) {
        console.log(event)
        if (this.reserva.status == "AGUARDANDO_RETIRADA") {
            this.modalRetirada = !this.modalRetirada;
            this.toggleOverflow();
            if (event == "retiradaFeita") {
                this.abrirModaisFeedback(1);
            }
            if (event == "reservaCancelada") {
                this.abrirModaisFeedback(2);
            }
        } else {
            this.modalDevolucao = !this.modalDevolucao;
            this.toggleOverflow();
            if(event == "baixa") {
                this.abrirModaisFeedback(3);
            }
            if(event == "atraso") {
                this.abrirModaisFeedback(4);
            }
        }
    }

    toggleOverflow() {
        document.documentElement.style.overflow == "auto" ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto";
      }

    // Função para abrir os modais de feedback
    abrirModaisFeedback(event: number) {
        switch (event) {
            case 1:
                this.feedbackRetiradaConfirmada = true;
                setTimeout(() => {
                    this.feedbackRetiradaConfirmada = false;
                }, 4000);
                break;
            case 2:
                this.feedbackReservaCancelada = true;
                setTimeout(() => {
                    this.feedbackReservaCancelada = false;
                }, 4000);
                break;
            case 3:
                this.feedbackDevolucaoConfirmada = true;
                setTimeout(() => {
                    this.feedbackDevolucaoConfirmada = false;
                }, 4000);
                break;
            case 4:
                this.feedbackAtrasoDevolucao = true;
                setTimeout(() => {
                    this.feedbackAtrasoDevolucao = false;
                }, 4000);
        }
    }

    // Função para fechar os modais de feedback
    fecharModaisFeedback(event: number) {
        switch (event) {
            case 1:
                this.feedbackRetiradaConfirmada = false;
                break;
            case 2:
                this.feedbackReservaCancelada = false;
                break;
            case 3:
                this.feedbackDevolucaoConfirmada = false;
                break;
            case 4:
                this.feedbackAtrasoDevolucao = false;
                break;
        }
    }

}