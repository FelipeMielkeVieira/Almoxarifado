import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
    selector: 'app-modal-editar-item',
    templateUrl: './modal-editar-item.component.html',
    styleUrls: ['./modal-editar-item.component.scss']
})
export class ModalEditarItem implements OnInit {

    constructor(private service: UsersService) {
        this.listaClassificacoesTotais = this.service.classificacoes;
        this.qtdInicial = this.item.quantidade;
    }

    // Output para fechar o modal, enviando para o componente "Item"
    @Output() fecharModal = new EventEmitter<string>();

    // Item recebido do componente pai
    @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: 0 };

    listaClassificacoesTotais: any = [];
    listaClassificacoes: any = [];

    // ID da classificação selecionada na edição
    classificacaoAtual: number = 0;
    qtdInicial: number = 0;

    ngOnInit() {
        this.atualizarListaClassificacoes();
    }

    // Função que retorna o nome de uma classificacao pelo id
    retornarNomeClassificacao(id: number) {
        for (const classificacao of this.listaClassificacoesTotais) {
            if (classificacao.id == id) {
                return classificacao.classificacao;
            }
        }
        return "";
    }

    // Função para atualizar o select de classificações conforme a classificação do item
    atualizarListaClassificacoes() {
        console.log(this.item.classificacao);
        let listaNova = [];
        for (const classificacao of this.listaClassificacoesTotais) {
            if (classificacao.id != this.item.classificacao) {
                listaNova.push(classificacao);
            }
        }
        this.listaClassificacoes = listaNova;
    }

    // Função para fechar o modal, enviando um output recebido
    fecharModalEdicao(evento: string) {
        this.fecharModal.emit(evento);
    }

    // Retorna o nome de uma classificacao através do id recebido pelo item
    buscarClassificacao(codigoClassificacao: number) {
        for (const classificacao of this.listaClassificacoes) {
            if (classificacao.id == codigoClassificacao) {
                return classificacao.classificacao;
            }
        }
        return "Nenhuma";
    }

    editarItem() {
        if (this.item.quantidade == this.qtdInicial) {
            this.fecharModalEdicao("editar");
        } else {
            this.fecharModalEdicao("motivo");
        }
    }
}