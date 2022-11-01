import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';
import { LocalizacaoService } from 'src/app/service/localizacaoService';
import { UserService } from 'src/app/service/userService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: UsersService, private localizacaoService : LocalizacaoService, private userService: UserService) {
    this.listaItens = service.itens;
    this.tipoUsuario = parseInt(localStorage.getItem("usuario") || "0");
    this.listaCadastrosPendentes = service.usuariosPendentes;
    this.listaUsuarios = service.usuarios;
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
  numResultados = 0;

  localizacoesLista: any = [];
  localizacoesSelecionadas: any[] = [];
  confirmacaoDeletarLocalizacoes = false;

  feedbackLocalizacaoCadastrada = false;
  feedbackItemCadastrado = false;
  feedbackLocalizacoesExcluidas = false;

  ngOnInit() {
    // Função para fechamento dos modais ordenar e filtrar caso tenha sido clicado fora
    var self = this;
    window.addEventListener("click", function (event) {
      if (!(event.target as HTMLElement).className.includes("parteModal")) {
        if (!(event.target as HTMLElement).className.includes("iconsModais")) {
          if (self.modalOrdenar) {
            self.modalOrdenar = false;
          }
        }
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
    this.localizacaoService.getAll().subscribe(
      data => this.localizacoesLista = data,
      error => {console.log(error)}
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
    switch (numero) {
      case 1:
        this.abaGerenciaUsuarios = true;
        break;
      case 2:
        this.abaGerenciaCadastros = true;
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
        break;
      case 6:
        this.abaLocalizacoes = true;
        this.localizacoesLista = this.buscarLocalizacoes();
        break;
    }
  }

  buscarCadastrosPendentes() {
    this.userService.getCadastros("PENDENTE").subscribe(
      data => this.listaCadastrosPendentes = data,
      error => {console.log(error)}
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
    document.documentElement.style.overflow = "hidden";
    switch (numero) {
      case 1:
        this.modalOrdenar = !this.modalOrdenar;
        break;
      case 2:
        this.localizacaoModal = !this.localizacaoModal;
        if (evento == "cadastro") {

        }
        break;
      case 3:
        this.modalCadastrarItem = !this.modalCadastrarItem;
        if (evento == "cadastro") {

        }
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
    if(event) {
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
      this.localizacaoService.deleteLocalizacoes(loc.id).subscribe(error => {console.log(error)});
      this.excluirLocalizacaoLista(loc.id);
    }
  }

  // Função para excluir uma localização da lista total
  excluirLocalizacaoLista(id: any) {
    for (let index = 0; index < this.localizacoesLista.length; index++) {
      if(id == this.localizacoesLista[index].id) {
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
    }
  }

  // Função para pegar as localizações sem pais
  getTopLocalizacoes() {
    let listaNova = [];
    for (const loc of this.localizacoesLista) {
      if(!loc.idPai) {
        listaNova.push(loc);
      }
    }
    return listaNova;
  }
}