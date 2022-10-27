import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
    selector: 'app-sacola',
    templateUrl: './sacola.component.html',
    styleUrls: ['./sacola.component.scss']
})
export class SacolaComponent implements OnInit {

    constructor(private router: Router, private service: UsersService) { }


    @Input() sacola = { id: 0, data_retirada: '0000-00-00', data_devolucao: '0000-00-00', usuario_email: '' };
    listaItens: any = [];

    ngOnInit() {
        this.listaItens = this.service.retornaProdutosSacola(this.sacola.id);
    }

    // <!-- --------------------------------------- COMPONENTE DO CALENDARIO  --------------------------------------- -->
    calendarioAberto1: number = 0;
    calendarioAberto2: number = 0;

    salvarData1(event: any) {
        this.calendarioAberto1 = 0;
        this.sacola.data_retirada = event;
    }

    salvarData2(event: any) {
        this.calendarioAberto2 = 0;
        this.sacola.data_devolucao = event;
    }
    // <!-- --------------------------------------- FIM COMPONENTE DO CALENDARIO  --------------------------------------- -->

    /* <!-- --------------------------------------- CONTEÚDO DA SACOLA  --------------------------------------- --> */
    listaProfessores = this.buscarProfessores();
    id: number = 1;
    modalReservar: boolean = false;
    modalExcluir: boolean = false;

    feedbackReservaFeita = false;
    feedbackExclusaoSacola = false;
    reservaFeita: boolean = false;

    abrirCalendario1() {
        this.calendarioAberto2 = 0;
        if (this.calendarioAberto1 == 0) {
            this.calendarioAberto1 = 1;
        } else {
            this.calendarioAberto1 = 0;
        }
    }

    formatarData(data: string) {
        return new Date(data).toLocaleString();
    }

    abrirCalendario2() {
        this.calendarioAberto1 = 0;
        if (this.calendarioAberto2 == 0) {
            this.calendarioAberto2 = 1;
        } else {
            this.calendarioAberto2 = 0;
        }
    }

    atendente() {
        let usuario = parseInt(localStorage.getItem("usuario") || "");
        if (usuario == 2 || usuario == 3)
            return true;
        return false;
    }

    buscarProfessores() {
        return [{ id: 1, nome: "Professor 1" }, { id: 2, nome: "Professor 2" },
        { id: 3, nome: "Professor 3" }, { id: 4, nome: "Professor 4" },
        { id: 5, nome: "Professor 5" }];
    }

    verDetalhes(event: any) {
        if(event.target.className != "botao" && event.target.localName != "span") {
            localStorage.setItem("reserva", "2");
            if (localStorage.getItem('usuario') == '1') {
                this.router.navigate(['/professor/sacolas/' + this.id]);
            } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
                this.router.navigate(['/atendente/sacolas/' + this.id]);
            } else {
                this.router.navigate(['/supervisor/sacolas/' + this.id])
            }
        }
    }

    abrirModalConfirmacao(numero: number) {
        document.documentElement.style.overflow = 'hidden';
        switch (numero) {
            case 1:
                this.modalExcluir = true;
                break;
            case 2:
                this.modalReservar = true;
                break;
        }
    }
    /* <!-- --------------------------------------- FIM CONTEÚDO DA SACOLA  --------------------------------------- --> */

    // <!-- --------------------------- COMPONENTE FEEDBACK --------------------------- -->

    fecharModalConfirmacao(numero: number, confirmacao: any) {
        switch (numero) {
            case 1:
                this.modalExcluir = false;
                if (confirmacao) {
                    this.excluirSacola();
                    this.abrirModalFeedback(2);
                }
                break;
            case 2:
                this.modalReservar = false;
                if (confirmacao) {
                    this.finalizarReserva();
                    this.abrirModalFeedback(1);
                }
                break;
        }
        document.documentElement.style.overflow = 'auto';
    }

    excluirSacola() {
        //Chamar back para excluir a sacola
    }

    finalizarReserva() {
        //Chamar back para fazer reserva
    }

    abrirModalFeedback(numero: number) {
        switch (numero) {
            case 1:
                this.feedbackReservaFeita = true;
                setTimeout(() => {
                    this.feedbackReservaFeita = false;
                }, 4000);
                break;
            case 2:
                this.feedbackExclusaoSacola = true;
                setTimeout(() => {
                    this.feedbackExclusaoSacola = false;
                }, 4000);
                break;
        }
    }

    fecharModalFeedback(numero: number) {
        switch (numero) {
            case 1:
                this.feedbackReservaFeita = false;
                break;
            case 2:
                this.feedbackExclusaoSacola = false;
                break;
        }
    }
    // <!-- --------------------------- FIM COMPONENTE FEEDBACK --------------------------- -->
}