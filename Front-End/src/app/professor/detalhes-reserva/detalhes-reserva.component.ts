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

    sacola: any;
    produtosSacola: any;
    dataSacola: any;

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

    cancelarReserva() {

    }

    excluirSacola() {

    }

    reservarItens() {
        
    }
}