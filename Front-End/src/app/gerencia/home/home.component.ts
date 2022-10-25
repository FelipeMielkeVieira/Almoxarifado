import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: UsersService) {
    this.listaItens = service.itens;
    this.localizacoesLista = service.localizacoes;
    this.localizacoesFiltradas = this.localizacoesLista;
    this.tipoUsuario = parseInt(localStorage.getItem("usuario") || "0");
  }

  listaOrdenacoes = [false, false, false, false];
  listaItens: any = [];

  selectAllLocalizacoes: boolean = false;

  // Variáveis para abas
  abaGerenciaUsuarios = false;
  abaGerenciaCadastros = false;
  abaDevolucoes = false;
  abaRetiradas = false;
  abaItens = false;
  abaLocalizacoes = false;

  listaEmBloco = true;
  inputGeral = "";
  tipoUsuario = 2;
  
  reserva = true;
  aparecerConfirmacao = 0;
  nomeLoc: any;
  modalClassificacao = 0;
  inputClassificacao = 0;
  numResultados = 0;

  indexExcluir: number = 0;

  ngOnInit() {

    // Função para fechamento dos modais ordenar e filtrar caso tenha sido clicado fora
    var self = this;
    window.onclick = function (event) {
      if (!(event.target as HTMLElement).className.includes("parteModal")) {
        if (!(event.target as HTMLElement).className.includes("iconsModais")) {
          if (self.modalOrdenar) {
            self.modalOrdenar = false;
          }
        }
      }
    }

    // Função para selecionar a aba automaticamente
    setTimeout(() => {
      if (this.tipoUsuario == 2 || this.tipoUsuario == 3) {
        this.abaDevolucoes = true;
      } else {
        this.abaGerenciaUsuarios = true;
      }
    }, 10);
  }

  localizacaoAtual = "paredeCentro";
  localizacoesFiltradas: any = [];
  localizacoesLista: any = [];
  listaClassificacao = [{ nome: "Nome classificacao" }];

  localizacoesItem = 1;

  cadastrarModal = false;
  aparecer = false;
  localizacaoModal = false;
  removerDevolucaoModal = false;

  informarDefeitoModal: boolean = false;
  devolucaoModal: boolean = false;
  modalOrdenar: boolean = false;
  ajuda: boolean = true;

  cadastrarProduto() {
    this.aparecer = false;
    this.cadastrarModal = false;
    this.inputClassificacao = 0;
  }

  botaoConfirmarRetirada() {
    document.documentElement.style.overflow = "auto";
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  abrirDevolucao(numero: number) {
    document.documentElement.style.overflow = "hidden";
    this.devolucaoModal = true;
    this.aparecer = true;
  }

  fecharModalBaixaDevolucao() {
    document.documentElement.style.overflow = "auto";
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  darBaixaDevolucao() {
    document.documentElement.style.overflow = "auto";
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  btnRecusar() {
    document.documentElement.style.overflow = "auto";
  }

  excluirLocalizacao() {
    this.aparecerConfirmacao = 0;
    let loc = this.localizacoesFiltradas[this.indexExcluir];
    let index1 = this.service.localizacoes.findIndex((e) => {
      if (e.nome == loc.nome) {
        return true;
      }
      return false;
    });
    if (index1 != -1) {
      this.service.localizacoes.splice(index1, 1);
    }
  }

  pesquisaLocalizacao() {
    var self = this;
    const listaFiltrada = this.localizacoesLista.filter(function (a: any) {
      return a.nome.toLowerCase().indexOf(self.inputGeral.toLowerCase()) > -1;
    });
    this.localizacoesFiltradas = listaFiltrada;
  }

  produtoNaoDevolvido() {
    let botao = document.querySelector(".btnSegundario") as HTMLElement;

    if (botao.style.backgroundColor == "red") {
      botao.style.backgroundColor = "gray";
    } else {
      botao.style.backgroundColor = "red";
    }
    //fazer lógica para dizer que o item não foi devolvido
    //desse jeito, a sacola ainda vai existir com os itens não devolvidos
  }

  cadastrar() {
    this.service.localizacoes.push({
      checked: false,
      id: this.service.localizacoes.length + 1,
      nome: this.nomeLoc,
    });
    this.fecharModalLocalizacao();
  }

  confirmacaoLocalizacao() {
    this.aparecerConfirmacao = 1;
  }

  informarDefeitoItem() {
    this.devolucaoModal = false;
    this.informarDefeitoModal = true;
  }

  voltarDevolucaoItens() {
    this.informarDefeitoModal = false;
    this.devolucaoModal = true;
  }

  adicionarLocalizacao() {
    if (this.localizacoesItem < 6) {
      this.localizacoesItem++;
    }
  }

  diminuirLocalizacao() {
    if (this.localizacoesItem > 0) {
      this.localizacoesItem--;
    }
  }

  acaoSegundariaDevolucaoModal() {
  }

  removerProdutoSacola() {
    this.removerDevolucaoModal = true;
    //item deve ser removido da sacola
  }

  textoAcaoSegundariaDevolucaoModal() {
    return "Remover";
  }

  removerDevolucaoModalBtn() {
    this.removerDevolucaoModal = false;
  }

  cancelarReserva() {
    this.devolucaoModal = false;
    this.reserva = false;
  }

  fecharModalCancelarReserva() {
    this.aparecer = false;
    this.reserva = true;
  }

  enviar() {
    this.aparecer = false;
    this.reserva = true;
  }

  adicionarClassificacao() {
    this.inputClassificacao = 1;
  }

  aparecerModalLocalizacao() {
    this.aparecer = true;
    this.localizacaoModal = true;
  }

  fecharModalLocalizacao() {
    this.aparecer = false;
    this.localizacaoModal = false;
  }

  aparecerModalCadastrar() {
    this.aparecer = true;
    this.cadastrarModal = true;
  }

  fecharModalCadastrar() {
    this.aparecer = false;
    this.cadastrarModal = false;
    this.inputClassificacao = 0;
  }

  // Função que retorna o placeholder do input de pesquisa principal, dependendo da aba aberta
  retornaPlaceholderPesquisa() {
    if (this.abaGerenciaCadastros || this.abaGerenciaUsuarios) {
      return "Pesquise por usuário...";
    }
    if (this.abaDevolucoes || this.abaRetiradas || this.abaItens) {
      return "Pesquise por produto...";
    }
    if (this.abaLocalizacoes) {
      return "Pesquise por localização...";
    }
    return "Pesquisar";
  }

  // Função para mudar de aba, recebendo o número da aba como parâmetro
  mudarAba(numero: number) {
    this.fecharAbas();
    switch (numero) {
      case 1:
        this.abaGerenciaUsuarios = true;
        break;
      case 2:
        this.abaGerenciaCadastros = true;
        break;
      case 3:
        this.abaDevolucoes = true;
        break;
      case 4:
        this.abaRetiradas = true;
        break;
      case 5:
        this.abaItens = true;
        break;
      case 6:
        this.abaLocalizacoes = true;
        break;
    }
  }

  // Função para retornar a classe dos botões de abas (para determinar se são azuis ou não)
  retornarClasseAba(numero: number) {
    switch (numero) {
      case 1:
        if (this.abaGerenciaUsuarios) {
          return "comAzul";
        }
        return "semAzul";
      case 2:
        if (this.abaGerenciaCadastros) {
          return "comAzul";
        }
        return "semAzul";
      case 3:
        if (this.abaDevolucoes) {
          return "comAzul";
        }
        return "semAzul";
      case 4:
        if (this.abaRetiradas) {
          return "comAzul";
        }
        return "semAzul";
      case 5:
        if (this.abaItens) {
          return "comAzul";
        }
        return "semAzul";
      case 6:
        if (this.abaLocalizacoes) {
          return "comAzul";
        }
        return "semAzul";
    }
    return "semAzul";
  }

  // Função para "resetar" todas as abas, para posteriormente abrir a aba desejada
  fecharAbas() {
    this.abaGerenciaUsuarios = false;
    this.abaGerenciaCadastros = false;
    this.abaDevolucoes = false;
    this.abaRetiradas = false;
    this.abaItens = false;
    this.abaLocalizacoes = false;
  }

  // Função para mudar a visualização do modal de ordenação
  mudarModaisPesquisa(numero: number) {
    switch (numero) {
      case 1:
        this.modalOrdenar = !this.modalOrdenar;
        break;
    }
  }

  //Função para ordenar os itens, recebendo um array de booleanos que remetem às diferentes ordenações
  ordenarItens(event: any) {
    this.listaOrdenacoes = JSON.parse(event);
  }

  // Função para mudar a visualização dos componentes (Lista / Bloco)
  mudarVisualizacao() {
    this.listaEmBloco = !this.listaEmBloco;
  }

  selectAll() {
    if (this.selectAllLocalizacoes) {
      this.service.localizacoes.forEach((localizacao) => {
        localizacao.checked = false;
      });
    } else {
      this.service.localizacoes.forEach((localizacao) => {
        localizacao.checked = true;
      });
    }
  }
}