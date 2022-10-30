import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ClassificacaoService } from 'src/app/service/classificacaoService';


@Component({
    selector: 'app-gerenciar-filtros',
    templateUrl: './gerenciar-filtros.component.html',
    styleUrls: ['./gerenciar-filtros.component.scss']
})
export class GerenciarFiltrosComponent implements OnInit {

    constructor(private classificacaoService: ClassificacaoService) {
    }

    @Input() listaFiltros: any[] = [];

    @Output() fecharModal = new EventEmitter<boolean>();

    modalConfirmarAlteracoes: boolean = false;
    novoFiltro: string = "";

    listaFiltrosExcluidos: any[] = [];
    listaFiltrosAdicionados: any[] = [];

    ngOnInit() {
    }

    // *Irá fechar o modal de gerenciar filtro
    fecharModalFiltro(resposta: boolean) {
        this.fecharModal.emit(resposta);
    }

    // *Irá abrir o modal de confirmação de edição das alterações
    salvar() {
        this.modalConfirmarAlteracoes = true;
    }

    // Função para fechar o modal de confirmação, enviando sua resposta
    fecharModaisConfirmacao(resposta: boolean) {
        if (resposta) {
            this.salvarAlteracoes();
        }
        this.fecharModal.emit(resposta);
    }

    // Função para remover um filtro que tenha sido adicionado e não salvo
    removerFiltroAdicionado(nome: string) {
        for (let i = 0; i < this.listaFiltrosAdicionados.length; i++) {
            if (this.listaFiltrosAdicionados[i].classificacao == nome) {
                this.listaFiltrosAdicionados.splice(i, 1);
            }
        }
    }

    // Função para remover um filtro salvo
    excluirFiltro(index: number) {
        if (this.listaFiltros[index].id) {
            this.listaFiltrosExcluidos.push(this.listaFiltros.splice(index, 1)[0]);
        } else {
            this.removerFiltroAdicionado(this.listaFiltros[index].classificacao);
            this.listaFiltros.splice(index, 1);
        }
    }

    // Função para adicionar um novo filtro à lista
    adicionarFiltro() {
        if (this.novoFiltro) {
            let objetoFiltro = { classificacao: this.novoFiltro };
            this.listaFiltrosAdicionados.push(objetoFiltro);
            this.listaFiltros.push(objetoFiltro);
        }
    }

    // Função para salvar novas alterações
    salvarAlteracoes() {
        if (this.listaFiltrosAdicionados.length > 0) {
            this.salvarAdicao();
        }
        if (this.listaFiltrosExcluidos.length > 0) {
            this.salvarExclusao();
        }
    }

    // Função para salvar os filtros novos no banco
    salvarAdicao() {
        for (const filtro of this.listaFiltrosAdicionados) {
            this.classificacaoService.postFiltros(filtro).subscribe(
                error => { console.log(error) }
            )
        }
    }

    // Função para salvar a exclusão de filtros no banco
    salvarExclusao() {
        for (const filtro of this.listaFiltrosExcluidos) {
            this.classificacaoService.deleteFiltros(filtro.id).subscribe(
                error => { console.log(error) }
            )
        }
    }

}
