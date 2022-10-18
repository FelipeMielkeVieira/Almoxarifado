import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-modal-reservar-item',
  templateUrl: './modal-reservar-item.component.html',
  styleUrls: ['./modal-reservar-item.component.scss']
})
export class ModalReservarItem implements OnInit {
  constructor(private service: UsersService) {
  }

  // Output para fechar o modal, enviando para o componente "Item"
  @Output() fecharModal = new EventEmitter<string>();

  // Item recebido do componente pai
  @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: 0 };;

  // Variável de quantidade dos itens a serem reservados
  qtdItem: number = 1;

  // Variáveis para mostrar e esconder os calendários para reserva
  calendarioRetirada: boolean = false;
  calendarioDevolucao: boolean = false;

  // Datas definidas para retirada e devolução feitas pelos calendários
  dataRetirada: any = new Date();
  dataDevolucao: any = new Date();

  // Variável que define se o modal de anexos está aberto ou não
  modalAnexos: boolean = false;

  ngOnInit() {}

  // Função para fechar o modal, enviando um output recebido
  fecharModalReserva(evento: string) {
    this.fecharModal.emit(evento);
  }

  // Retorna uma string se o item é descartável ou não dependendo do atributo boolean do objeto recebido
  retornaTextoDescartavel() {
    if (this.item.descartavel) {
      return "Descartável"
    } else {
      return "Não Descartável"
    }
  }

  buscarClassificacao(codigoClassificacao: number) {
    for (const classificacao of this.service.classificacoes) {
      if(classificacao.id == codigoClassificacao) {
        return classificacao.classificacao;
      }
    }
    return "Nenhuma";
  }

  mudarQtd(variavel: number) {
    if (variavel == 1) {
      if (this.qtdItem < this.item.quantidade) {
        this.qtdItem++;
      }
    } else {
      if (this.qtdItem > 1) {
        this.qtdItem--;
      }
    }
  }

  formatarData(data: any) {
    let dataNova = new Date(data).toLocaleString();
    if (dataNova == "Invalid Date") {
      return "00/00/0000 00:00:00"
    } else {
      return dataNova;
    }
  }

  abrirCalendario(numero: number) {
    if (numero == 1) {
      this.calendarioDevolucao = false;
      this.calendarioRetirada = true;
    } else {
      this.calendarioRetirada = false;
      this.calendarioDevolucao = true;
    }
  }

  atendente() {
    let usuario = parseInt(localStorage.getItem("usuario") || "");
    if (usuario == 2 || usuario == 3 || usuario == 4)
      return true;
    return false
  }

  reservar() {
    if (this.item.quantidade > 0) {
      this.fecharModalReserva("reservar");
    }
  }

  verAnexos() {
    this.modalAnexos = true;
  }

  salvarData1(data: any) {
    this.calendarioRetirada = false;
    this.dataRetirada = data;
  }

  salvarData2(data: any) {
    this.calendarioDevolucao = false;
    this.dataDevolucao = data;
  }
}