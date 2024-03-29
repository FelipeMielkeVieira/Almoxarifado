import { Component, HostListener, OnInit } from "@angular/core";
import { UsersService } from "src/app/service";

@Component({
  selector: "app-home-supervisor",
  templateUrl: "./home-supervisor.component.html",
  styleUrls: ["./home-supervisor.component.css"],
})
export class HomeSupervisorComponent implements OnInit {
  constructor(private service: UsersService) {
    this.listaItens2 = service.itens;
    this.localizacoesLista = service.localizacoes;
    this.localizacoesFiltradas = this.localizacoesLista;
    this.tipoUsuario = parseInt(localStorage.getItem("usuario"));
  }

  listaItens2;
  inputGeral = "";
  tipoUsuario = 2;
  reserva = true;
  aparecerConfirmacao = 0;
  nomeLoc;
  modalClassificacao = 0;
  inputClassificacao = 0;

  indexExcluir: number = 0;

  ngOnInit() {
    let div;

    setTimeout(() => {
      switch (this.tipoUsuario) {
        case 2:
          this.devolucoes = 1;
          div = document.querySelector("#devolucoes") as HTMLElement;
          div.class = "comAzul";
          break;
        case 3:
          this.devolucoes = 1;
          div = document.querySelector("#devolucoes") as HTMLElement;
          div.class = "comAzul";
          break;
        case 4:
          this.gerenciaUsuarios = 1;
          div = document.getElementById("gerenciarUsuarios");
          div.className = "comAzul";
          break;
      }
    }, 10);
  }

  localizacaoAtual = "paredeCentro";
  localizacoesFiltradas = [];
  localizacoesLista = [];
  listaClassificacao = [{ nome: "Nome classificacao" }];

  contadorRecusar = 0;
  contadorAceitar = 0;
  gerenciaUsuarios = 0;
  gerenciaCadastros = 0;
  devolucoes = 0;
  retirada = 0;
  listaItens = 0;
  contLocalizacoes = 0;
  feedback = 0;

  localizacoesItem = 1;

  cadastrarModal = false;
  aparecer = false;
  localizacaoModal = false;
  removerDevolucaoModal = false;

  informarDefeitoModal: boolean = false;
  devolucaoModal: boolean = false;
  nao = 0;
  modalOrdernar: boolean = false;
  modalFiltrar: boolean = false;
  ajuda: boolean = true;

  emBloco = 0;

  modalRecusar() {
    document.documentElement.style.overflow = "hidden";
    this.contadorRecusar = 1;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "0.5";
  }

  modalAceitar() {
    document.documentElement.style.overflow = "hidden";
    this.contadorAceitar = 1;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "0.5";
  }

  cadastrarProduto() {
    this.aparecer = false;
    this.cadastrarModal = false;
    this.inputClassificacao = 0;
    this.nao = 0;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  botaoConfirmarRetirada() {
    document.documentElement.style.overflow = "auto";
    this.devolucaoModal = false;
    this.aparecer = false;
    this.nao = 1;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  abrirDevolucao(numero) {
    document.documentElement.style.overflow = "hidden";
    this.devolucaoModal = true;
    this.aparecer = true;
    if (numero == 2) {
      this.nao = 1;
    } else {
      this.nao = 2;
    }
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
    this.nao = 2;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  cancelar() {
    document.documentElement.style.overflow = "auto";
    this.contadorRecusar = 0;
    this.contadorAceitar = 0;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "1";
    this.aparecerConfirmacao = 0;
  }

  btnRecusar() {
    document.documentElement.style.overflow = "auto";
  }

  gerenciarCadastros() {
    this.gerenciaCadastros = 1;
    this.gerenciaUsuarios = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#retirada") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#listaItens") as HTMLElement;
    semAzul2.className = "semAzul";
    let semAzul5 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul5.className = "semAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }
    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let comAzul = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      comAzul.className = "comAzul";
    }
  }

  gerenciarUsuarios() {
    this.gerenciaUsuarios = 1;
    this.gerenciaCadastros = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#retirada") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#listaItens") as HTMLElement;
    semAzul2.className = "semAzul";
    let semAzul5 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul5.className = "semAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let comAzul = document.querySelector("#gerenciarUsuarios") as HTMLElement;
      comAzul.className = "comAzul";
    }
  }

  baixaDevolucoes() {
    this.devolucoes = 1;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#retirada") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#listaItens") as HTMLElement;
    semAzul2.className = "semAzul";
    let comAzul = document.querySelector("#devolucoes") as HTMLElement;
    comAzul.className = "comAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let semAzul5 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul5.className = "semAzul";
    }
  }

