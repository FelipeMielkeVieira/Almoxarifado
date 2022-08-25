import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor(private service: UsersService) {
    this.listaItens2 = service.itens;
    this.tipoUser = parseInt(localStorage.getItem("usuario"));
  }

  ngOnInit() {
    if (this.item.descartavel) {
      this.textoDescartavel = "Descartável"
    } else {
      this.textoDescartavel = "Não Descartável"
    }
  }

  @Input() item;
  @Input() lista;

  tipoUser = 0;

  textoDescartavel: string;
  aparecer: boolean = false;
  aparecer3: boolean = false;
  aparecer4: boolean = false;
  aparecer2: boolean = false;
  cadastrarModal: boolean = false;
  modalAnexos: number = 0;
  qtd: number = 1;
  feedback: number = 0;
  modalConfirmacao: number = 0;
  editar: number = 0;
  requisicaoSenha: number = 0;

  calendarioAberto1: number = 0;
  calendarioAberto2: number = 0;
  data1: string = "__/__/____ 00:00";
  data2: string = "__/__/____ 00:00";


  listaItens2 = [];

  localizacaoModal: boolean = false;
  devolucaoModal: boolean = false;
  informarDefeitoModal: boolean = false;
  localizacao: number = 0
  listaItens: number = 0
  confirmarRetirada: number = 0
  baixaDevolucoes: number = 1
  aparecerEspecificacaoReserva: boolean = false;
  nao = 0;
  cadastroProduto: number = 0;
  codUser: number;

  paredeCentro = [];
  armario = [];
  porta = [];
  localizacoesFiltradas = [];
  localizacaoAtual = "paredeCentro";

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
    this.aparecer2 = false;
    this.cadastrarModal = false;
  }

  telaLocalizacoes() {
    this.listaItens = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 0
    this.localizacao = 1

    let semAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#confirmarRetirada') as HTMLElement;
    semAzul2.className = "semAzul"
    let semAzul3 = document.querySelector('#listaItens') as HTMLElement;
    semAzul3.className = "semAzul"
    if (this.codUser == 3) {
      let comAzul = document.querySelector('#localizacoes') as HTMLElement;
      comAzul.className = "comAzul"
    }
  }

  telaListaItens() {
    this.localizacao = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 0
    this.listaItens = 1

    let semAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#confirmarRetirada') as HTMLElement;
    semAzul2.className = "semAzul"
    if (this.codUser == 3) {
      let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      semAzul3.className = "semAzul"
    }
    let comAzul = document.querySelector('#listaItens') as HTMLElement;
    comAzul.className = "comAzul"
  }

  telaConfirmarRetirada() {
    this.localizacao = 0;
    this.listaItens = 0;
    this.baixaDevolucoes = 0;
    this.confirmarRetirada = 1;

    let semAzul1 = document.querySelector('#baixaDevolucoes') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    if (this.codUser == 3) {
      let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      semAzul3.className = "semAzul"
    }
    let comAzul = document.querySelector('#confirmarRetirada') as HTMLButtonElement;
    comAzul.className = "comAzul"
  }

  telaBaixaDevolucoes() {
    this.localizacao = 0
    this.listaItens = 0
    this.confirmarRetirada = 0
    this.baixaDevolucoes = 1

    let semAzul1 = document.querySelector('#confirmarRetirada') as HTMLElement;
    semAzul1.className = "semAzul"
    let semAzul2 = document.querySelector('#listaItens') as HTMLElement;
    semAzul2.className = "semAzul"
    if (this.codUser == 3) {
      let semAzul3 = document.querySelector('#localizacoes') as HTMLElement;
      semAzul3.className = "semAzul"
    }
    let comAzul = document.querySelector('#baixaDevolucoes') as HTMLElement;
    comAzul.className = "comAzul"
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

  informarDefeitoItem() {
    this.devolucaoModal = false;
    this.informarDefeitoModal = true;
  }

  voltarDevolucaoItens() {
    this.informarDefeitoModal = false;
    this.devolucaoModal = true;
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

  cadastrar() {
    this.aparecer = false;
    this.aparecer2 = false;
    this.cadastrarModal = false;
    this.nao = 0;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  editarItem() {
    this.aparecer = false;
    this.aparecer2 = false;
    this.cadastrarModal = false;
    this.nao = 0;
    this.feedback = 2;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  cadastrar2() {
    this.aparecer = false;
    this.aparecer2 = false;
    this.cadastrarModal = false;
    this.nao = 3;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  filtrarLocalizacao() {
    if (this.localizacaoAtual == "paredeCentro") {
      this.localizacoesFiltradas = this.paredeCentro;
    }
    if (this.localizacaoAtual == "armario") {
      this.localizacoesFiltradas = this.armario;
    }
    if (this.localizacaoAtual == "porta") {
      this.localizacoesFiltradas = this.porta;
    }
  }

  abrirModalItem() {
    document.documentElement.style.overflow = 'hidden';
    if (!this.aparecer) {
      this.aparecer = true;
    }
  }

  abrirModalEditar() {
    this.aparecer2 = true;
    this.cadastrarModal = true;
  }

  fecharModal() {
    document.documentElement.style.overflow = 'auto';
    this.aparecer = false;
  }

  mudarQtd(variavel) {
    if (variavel == 1) {
      if (this.qtd < this.item.quantidade) {
        this.qtd++;
      }
    } else {
      if (this.qtd > 1) {
        this.qtd--;
      }
    }
  }

  buscarClassificacao(codigoClassificacao) {
    return "Classificação"
  }

  abrirCalendario(numero) {
    if (numero == 1) {
      this.calendarioAberto2 = 0;
      this.calendarioAberto1 = 1;
    } else {
      this.calendarioAberto1 = 0;
      this.calendarioAberto2 = 1;
    }
  }

  salvarData1(data) {
    this.calendarioAberto1 = 0;
    this.data1 = data;
  }

  salvarData2(data) {
    this.calendarioAberto2 = 0;
    this.data2 = data;
  }

  reservar() {
    if(this.item.quantidade > 0) {
      document.documentElement.style.overflow = 'auto';
      this.aparecer = false;
      this.aparecer2 = false;
      this.feedback = 1;
      setTimeout(() => {
        this.feedback = 0;
      }, 5000);
    }
  }

  adicionarNaSacola() {
    document.documentElement.style.overflow = 'auto';
  }

  fechar() {
    this.feedback = 0;
    this.aparecer2 = false;
  }

  atendente() {
    let usuario = parseInt(localStorage.getItem("usuario"));
    if (usuario == 2 || usuario == 3 || usuario == 4)
      return true;
    return false
  }

  removerItem() {
    this.aparecer3 = true;
    this.modalConfirmacao = 1;
  }

  cancelar() {
    this.aparecer3 = false;
    this.modalConfirmacao = 0;
  }

  selectItem() {
    let contagem = 0;
    for (let item2 of this.listaItens2) {
      if (item2.id == this.item.id) {
        this.service.itens.splice(contagem, 1);
        break;
      }
      contagem++;
    }

    this.aparecer3 = false;
    this.modalConfirmacao = 0;
    this.feedback = 3;
  }

  verAnexos() {
    this.aparecer4 = true;
    this.modalAnexos = 1;
  }

  fecharModalAnexos(){
    this.aparecer4 = false;
    this.modalAnexos = 0;
  }
}
