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

  tipoUser:number = 0;
  textoDescartavel: string;
  // @Input() item: any;

  //Dizer se o item é descartável ou não
  ngOnInit() {
    if (this.item.descartavel) {
      this.textoDescartavel = "Descartável"
    } else {
      this.textoDescartavel = "Não Descartável"
    }
  }

  // <!-- --------------- ITEM EM SI EM BLOCO ---------------- -->
  @Input() lista;
  @Input() item;
  aparecer: boolean = false;
  // aparecer2: boolean = false;
  aparecer3: boolean = false;
  modalConfirmacao: number = 0;
  cadastrarModal: boolean = false;
  modalHistorico: number = 0;
  aparecer5: boolean = false;

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

  abrirHistorico(){
    this.aparecer5 = true;
    this.modalHistorico = 1;
  }

  removerItem() {
    this.aparecer3 = true;
    this.modalConfirmacao = 1;
  }
  // <!-- --------------- FIM ITEM EM SI EM BLOCO  ---------------- -->

  // <!-- ----------------------------- ITEM EM SI EM LISTA ---------------------------- -->
  // @Input() lista;
  // aparecer: boolean = false;
  // aparecer2: boolean = false;
  // aparecer3: boolean = false;
  // aparecer5: boolean = false;
  // cadastrarModal: boolean = false;
  // modalConfirmacao: number = 0;
  // modalHistorico: number = 0;

  // abrirModalItem() {
  //   document.documentElement.style.overflow = 'hidden';
  //   if (!this.aparecer) {
  //     this.aparecer = true;
  //   }
  // }

  // abrirModalEditar() {
  //   this.aparecer2 = true;
  //   this.cadastrarModal = true;
  // }

  // abrirHistorico(){
  //   this.aparecer5 = true;
  //   this.modalHistorico = 1;
  // }

  // removerItem() {
  //   this.aparecer3 = true;
  //   this.modalConfirmacao = 1;
  // }

  // <!-- ----------------------------- FIM ITEM EM SI EM LISTA ---------------------------- -->
  
// <!-- ----------------------------- FEEDBACK ITEM RESERVADO COM SUCESSO ---------------------------- -->
feedback: number = 0;
// aparecer2: boolean = false;

fechar() {
  this.feedback = 0;
  this.aparecer2 = false;
}
// <!-- ----------------------------- fim FEEDBACK ITEM RESERVADO COM SUCESSO ---------------------------- -->
  
// <!-- ----------------------------- FEEDBACK ITEM EDITADO COM SUCESSO ---------------------------- -->
// feedback: number = 0;
// aparecer2: boolean = false;

// fechar() {
//   this.feedback = 0;
//   this.aparecer2 = false;
// }
// <!-- ----------------------------- FIM FEEDBACK ITEM EDITADO COM SUCESSO ---------------------------- -->
  
// <!-- ----------------------------- MODAL ITEM ABERTO ---------------------------- -->
calendarioAberto1: number = 0;
calendarioAberto2: number = 0;
// aparecer: boolean = false;
aparecer2: boolean = false;
aparecer4: boolean = false;
modalAnexos: number = 0;
qtd: number = 1;
// feedback: number = 0;
// @Input() item;

data1: Date = new Date();
data2: Date = new Date();

fecharModal() {
  document.documentElement.style.overflow = 'auto';
  this.aparecer = false;
}

buscarClassificacao(codigoClassificacao) {
  return "Classificação"
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

formatarData(data: string) {
  let dataNova = new Date(data).toLocaleString();
  if(dataNova == "Invalid Date") {
    return "00/00/0000 00:00:00"
  } else {
    return dataNova;
  }
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

atendente() {
  let usuario = parseInt(localStorage.getItem("usuario"));
  if (usuario == 2 || usuario == 3 || usuario == 4)
    return true;
  return false
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

verAnexos() {
  this.aparecer4 = true;
  this.modalAnexos = 1;
}

salvarData1(data) {
  this.calendarioAberto1 = 0;
  this.data1 = data;
}

salvarData2(data) {
  this.calendarioAberto2 = 0;
  this.data2 = data;
}

// <!-- ----------------------------- FIM MODAL ITEM ABERTO ---------------------------- -->

// <!-- ----------------------------- MODAL EDITAR ITEM ---------------------------- -->
// aparecer: boolean = false;
// aparecer2: boolean = false;
// cadastrarModal: boolean = false;
// motivoEdicao: boolean = false;
nao: number = 0;

listaClassificacao = [{ nome: "Nome classificacao" }];

fecharModalCadastrar() {
  this.aparecer = false;
  this.aparecer2 = false;
  this.cadastrarModal = false;
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
  this.aparecer = false;
  this.aparecer2 = false;
  this.motivoEdicao = false;
  this.cadastrarModal = false;
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
  listaItens2 = [];
  // @Input() item;
  // feedback: number = 0;

  cancelar() {
    this.aparecer3 = false;
    this.modalConfirmacao = 0;
  }

  selectItem() {
    this.aparecer3 = false;
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
  
// <!-- ----------------------------- FEEDBACK REMOVIDO COM SUCESSO ---------------------------- -->
// feedback: number = 0;

// fechar() {
//   this.feedback = 0;
//   this.aparecer2 = false;
// }
// <!-- ----------------------------- FIM FEEDBACK REMOVIDO COM SUCESSO ---------------------------- -->
  
// <!-- ----------------------------- MODAL VER ANEXOS ---------------------------- -->
// aparecer4: boolean = false;
// modalAnexos: number = 0;
// @Input() item;

fecharModalAnexos(){
  this.aparecer4 = false;
  this.modalAnexos = 0;
}
// <!-- ----------------------------- FIM MODAL VER ANEXOS ---------------------------- -->
  
// <!-- ----------------------------- MODAL HISTÓRICO DE EDIÇÃO ---------------------------- -->
// aparecer5: boolean = false;
// modalHistorico: number = 0;

fecharModalHistorico(){
  this.aparecer5 = false;
  this.modalHistorico = 0;
}
// <!-- ----------------------------- FIM MODAL HISTÓRICO DE EDIÇÃO ---------------------------- -->
}
