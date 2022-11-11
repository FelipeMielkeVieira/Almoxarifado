import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { UsersService } from 'src/app/service';
import { LocalizacaoService } from 'src/app/service/localizacaoService';
import { ProdutoService } from 'src/app/service/produtoService';
import { UserService } from 'src/app/service/userService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private paginator: MatPaginatorIntl, private service: UsersService, private localizacaoService: LocalizacaoService, private userService: UserService, private produtoService: ProdutoService) {
    this.tipoUsuario = parseInt(localStorage.getItem("usuario") || "0");

    paginator.itemsPerPageLabel = 'Quantidade de itens por página:';
    paginator.nextPageLabel = 'Próxima página';
    paginator.previousPageLabel = 'Página anterior';
    paginator.firstPageLabel = 'Primeira página';
    paginator.lastPageLabel = 'Última página';

    // *Personalizar a paginação
    paginator.getRangeLabel = (pageSize: number, length: number) => {
      return "página " + (this.paginaAtual + 1) + " de " + (Math.ceil(this.itensTotais / this.tamanhoPagina));
    };
  }

  listaOrdenacoes = [false, false, false, false];
  listaItens: any = [];

  listaCadastrosPendentes: any = [];
  listaUsuarios: any = [];

  // Trocar listas estáticas por listas do banco de dados
  reservasDevolucao = [
    { id: 1, data_retirada: "01/01/2022", data_devolucao: "01/01/2024", status: "AGUARDANDO_DEVOLUCAO", usuario_email: "felipe_mielke-vieira@estudante.sc.senai.br" }
  ]
  reservasRetirada = [
    { id: 2, data_retirada: "01/01/2023", data_devolucao: "01/01/2024", status: "AGUARDANDO_RETIRADA", usuario_email: "felipe_mielke-vieira@estudante.sc.senai.br" }
  ]

  selectAllLocalizacoes: boolean = false;
  selectAllLocalizacoesFromPage: boolean = false;

  // Variáveis para abas
  abaGerenciaUsuarios = false;
  abaGerenciaCadastros = false;
  abaDevolucoes = false;
  abaRetiradas = false;
  abaItens = false;
  abaLocalizacoes = false;

  modalCadastrarItem = false;
  localizacaoModal = false;
  modalOrdenar: boolean = false;

  feedbackSacolaReservada: boolean = false;
  feedbackSacolaExcluida: boolean = false;

  listaEmBloco = true;
  inputGeral = "";
  tipoUsuario = 2;

  localizacoesLista: any = [];
  localizacoesSelecionadas: any[] = [];
  confirmacaoDeletarLocalizacoes = false;

  feedbackLocalizacaoCadastrada = false;
  feedbackItemCadastrado = false;
  feedbackLocalizacoesExcluidas = false;
  feedbackItemExcluido = false;

  feedbackUsuarioAceito = false;
  feedbackUsuarioRecusado = false;
  feedbackUsuarioExcluido = false;
  feedbackUsuarioAtualizado = false;

  carregando = false;
  paginaAtual: number = 0;
  itensTotais: any = 0;
  tamanhoPagina: number = 18;
  tamanhoPaginaAntigo: number = 18;
  parametrosPagina: string = "";
  tamanhosPossiveisPagina: any = [18, 36, 72, 144]

  itemOrdenacaoAtual: string = "emailUsuario";
  ordenacaoAtual: string = "asc";

  classificacaoFiltrada: any = undefined;
  filtrosSecundarios: any = [false, false, false, false, false]

  // Variáveis localizações
  // listaLocalizacoes: any = [];

  ngOnInit() {

    document.documentElement.style.overflow = "auto";
    this.buscarUsuariosExistentes();
    // Função para fechamento dos modais ordenar e filtrar caso tenha sido clicado fora
    var self = this;
    window.addEventListener("click", function (event) {
      try {
        if (!(event.target as HTMLElement).className.includes("parteModal")) {
          if (!(event.target as HTMLElement).className.includes("iconsModais")) {
            if (self.modalOrdenar) {
              self.modalOrdenar = false;
            }
          }
        }
      } catch (error) {
        self.modalOrdenar = false;
      }
    });

    if (localStorage.getItem('excluir')) {
      localStorage.removeItem('excluir');
      this.abrirFeedback(1);
    } else if (localStorage.getItem('reservar')) {
      localStorage.removeItem('reservar');
      this.abrirFeedback(2);
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

  buscarLocalizacoes() {
    this.carregando = !this.carregando;
    this.localizacaoService.countLocalizacoes().subscribe(
      data => this.itensTotais = data,
      error => { console.log(error) }
    )

    this.localizacaoService.getPage(this.parametrosPagina).subscribe(
      data => { this.localizacoesLista = data; this.carregando = !this.carregando; },
      error => { console.log(error) }
    );
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

    if (!this.abaItens) {
      let divFiltro = document.querySelector("#filtro") as HTMLDivElement;
      let containerFiltro = document.querySelector("#containerFiltro") as HTMLDivElement;

      if(containerFiltro) {
        divFiltro.removeChild(containerFiltro);
        this.classificacaoFiltrada = undefined;
      }
    }

    switch (numero) {
      case 1:
        this.abaGerenciaUsuarios = true;
        this.itemOrdenacaoAtual = "emailUsuario";
        this.modificarPaginacao(2);
        this.buscarUsuariosExistentes();
        break;
      case 2:
        this.abaGerenciaCadastros = true;
        this.itemOrdenacaoAtual = "emailUsuario";
        this.modificarPaginacao(2);
        this.buscarCadastrosPendentes();
        break;
      case 3:
        this.abaDevolucoes = true;
        break;
      case 4:
        this.abaRetiradas = true;
        break;
      case 5:
        this.abaItens = true;
        this.itemOrdenacaoAtual = "id";
        this.modificarPaginacao(2);
        this.buscarItens();
        break;
      case 6:
        this.abaLocalizacoes = true;
        this.itemOrdenacaoAtual = "id";
        this.modificarPaginacao(1);
        this.localizacoesLista = this.buscarLocalizacoes();
        break;
    }
  }

  modificarPaginacao(tipo: number) {
    if (tipo == 1) {
      this.paginaAtual = 0;
      this.tamanhoPagina = 50;
      this.tamanhosPossiveisPagina = [50, 100, 150, 200];
    } else {
      this.paginaAtual = 0;
      this.tamanhoPagina = 18;
      this.tamanhosPossiveisPagina = [18, 36, 72, 144];
    }
  }

  buscarItens() {

    this.carregando = !this.carregando;
    let params: any = {};

    if (this.inputGeral != "") {
      params.nome = this.inputGeral;
    }
    if (this.classificacaoFiltrada) {
      params.classificacao = this.classificacaoFiltrada.id;
    }
    if (this.filtrosSecundarios[0]) {
      params.descartavel = true;
    }
    if (this.filtrosSecundarios[1]) {
      params.naoDescartavel = true;
    }
    if (this.filtrosSecundarios[2]) {
      params.semQuantidade = true;
    }
    if (this.filtrosSecundarios[3]) {
      params.comQuantidade = true;
    }
    if (this.filtrosSecundarios[4]) {

    }

    this.produtoService.getCount(params).subscribe(
      data => { this.itensTotais = data; this.itensTotais = data; },
      error => { console.log(error) }
    )

    this.produtoService.getPage(this.parametrosPagina, params).subscribe(
      data => { this.listaItens = data; this.carregando = !this.carregando; },
      error => { console.log(error) }
    );
  }

  buscarUsuariosExistentes() {
    this.carregando = !this.carregando;
    this.userService.getCountUsers().subscribe(
      data => { this.itensTotais = data; },
      error => { console.log(error) }
    )

    this.userService.getUsuariosPage(this.parametrosPagina).subscribe(
      data => { this.listaUsuarios = data; this.carregando = !this.carregando; },
      error => { console.log(error) }
    )
  }

  buscarCadastrosPendentes() {
    this.carregando = !this.carregando;
    this.userService.getCountCadastros().subscribe(
      data => { this.itensTotais = data; },
      error => { console.log(error) }
    )

    this.userService.getCadastrosPage(this.parametrosPagina).subscribe(
      data => { this.listaCadastrosPendentes = data; this.carregando = !this.carregando; },
      error => { console.log(error) }
    )
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
  mudarModaisPesquisa(numero: number, evento: string) {
    this.toggleOverflow();
    switch (numero) {
      case 1:
        this.modalOrdenar = !this.modalOrdenar;
        break;
      case 2:
        this.localizacaoModal = !this.localizacaoModal;

        if (this.localizacaoModal) {
          document.documentElement.style.overflow = "hidden"
        } else {
          document.documentElement.style.overflow = "visible"
        }

        if (evento == "cadastro") {
          this.feedbackLocalizacaoCadastrada = true;
          setTimeout(() => {
            this.feedbackLocalizacaoCadastrada = false;
          }, 4500);
        }
        break;
      case 3:
        this.modalCadastrarItem = !this.modalCadastrarItem;

        if (this.modalCadastrarItem) {
          document.documentElement.style.overflow = "hidden"
        } else {
          document.documentElement.style.overflow = "visible"
        }

        if (evento == "cadastro") {
          this.feedbackItemCadastrado = true;
          this.feedbackItemCadastrado = true;
          setTimeout(() => {
            this.feedbackItemCadastrado = false;
          }, 4500);

          this.buscarItens();
        }
        break;
    }
  }

  toggleOverflow() {
    document.documentElement.style.overflow == "auto" ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto";
  }

  //Função para ordenar os itens, recebendo um array de booleanos que remetem às diferentes ordenações
  ordenarItens(event: any) {

    event = JSON.parse(event);
    if (event[0]) {
      this.itemOrdenacaoAtual = "nome"
      this.ordenacaoAtual = "asc";
    }
    if (event[1]) {
      this.itemOrdenacaoAtual = "nome"
      this.ordenacaoAtual = "desc";
    }
    if (event[2]) {
      this.itemOrdenacaoAtual = "quantidade"
      this.ordenacaoAtual = "desc";
    }
    if (event[3]) {
      this.itemOrdenacaoAtual = "quantidade"
      this.ordenacaoAtual = "asc";
    }
    if (!event[0] && !event[1] && !event[2] && !event[3]) {
      this.listaOrdenacoes = [false, false, false, false];
      this.itemOrdenacaoAtual = "id";
      this.ordenacaoAtual = "asc";
    }

    this.parametrosPagina = "sort=" + this.itemOrdenacaoAtual + "," + this.ordenacaoAtual + "&size=" + this.tamanhoPagina + "&page=" + this.paginaAtual;
    this.buscarItens();
  }

  // Função para mudar a visualização dos componentes (Lista / Bloco)
  mudarVisualizacao() {
    this.listaEmBloco = !this.listaEmBloco;
  }

  // Função que vai selecionar todas as localizações cadastradas
  selectAllFromPage() {
    if (this.selectAllLocalizacoesFromPage) {
      this.localizacoesLista.forEach((localizacao: any) => {
        localizacao.checked = false;
      });
      this.localizacoesSelecionadas = [];
    } else {
      this.localizacoesLista.forEach((localizacao: any) => {
        localizacao.checked = true;
      });
      this.localizacoesSelecionadas = this.localizacoesLista;
    }
  }

  // Função que vai selecionar todas as localizações da atual página
  selectAll() {

  }

  // Função para abrir o modal de cadastrar localização
  abrirModalLocalizacao() {
    this.localizacaoModal = true;
  }

  // Função para abrir e fechar o modal de ordenação
  mudarModalOrdenar() {
    this.modalOrdenar = !this.modalOrdenar;
  }

  confirmarExclusaoLocalizacoes() {
    this.confirmacaoDeletarLocalizacoes = true;
  }

  fecharModalExclusaoLocalizacoes(event: boolean) {
    this.confirmacaoDeletarLocalizacoes = false;
    if (event) {
      this.excluirLocalizacoes();
      this.feedbackLocalizacoesExcluidas = true;
      setTimeout(() => {
        this.feedbackLocalizacoesExcluidas = false;
      }, 4500);
    }
  }

  // Função para excluir as localizações selecionadas do banco de dados
  excluirLocalizacoes() {
    for (const loc of this.localizacoesSelecionadas) {
      this.localizacaoService.deleteLocalizacoes(loc.id).subscribe(
        data => { this.excluirLocalizacaoLista(loc.id); },
        error => { console.log(error) }
      );
    }
  }

  // Função para excluir uma localização da lista total
  excluirLocalizacaoLista(id: any) {
    for (let index = 0; index < this.localizacoesLista.length; index++) {
      if (id == this.localizacoesLista[index].id) {
        this.localizacoesLista.splice(index, 1);
      }
    }
  }

  abrirFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackSacolaExcluida = true;
        setTimeout(() => {
          this.feedbackSacolaExcluida = false;
        }, 4.5)
        break;
      case 2:
        this.feedbackSacolaReservada = true;
        setTimeout(() => {
          this.feedbackSacolaReservada = false;
        }, 4.5)
        break;
    }
  }

  fecharModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackLocalizacaoCadastrada = false;
        break;
      case 2:
        this.feedbackItemCadastrado = false;
        break;
      case 3:
        this.feedbackSacolaReservada = false;
        break;
      case 4:
        this.feedbackSacolaExcluida = false;
        break;
      case 5:
        this.feedbackLocalizacoesExcluidas = false;
        break;
      case 6:
        this.feedbackUsuarioAceito = false;
        break;
      case 7:
        this.feedbackUsuarioRecusado = false;
        break;
      case 8:
        this.feedbackUsuarioExcluido = false;
        break;
      case 9:
        this.feedbackUsuarioAtualizado = false;
        break;
      case 10:
        this.feedbackItemExcluido = false;
        break;
    }
  }

  // Função para pegar as localizações sem pais
  getTopLocalizacoes() {
    let listaNova = [];
    for (const loc of this.localizacoesLista) {
      if (!loc.idPai) {
        listaNova.push(loc);
      }
    }
    return listaNova;
  }

  // Função para remover um usuário aceito ou rejeitado da lista de cadastros
  diminuirListaCadastros(event: string) {
    let listaStrings = event.split("*");

    for (let i = 0; i < this.listaCadastrosPendentes.length; i++) {
      if (this.listaCadastrosPendentes[i].emailUsuario == listaStrings[1]) {
        this.listaCadastrosPendentes.splice(i, 1);
      }
    }

    switch (listaStrings[0]) {
      case "1":
        this.feedbackUsuarioAceito = true;
        setTimeout(() => {
          this.feedbackUsuarioAceito = false;
        }, 4500);
        break;
      case "2":
        this.feedbackUsuarioRecusado = true;
        setTimeout(() => {
          this.feedbackUsuarioRecusado = false;
        }, 4500);
        break;
    }
  }

  // Função para remover um usuário editado ou removido da lista de usuários
  diminuirListaUsuarios(event: string) {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (this.listaUsuarios[i].emailUsuario == event) {
        this.listaUsuarios.splice(i, 1);
      }
    }

    this.feedbackUsuarioExcluido = true;
    setTimeout(() => {
      this.feedbackUsuarioExcluido = false;
    }, 4500);
  }

  excluirItemLista(id: number) {
    for (let i = 0; i < this.listaItens.length; i++) {
      if (this.listaItens[i].id == id) {
        this.listaItens.splice(i, 1);
      }
    }

    this.feedbackItemExcluido = true;
    setTimeout(() => {
      this.feedbackItemExcluido = false;
    }, 4500);
  }

  mudarPagina(event: any) {
    if (event.previousPageIndex != event.pageIndex) {
      if (event.previousPageIndex <= event.pageIndex) {
        this.paginaAtual++;
      } else {
        this.paginaAtual--;
      }

      this.parametrosPagina = "sort=" + this.itemOrdenacaoAtual + "," + this.ordenacaoAtual + "&size=" + event.pageSize + "&page=" + event.pageIndex;
    } else {
      if (event.pageSize != this.tamanhoPaginaAntigo) {
        this.tamanhoPagina = event.pageSize;
        this.tamanhoPaginaAntigo = event.pageSize;

        this.parametrosPagina = "sort=" + this.itemOrdenacaoAtual + "," + this.ordenacaoAtual + "&size=" + event.pageSize + "&page=" + event.pageIndex;
      }
    }

    if (this.abaItens) {
      this.buscarItens();
    }
    if (this.abaGerenciaCadastros) {
      this.buscarCadastrosPendentes();
    }
    if (this.abaGerenciaUsuarios) {
      this.buscarUsuariosExistentes();
    }
    if (this.abaLocalizacoes) {
      this.buscarLocalizacoes();
    }
  }

  deletarLocalizacaoClicavel() {
    if (this.localizacoesSelecionadas.length > 0) {
      return false;
    }
    return true;
  }

  atualizarLocalizacoesSelecionadas(lista: any[]) {
    console.log(lista);

    this.localizacoesSelecionadas = lista;
    console.log(this.localizacoesSelecionadas.length);
  }

  // Função para atualização das variáveis de filtros e busca filtrada dos itens
  atualizarFiltros(event: any) {
    if (event.id || event.id == 0) {
      if (event.tirar) {
        this.classificacaoFiltrada = undefined;
      } else {
        this.classificacaoFiltrada = event;
      }
    } else {
      this.filtrosSecundarios = event;
    }
    this.fecharAbas();
    this.abaItens = true;
    this.buscarItens();
  }

  // Função acionada ao fazer uma pesquisa pelo campo de texto
  pesquisar() {
    if (this.abaItens) {
      this.buscarItens();
    }
  }
}