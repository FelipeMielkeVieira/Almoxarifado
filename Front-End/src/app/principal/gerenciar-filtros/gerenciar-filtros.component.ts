import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ClassificacaoService } from 'src/app/service/classificacaoService';
import { ProdutoService } from 'src/app/service/produtoService';


@Component({
    selector: 'app-gerenciar-filtros',
    templateUrl: './gerenciar-filtros.component.html',
    styleUrls: ['./gerenciar-filtros.component.scss']
})
export class GerenciarFiltrosComponent implements OnInit {

    constructor(private classificacaoService: ClassificacaoService, private produtoService: ProdutoService) {
    }

    @Input() listaFiltros: any[] = [];

    @Output() fecharModal = new EventEmitter<boolean>();

    modalConfirmarAlteracoes: boolean = false;
    novoFiltro: string = "";
    filtroAEditar: number = 0;

    listaFiltrosExcluidos: any[] = [];
    listaFiltrosAdicionados: any[] = [];
    listaFiltrosEditados: any[] = [];

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
            if(this.filtroAEditar == 0) {
                let objetoFiltro = { classificacao: this.novoFiltro };
                this.listaFiltrosAdicionados.push(objetoFiltro);
                this.listaFiltros.push(objetoFiltro);
            } else {
                this.editarFiltroLista();
            }
        }
    }

    editarFiltroLista() {
        for (const filtro of this.listaFiltros) {
            if(filtro.id == this.filtroAEditar) {
                filtro.classificacao = this.novoFiltro;
                this.novoFiltro = "";
                this.listaFiltrosEditados.push(filtro);
            }
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
        if(this.listaFiltrosEditados.length > 0) {
            this.salvarEdicao();
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
            this.produtoService.getClassificacao(filtro).subscribe(
                data => {
                    if(data.length > 0) {
                        for (const produto of data) {
                            produto.classificacao = null;
                            this.produtoService.putProduto(produto, produto.id).subscribe(
                                data => {
                                    this.classificacaoService.deleteFiltros(filtro.id).subscribe(
                                        data => {console.log(data)},
                                        error => {console.log(error)}
                                    );
                                }
                            );
                        }
                    } else {
                        this.classificacaoService.deleteFiltros(filtro.id).subscribe();
                    }
                }
            );
        }
    }

    salvarEdicao() {
        for (const filtro of this.listaFiltrosEditados) {
            this.classificacaoService.putFiltro(filtro, filtro.id).subscribe();
        }
    }

    abrirEdicaoFiltro(filtro: any, index: number) {
        if(this.filtroAEditar == filtro.id) {
            this.filtroAEditar = 0;
        } else {
            this.resetarIconesEdicao();
            this.filtroAEditar = filtro.id;
        }

        if(this.filtroAEditar != 0) {
            this.novoFiltro = filtro.classificacao;
            let iconesEdicao = document.getElementsByClassName('iconeEditar') as HTMLCollectionOf<HTMLSpanElement>;
            iconesEdicao[index].style.color = "#0047B6";
        } else {
            this.novoFiltro = "";
            let iconesEdicao = document.getElementsByClassName('iconeEditar') as HTMLCollectionOf<HTMLSpanElement>;
            iconesEdicao[index].style.color = "#000000";
        }
    }

    resetarIconesEdicao() {
        let iconesEdicao = document.getElementsByClassName('iconeEditar') as HTMLCollectionOf<HTMLSpanElement>;
        for(let i = 0; i < iconesEdicao.length; i++) {
            iconesEdicao[i].style.color = "#000000";
        }
    }

}
