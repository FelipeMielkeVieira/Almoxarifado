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

    // <!-- ------------------------------- GERAL ----------------------------------- -->
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
}