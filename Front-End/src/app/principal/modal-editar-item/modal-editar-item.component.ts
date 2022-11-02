import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/service';
import { ClassificacaoService } from 'src/app/service/classificacaoService';
import { LocalizacaoService } from 'src/app/service/localizacaoService';

@Component({
    selector: 'app-modal-editar-item',
    templateUrl: './modal-editar-item.component.html',
    styleUrls: ['./modal-editar-item.component.scss']
})
export class ModalEditarItem implements OnInit {
    @Output() fecharModal = new EventEmitter<string>();
    @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: 0, anexos: [{ descricao: "", anexo: "" }], localizacoes: [{ id: 0 }]};

    constructor(private service: UsersService, private classificacaoService: ClassificacaoService, private localizacaoService: LocalizacaoService) { }

    listaClassificacao: any[] = [];
    listaLocalizacoes: any[] = [];
    criarClassificacao = false;
    modalDetalhes: boolean = false;

    listaLocalizacoesEscolhidas: any = [null];

    // Inputs do formulário
    nomeProduto: String = "";
    classificacaoSelect: any;
    descartavel: boolean = false;
    imagemItem: any;
    qtdItem: number = 0;

    isDescartavel(tipo: String) {
        if (this.item.descartavel) {
            if (tipo == 'descartavel') {
                return true;
            } else {
                return false;
            }
        } else {
            if (tipo == 'descartavel') {
                return false;
            } else {
                return true;
            }
        }
    }

    ngOnInit(): void {
        this.buscarClassificacoes();
        this.listaLocalizacoes = this.service.retornaFilhosLocalizacao(this.listaLocalizacoes, 0);

        // Preenchendo os inputs com os dados do item
        this.nomeProduto = this.item.nome;
        this.classificacaoSelect = this.item.classificacao;
        this.qtdItem = this.item.quantidade;
        this.imagemItem = this.item.imagem;
        this.listaLocalizacoesEscolhidas = this.item.localizacoes;
    }

    buscarClassificacoes() {
        this.classificacaoService.getAll().subscribe(
            data => { this.listaClassificacao = data; },
            error => { console.log(error) }
        );
    }

    // Função para fechar o modal
    fecharModalCadastro(texto: string) {
        this.fecharModal.emit(texto);
    }

    // Função para carregar e salvar a escolha de imagem
    carregarImagem(event: any) {
        let imagem = document.querySelector("#imagemItem") as HTMLImageElement;
        imagem.src = URL.createObjectURL(event.target.files[0]);
        this.imagemItem = event.target.files[0];
    }

    // Função para mudar o modo de colocar classificação (cadastrar nova / usar existente)
    mudarClassificacao() {
        this.criarClassificacao = !this.criarClassificacao;
        if (this.criarClassificacao) {
            (document.querySelector('#adicionarClassificacao') as HTMLDivElement).style.backgroundColor = "#0047B6";
        } else {
            (document.querySelector('#adicionarClassificacao') as HTMLDivElement).style.backgroundColor = "#B6B3B3"
        }
    }

    buscarPorPai(id: any) {
        this.localizacaoService.getByPai(id).subscribe(
            data => {
                this.listaLocalizacoes.push(data);
                if (this.listaLocalizacoes[this.listaLocalizacoes.length - 1].length < 1) {
                    this.listaLocalizacoes.splice(this.listaLocalizacoes.length - 1, 1);
                }
            },
            error => { console.log(error) },
        )
    }

    // Função para editar a escolha de localização
    mudarLocalizacoes(index: number) {
        if (this.listaLocalizacoes.length - 1 != index) {
            this.listaLocalizacoes.splice(index + 1, this.listaLocalizacoes.length - index)
        }

        this.buscarPorPai(this.listaLocalizacoesEscolhidas[index])
    }

    mudarQtd(operacao: number) {
        switch (operacao) {
            case 1:
                if (this.qtdItem > 0) {
                    this.qtdItem--;
                }
                break;
            case 2:
                this.qtdItem++;
                break;
        }
    }

    toggleModalDetalhes() {
        this.modalDetalhes = !this.modalDetalhes;
        document.documentElement.style.overflow = this.modalDetalhes ? "hidden" : "auto";
    }
}