import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AnexoService } from 'src/app/service/anexoService';
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

  constructor(private classificacaoService: ClassificacaoService, private localizacaoService: LocalizacaoService, private produtoService: ProdutoService, private anexoService: AnexoService) { }

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
  classificacaoTexto: string = "";

  ngOnInit(): void {
    this.buscarClassificacoes();
    this.buscarPorPai(0);
  }

  buscarClassificacoes() {
    this.classificacaoService.getAll().subscribe(
      data => { this.listaClassificacao = data },
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
      (document.querySelector('#adicionarClassificacao') as HTMLDivElement).style.backgroundColor = "#003378";
    } else {
      (document.querySelector('#adicionarClassificacao') as HTMLDivElement).style.backgroundColor = "#0047B6"
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

  fecharDetalhes(event: string) {
    this.descricaoItem = event;
    this.toggleModalDetalhes();
  }

  salvarArquivos(event: File[]) {
    this.listaAnexos = event;
  }

  cadastrarItem() {

    let produto = {
      nome: this.nomeProduto,
      quantidade: this.qtdItem,
      caracteristicas: this.descricaoItem,
      descartavel: this.itemDescartavel,
      classificacao: { id: 0 },
      localizacoes: [{ id: this.listaLocalizacoesEscolhidas[this.listaLocalizacoesEscolhidas.length - 1] }],
    }

    if (this.criarClassificacao) {
      this.classificacaoService.postFiltros({ classificacao: this.classificacaoTexto }).subscribe(
        data => {
          produto.classificacao = { id: data.id };

          this.produtoService.postProduto(produto, this.imagemItem, this.listaAnexos).subscribe(
            data => { this.fecharModalCadastro("cadastro") },
            error => { console.log(error) }
          )
        },
        error => { console.log(error); return { id: 0 }; }
      )
    } else {
      produto.classificacao = { id: this.classificacaoItem }
      this.produtoService.postProduto(produto, this.imagemItem, this.listaAnexos).subscribe(
        data => { this.fecharModalCadastro("cadastro") },
        error => { console.log(error) }
      )
    }
  }

  cadastrar() {
    if (this.nomeProduto != "") {
      this.cadastrarItem();
    } else {
      this.feedbackDados = true;

    }
  }

  fecharModalAlerta(numeroModal: any) {
    this.feedbackDados = false;
  }

}