  confirmarRetirada() {
    this.retirada = 1;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#listaItens") as HTMLElement;
    semAzul2.className = "semAzul";
    let comAzul = document.querySelector("#retirada") as HTMLElement;
    comAzul.className = "comAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let semAzul5 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul5.className = "semAzul";
    }
  }

  listaDeItens() {
    this.listaItens = 1;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#retirada") as HTMLElement;
    semAzul2.className = "semAzul";
    let comAzul = document.querySelector("#listaItens") as HTMLElement;
    comAzul.className = "comAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let semAzul5 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul5.className = "semAzul";
    }
  }

  localizacoes() {
    this.contLocalizacoes = 1;
    this.listaItens = 0;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;

    let semAzul1 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#retirada") as HTMLElement;
    semAzul2.className = "semAzul";
    let semAzul3 = document.querySelector("#listaItens") as HTMLElement;
    semAzul3.className = "semAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let comAzul = document.querySelector("#localizacoes") as HTMLElement;
      comAzul.className = "comAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let semAzul5 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul5.className = "semAzul";
    }
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
    this.feedback = 1;
    this.nao = 3;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  pesquisaLocalizacao() {
    var self = this;
    const listaFiltrada = this.localizacoesLista.filter(function (a) {
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

  abrirModal(abrir: boolean) {
    if (abrir) {
      this.modalOrdernar = true;
      document.documentElement.style.overflow = "hidden";
    } else {
      this.modalOrdernar = false;
      document.documentElement.style.overflow = "auto";
    }
  }

  cadastrar() {
    this.service.localizacoes.push({
      id: this.service.localizacoes.length + 1,
      nome: this.nomeLoc,
    });
    this.fecharModalLocalizacao();
    this.nao = 4;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
    console.log(this.service.localizacoes);
  }

  confirmacaoLocalizacao(index: number) {
    this.aparecerConfirmacao = 1;
    this.indexExcluir = index;
  }

  fechar() {
    this.feedback = 0;
  }

  informarDefeitoItem() {
    this.devolucaoModal = false;
    this.informarDefeitoModal = true;
  }

  voltarDevolucaoItens() {
    this.informarDefeitoModal = false;
    this.devolucaoModal = true;
  }

  mostrarEmBloco() {
    this.emBloco = 0;
  }

  mostrarEmLista() {
    this.emBloco = 1;
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
    if (this.nao == 2) {
      this.produtoNaoDevolvido();
    } else {
      this.removerProdutoSacola();
    }
  }

  removerProdutoSacola() {
    this.removerDevolucaoModal = true;
    //item deve ser removido da sacola
  }

  textoAcaoSegundariaDevolucaoModal() {
    if (this.nao == 2) return "Não devolvido";
    return "Remover";
  }

  buscarTextoModalRecusar() {
    return "Tem certeza que deseja recusar?";
  }

  buscarTextoBotaoModalRecusar() {
    return "Recusar";
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

  ordernar() {
    this.abrirModal(true);
  }

  fecharModalOrdenar() {
    this.abrirModal(false);
  }

  cancelarOrdenar() {
    this.abrirModal(false);
  }

  realizarOrdenacao() {
    this.abrirModal(false);
  }

  filtrar() {
    this.modalFiltrar = !this.modalFiltrar;
  }

  fecharModalFiltro() {
    this.modalFiltrar = false;
    this.modalOrdernar = false;
  }

  adicionarClassificacao(){
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
    this.inputClassificacao  = 0;
  }
}
