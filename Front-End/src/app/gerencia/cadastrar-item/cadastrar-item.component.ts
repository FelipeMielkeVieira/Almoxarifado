import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsersService } from 'src/app/service';
import { ClassificacaoService } from 'src/app/service/classificacaoService';
import { LocalizacaoService } from 'src/app/service/localizacaoService';
import { ProdutoService } from 'src/app/service/produtoService';

@Component({
  selector: 'app-cadastrar-item',
  templateUrl: './cadastrar-item.component.html',
  styleUrls: ['./cadastrar-item.component.scss']
})
export class CadastrarItemComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();
  @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: 0 };

  constructor(private service: UsersService, private classificacaoService: ClassificacaoService, private localizacaoService: LocalizacaoService, private produtoService: ProdutoService) { }

  listaClassificacao: any[] = [];
  listaLocalizacoes: any[] = [];
  criarClassificacao = false;
  modalDetalhes: boolean = false;

  feedbackDados: boolean = false;

  listaLocalizacoesEscolhidas: any = [null];
  listaAnexos: any = [];

  nomeProduto: string = "";
  descricaoItem: string = "";
  itemDescartavel: boolean = false;
  classificacaoItem: number = 1;

  ngOnInit(): void {
    this.buscarClassificacoes();
    this.listaLocalizacoes = this.service.retornaFilhosLocalizacao(this.listaLocalizacoes, 0);
  }

  buscarClassificacoes() {
    this.classificacaoService.getAll().subscribe(
      data => this.listaClassificacao = data,
      error => { console.log(error) }
    );
  }

  imagemItem: any;
  qtdItem: number = 0;

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

  cadastrarItem() {
    const produto = {
      nome: this.nomeProduto,
      quantidade: this.qtdItem,
      caracteristicas: this.descricaoItem,
      descartavel: this.itemDescartavel,
      classificacao: this.classificacaoItem,
      localizacoes: [this.listaLocalizacoesEscolhidas[this.listaLocalizacoesEscolhidas.length - 1]],
    }

    // this.produtoService.postProduto(produto, this.imagemItem, this.listaAnexos).subscribe(
    //   data => { console.log(data) },
    //   error => { console.log(error) }
    // )
  }

  cadastrar() {
    const arquivo = document.getElementById("formFileSm") as HTMLFormElement;

    const nome = document.getElementById("nomeCadastro") as HTMLFormElement;

    const opcao = (<HTMLSelectElement>document.getElementById('selecionarDescartavel')).value;

    if (arquivo.value != "" && nome.value != "" && opcao != "" && this.qtdItem != 0) {
      this.cadastrarItem();
    } else {
      this.feedbackDados = true;

    }
  }

  fecharModalAlerta(numeroModal: any) {
    this.feedbackDados = false;
  }

}
