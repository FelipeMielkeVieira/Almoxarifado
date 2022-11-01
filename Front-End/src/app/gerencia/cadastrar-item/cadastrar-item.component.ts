import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/service';
import { ClassificacaoService } from 'src/app/service/classificacaoService';
import { LocalizacaoService } from 'src/app/service/localizacaoService';

@Component({
  selector: 'app-cadastrar-item',
  templateUrl: './cadastrar-item.component.html',
  styleUrls: ['./cadastrar-item.component.scss']
})
export class CadastrarItemComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();

  constructor(private service: UsersService, private classificacaoService: ClassificacaoService, private localizacaoService: LocalizacaoService) { }

  listaClassificacao: any[] = [];
  listaLocalizacoes: any[] = [];
  criarClassificacao = false;
  modalDetalhes: boolean = false;

  listaLocalizacoesEscolhidas: any = [null];

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

}
