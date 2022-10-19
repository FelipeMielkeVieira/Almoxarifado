import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private service: UsersService) {
    this.listaItens2 = service.itens;
    this.tipoUser = parseInt(localStorage.getItem("usuario") || "");
  }

  tipoUser: number = 0;

  ngOnInit() { }

  // <!-- --------------- ITEM EM SI EM BLOCO ---------------- -->

  // Input para definir se o item está sendo visualizado em bloco ou em lista
  @Input() visualizacaoItem: string = "emLista";

  // Input com o objeto do item recebido da lista
  @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: 0 };

  modalReservar: boolean = false;
  modalEditar: boolean = false;
  modalConfirmarRemocao: boolean = false;

  modalConfirmacao: number = 0;
  modalAnexos: boolean = false;
  modalHistorico: boolean = false;

  feedbackReservaFeita = false;
  feedbackColocadoSacola = false;

  // Return das classes para visualização do item
  // Número - número definido do elemento HTML
  retornarClassesVisualizacao(numero: number) {
    switch (numero) {
      case 1:
        if (this.visualizacaoItem == "emLinha") {
          return "quadroItemLista";
        } else {
          return "quadroItemBloco";
        }
      case 2:
        if (this.visualizacaoItem == "emLinha") {
          return "imgProdutoLista";
        } else {
          return "imgProdutoBloco";
        }
      case 3:
        if (this.visualizacaoItem == "emLinha") {
          return "descricaoProdutoLista";
        } else {
          return "descricaoItemBloco";
        }
      case 4:
        if (this.visualizacaoItem == "emLinha") {
          return "infoItemLista";
        } else {
          return "infoItemBloco";
        }
    }
    return "";
  }

  // Retorna uma string se o item é descartável ou não dependendo do atributo boolean do objeto recebido
  retornaTextoDescartavel() {
    if (this.item.descartavel) {
      return "Descartável"
    } else {
      return "Não Descartável"
    }
  }

  // Função para deixar visível o modal de reserva do item
  abrirModalReserva() {
    this.modalReservar = true;
  }

  abrirModalEditar() {
    this.modalEditar = true;
  }

  abrirHistorico() {
    this.modalHistorico = true;
  }

  removerItem() {
    this.modalConfirmarRemocao = true;
    this.modalConfirmacao = 1;
  }
  // <!-- --------------- FIM ITEM EM SI EM BLOCO  ---------------- -->

  // <!-- ----------------------------- FEEDBACK ITEM RESERVADO COM SUCESSO ---------------------------- -->
  // aparecer2: boolean = false;
  // <!-- ----------------------------- fim FEEDBACK ITEM RESERVADO COM SUCESSO ---------------------------- -->

  // <!-- ----------------------------- FEEDBACK ITEM EDITADO COM SUCESSO ---------------------------- -->
  // feedback: number = 0;
  // aparecer2: boolean = false;

  // fechar() {
  //   this.feedback = 0;
  //   this.aparecer2 = false;
  // }
  // <!-- ----------------------------- FIM FEEDBACK ITEM EDITADO COM SUCESSO ---------------------------- -->


  // <!-- ----------------------------- MODAL EDITAR ITEM ---------------------------- -->
  // aparecer: boolean = false;
  // aparecer2: boolean = false;
  // cadastrarModal: boolean = false;
  // motivoEdicao: boolean = false;
  nao: number = 0;

  feedback: number = 0;
  fechar() {

  }

  listaClassificacao = [{ nome: "Nome classificacao" }];

  fecharModalCadastrar() {
    this.modalReservar = false;
    this.modalEditar = false;
  }

  editarItem() {
    this.motivoEdicao = true;
    this.nao = 0;
  }
  // <!-- ----------------------------- FIM MODAL EDITAR ITEM ---------------------------- -->

  // <!-- ----------------------------- MODAL MOTIVO EDIÇÃO QUANTIDADE ITENS ---------------------------- -->
  // aparecer: boolean = false;
  // aparecer2: boolean = false;
  // cadastrarModal: boolean = false;
  // nao: number = 0;
  // feedback: number = 0;
  motivoEdicao: boolean = false;

  fecharModalMotivo() {
    this.motivoEdicao = false;
  }

  editarQuantidade() {
    this.modalReservar = false;
    this.modalEditar = false;
    this.motivoEdicao = false;
    this.nao = 0;
    this.feedback = 2;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }
  // <!-- ----------------------------- FIM MODAL MOTIVO EDIÇÃO QUANTIDADE ITENS ---------------------------- -->

  // <!-- ----------------------------- MODAL CONFIRMAR REMOÇÃO ---------------------------- -->
  // aparecer3: boolean = false;
  // modalConfirmacao: number = 0;
  listaItens2: { id: number; nome: string; descricao: string; quantidade: number; descartavel: boolean; imagem: string; classificacao: number; }[] = [];
  // @Input() item;
  // feedback: number = 0;

  cancelar() {
    this.modalConfirmarRemocao = false;
    this.modalConfirmacao = 0;
  }

  selectItem() {
    this.modalConfirmarRemocao = false;
    this.modalConfirmacao = 0;

    let contagem = 0;
    for (let item2 of this.listaItens2) {
      if (item2.id == this.item.id) {
        this.service.itens.splice(contagem, 1);
        break;
      }
      contagem++;
    }

    this.feedback = 3;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }
  // <!-- ----------------------------- FIM MODAL CONFIRMAR REMOÇÃO ---------------------------- -->

  // <!-- ----------------------------- MODAL HISTÓRICO DE EDIÇÃO ---------------------------- -->
  // aparecer5: boolean = false;
  // modalHistorico: number = 0;

  fecharModalHistorico() {
    this.modalHistorico = false;
  }
  // <!-- ----------------------------- FIM MODAL HISTÓRICO DE EDIÇÃO ---------------------------- -->

  // Função para fechar os modais de reserva, edição, etc... do item
  fecharModaisItem(numero: number, event: any) {
    switch (numero) {
      case 1:
        this.modalReservar = false;
        if (event == "reservar") {
          this.feedbackReservaFeita = true;
          setTimeout(() => {
            this.feedbackReservaFeita = false;
          }, 4000);
        }
        if (event == "sacola") {
          this.feedbackColocadoSacola = true;
          setTimeout(() => {
            this.feedbackColocadoSacola = false;
          }, 4000);
        }
        break;
    }
  }

  // Função para fechar os modais de feedback sobre ações do item
  fecharModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackReservaFeita = false;
        break;
      case 2:
        this.feedbackColocadoSacola = false;
        break;
    }
  }
}