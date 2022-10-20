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


    @Input() sacola =  { id: 0, data_retirada: '0000-00-00', data_devolucao: '0000-00-00', usuario_email: '' };
    listaItens : any = [];

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

    verDetalhes() {
        localStorage.setItem("reserva", "2");
        if (localStorage.getItem('usuario') == '1') {
            this.router.navigate(['/professor/sacolas/' + this.id]);
        } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
            this.router.navigate(['/atendente/sacolas/' + this.id]);
        } else {
            this.router.navigate(['/supervisor/sacolas/' + this.id])
        }
    }

    abrirModalConfirmacao(numero: number) {
        let divPrincipal = document.createElement("div");
        divPrincipal.className = "divOpacidade";
        let containerSacola = document.querySelector("#containerSacola") as HTMLElement;
        containerSacola.appendChild(divPrincipal);
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
    reservaFeita: boolean = false;

    fecharModalConfirmacao(numero: number, confirmacao: any) {
        let divPrincipal = document.querySelector(".divOpacidade") as HTMLDivElement;
        divPrincipal.remove();
        switch (numero) {
            case 1:
                this.modalExcluir = false;
                if (confirmacao == '2') {
                    this.excluirSacola();
                }
                break;
            case 2:
                this.modalReservar = false;
                if (confirmacao == '2') {
                    this.finalizarReserva();
                }
                break;
        }
    }

    excluirSacola() {
        //Chamar back para excluir a sacola
    }

    finalizarReserva() {
        this.reservaFeita = true;
        setTimeout(() => {
            this.reservaFeita = false;
        }, 5000)
    }
    // <!-- --------------------------- FIM COMPONENTE FEEDBACK --------------------------- -->
}