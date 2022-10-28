import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
    selector: 'app-detalhes-reserva',
    templateUrl: './detalhes-reserva.component.html',
    styleUrls: ['./detalhes-reserva.component.scss']
})
export class DetalhesReservaComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute, private service: UsersService) {
        this.tipoUsuario = parseInt(localStorage.getItem("usuario") || "0");
        if (parseInt(localStorage.getItem('reserva') || "0") != 1) {
            this.sacola = this.service.retornaSacola(parseInt(this.route.snapshot.paramMap.get('id') || "0"));
            this.produtosSacola = this.service.retornaProdutosSacola(this.sacola.id);
        } else {
            this.sacola = this.service.retornaReserva(parseInt(this.route.snapshot.paramMap.get('id') || "0"));
            this.produtosSacola = this.service.retornaProdutosReserva(this.sacola.id);
            this.reservaFeita = true;
        }
        // this.dataSacola = new Date(this.sacola.data_devolucao);
    }

    // Variável para determinar se o componente é de uma reserva ou sacola
    reservaFeita: boolean = false;

    tipoUsuario: number;
    professorReserva: string = "";

    modalExcluir: boolean = false;
    modalReservar: boolean = false;

    modalCancelarReserva: boolean = false;
    cancelarReservaBotao: boolean = false;

    feedbackCancelarReserva: boolean = false;
    feedbackReservaFeita: boolean = false;
    feedbackExclusaoSacola: boolean = false;

    sacola: any;
    produtosSacola: any;
    dataSacola: any;
    dataAtual = new Date();

    calendarioRetirada = false;
    calendarioDevolucao = false;

    ngOnInit() {
    }

    // Função para ir para a página especificada pelo parâmetro
    navegacao(url: string) {
        this.router.navigate([url]);
    }

    // Função para alterar a quantidade de um produto, recebendo um parâmetro opção (1 - diminuir | 2 - adicionar)
    alterarQtdProduto(opcao: number, index: number) {
        switch (opcao) {
            case 1:
                if (this.produtosSacola[index].qtd_atual > 1) {
                    this.produtosSacola[index].qtd_atual--;
                }
                break;
            case 2:
                if (!((this.produtosSacola[index].qtd_atual + 1) > this.produtosSacola[index].quantidade)) {
                    this.produtosSacola[index].qtd_atual++;
                }
        }
    }

    formatarData(data: string) {
        return new Date(data).toLocaleString();
    }

    abrirModalConfirmacao(numero: number) {
        switch (numero) {
            case 1:
                this.modalExcluir = true;
                break;
            case 2:
                this.modalReservar = true;
                break;
            case 3:
                this.modalCancelarReserva = true;
                break;
        }
    }

    fecharModalConfirmacao(numero: number, confirmacao: any) {
        switch (numero) {
            case 1:
                this.modalExcluir = false;
                if (confirmacao) {
                    localStorage.setItem('excluir', '1');
                    this.excluirSacola();
                    this.enviarFeedback();
                }
                break;
            case 2:
                this.modalReservar = false;
                if (confirmacao) {
                    localStorage.setItem('reservar', '1');
                    this.finalizarReserva();
                    this.enviarFeedback();
                }
                break;
            case 3: //  Fazer feedback de reserva cancelada
                this.modalCancelarReserva = false;
                if (confirmacao) {
                    localStorage.setItem('cancelar', '1');
                    this.cancelarReserva();
                    this.enviarFeedback();
                }
                break;
        }
    }

    // Função para enviar para feedback para a página de home
    enviarFeedback() {
        this.navegacaoTipo();
    }

    navegacaoTipo() {
        if (localStorage.getItem('usuario') == '1') {
            this.router.navigate(['/professor']);
        } else if (
            localStorage.getItem('usuario') == '2' ||
            localStorage.getItem('usuario') == '3'
        ) {
            this.router.navigate(['/atendente']);
        } else if (localStorage.getItem('usuario') == '4') {
            this.router.navigate(['/supervisor']);
        }
    }

    abrirCalendario(numero: number) {
        if (!this.reservaFeita) {
            if (numero == 1) {
                if (!this.calendarioRetirada) {
                    this.calendarioDevolucao = false;
                    this.calendarioRetirada = true;
                } else {
                    this.calendarioRetirada = false;
                }
            } else {
                if (!this.calendarioDevolucao) {
                    this.calendarioRetirada = false;
                    this.calendarioDevolucao = true;
                } else {
                    this.calendarioDevolucao = false;
                }
            }
        }
    }

    salvarData(evento: any, numero: number) {
        if (numero == 1) {
            this.calendarioRetirada = false;
            this.sacola.data_retirada = evento;
        } else {
            this.calendarioDevolucao = false;
            this.sacola.data_devolucao = evento;
        }
    }

    finalizarReserva() {
        //Chamar back para fazer reserva
    }

    cancelarReserva() {

    }

    excluirSacola() {

    }

    reservarItens() {

    }
}