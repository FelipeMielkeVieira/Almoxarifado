import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home-supervisor',
  templateUrl: './home-supervisor.component.html',
  styleUrls: ['./home-supervisor.component.css']
})
export class HomeSupervisorComponent implements OnInit {

  constructor(private service: UsersService) {
    this.listaItens2 = service.itens;
    this.localizacoesLista = service.localizacoes;
    this.localizacoesFiltradas = this.localizacoesLista;
  }

  listaItens2;
  inputGeral = "";

  ngOnInit() {

  }

  localizacaoAtual = "paredeCentro";
  localizacoesFiltradas = [];
  localizacoesLista = [];

  contadorRecusar = 0;
  contadorAceitar = 0;
  gerenciaUsuarios = 1;
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

  informarDefeitoModal: boolean = false;
  devolucaoModal: boolean = false;
  nao = 0;

  emBloco = 0;

  modalRecusar() {
    this.contadorRecusar = 1;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '0.5';
  }

  modalAceitar() {
    this.contadorAceitar = 1;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '0.5';
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
  }

  cadastrarProduto() {
    this.aparecer = false;
    this.cadastrarModal = false;
    this.nao = 0;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  botaoConfirmarRetirada() {
    this.devolucaoModal = false;
    this.aparecer = false;
    this.nao = 1;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  abrirDevolucao(numero) {
    this.devolucaoModal = true;
    this.aparecer = true;
    if (numero == 2) {
      this.nao = 1;
    } else {
      this.nao = 2;
    }
  }

  fecharModalBaixaDevolucao() {
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  darBaixaDevolucao() {
    this.devolucaoModal = false;
    this.aparecer = false;
    this.nao = 2;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
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

  cancelar() {
    this.contadorRecusar = 0;
    this.contadorAceitar = 0;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '1';
  }

  gerenciarCadastros() {
    this.gerenciaCadastros = 1;
    this.gerenciaUsuarios = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#retirada') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#gerenciarCadastros') as HTMLElement;
    comAzul.className = "comAzul"
  }

  mostrarEmBloco() {
    this.emBloco = 0;
  }

  mostrarEmLista() {
    this.emBloco = 1;
  }

  gerenciarUsuarios() {
    this.gerenciaUsuarios = 1;
    this.gerenciaCadastros = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#retirada') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    comAzul.className = "comAzul"
  }

  baixaDevolucoes() {
    this.devolucoes = 1;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.retirada = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#retirada') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#devolucoes') as HTMLElement;
    comAzul.className = "comAzul"
  }

  confirmarRetirada() {
    this.retirada = 1;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.listaItens = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#retirada') as HTMLElement;
    comAzul.className = "comAzul"
  }

  listaDeItens() {
    this.listaItens = 1;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#retirada') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#listaItens') as HTMLElement;
    comAzul.className = "comAzul"
  }

  localizacoes() {
    this.contLocalizacoes = 1;
    this.listaItens = 0;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;

    let semAzul1 = document.querySelector('#devolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#retirada') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#listaItens') as HTMLElement;
    semAzul3.className = "semAzul"
    let semAzul4 = document.querySelector('#gerenciarCadastros') as HTMLElement;
    semAzul4.className = "semAzul"
    let semAzul5 = document.querySelector('#gerenciarUsuarios') as HTMLElement;
    semAzul5.className = "semAzul"


    let comAzul = document.querySelector('#localizacoes') as HTMLElement;
    comAzul.className = "comAzul"
  }

  excluirLocalizacao(index: number) {
    let loc = this.localizacoesFiltradas[index];
    let index1 = this.service.localizacoes.findIndex((e) => {
      if(e.nome == loc.nome) {
        return true;
      };
      return false;
    })
    if(index1 != -1) {
      this.service.localizacoes.splice(index1, 1);
    }
  }

  pesquisaLocalizacao() {
    var self = this;
    const listaFiltrada = this.localizacoesLista.filter(function(a) {
      return a.nome.toLowerCase().indexOf(self.inputGeral.toLowerCase()) > -1
    });
    this.localizacoesFiltradas = listaFiltrada;
  }

  adicionarLocalizacao() {
    if(this.localizacoesItem < 6) {
      this.localizacoesItem++;
    }
  }

  diminuirLocalizacao() {
    if(this.localizacoesItem > 0) {
      this.localizacoesItem--;
    }
  }

  acaoSegundariaDevolucaoModal() {
    if (this.nao == 2)
      this.produtoNaoDevolvido()
    this.removerProdutoSacola()
  }

  produtoNaoDevolvido() {
    //fazer lógica para dizer que o item não foi devolvido
    //desse jeito, a sacola ainda vai existir com os itens não devolvidos
  }

  removerProdutoSacola() {
    //item deve ser removido da sacola
  }

  textoAcaoSegundariaDevolucaoModal() {
    if (this.nao == 2)
      return "Não devolvido";
    return "Remover"
  }

}
