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
  @Input() item = { id: 0, nome: "", caracteristicas: "", quantidade: 0, descartavel: false, imagem: {dados: "", id: 0, nome: "", tipo: ""}, classificacao: 0 };;

  // Variável de quantidade dos itens a serem reservados
  qtdItem: number = 1;

  // Variáveis para mostrar e esconder os calendários para reserva
  calendarioRetirada: boolean = false;
  calendarioDevolucao: boolean = false;

  // Datas definidas para retirada e devolução feitas pelos calendários
  dataRetirada: any = new Date();
  dataDevolucao: any = new Date();

  // Variavel para enviar alerta de dados faltantes
  feedbackDados: boolean = false;

  ngOnInit() {
    console.log("mano ta aq");
    console.log("a", this.item)
    if (this.item.quantidade <= 0) {
      document.getElementById("professores")?.setAttribute("disabled", "true");
    }
  }

  // Função para fechar o modal, enviando um output recebido
  fecharModalReserva(evento: string) {
    this.fecharModal.emit(evento);
  }

  // Retorna uma string se o item é descartável ou não dependendo do atributo boolean do objeto recebido
  retornaTextoDescartavel() {
    if (this.item.descartavel) {
      return "Descartável"
    }
    return "Não Descartável"
  }

  // Retorna o nome de uma classificacao através do id recebido pelo item
  buscarClassificacao(codigoClassificacao: number) {
    for (const classificacao of this.service.classificacoes) {
      if (classificacao.id == codigoClassificacao) {
        return classificacao.classificacao;
      }
    }
    return "Nenhuma";
  }

  // Função para mudar a quantidade do item a ser reservado (1 -> +  ||  2 -> -)
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

  // Função que retorna uma das variáveis de data em formatação brasileira
  formatarData(data: any) {
    let dataNova = new Date(data).toLocaleString();
    if (dataNova == "Invalid Date") {
      return "00/00/0000 00:00:00"
    }
    return dataNova;
  }

  // Função para abrir os calendários (1 -> retirada || 2 -> devolução)
  abrirCalendario(numero: number) {
    if (numero == 1) {
      if (!this.calendarioRetirada) {
        this.calendarioDevolucao = false;
        this.calendarioRetirada = true;
      } else {
        this.calendarioRetirada = false;
      }
    } else {
      if (!this.calendarioDevolucao) {
        this.calendarioRetirada = false;
        this.calendarioDevolucao = true;
      } else {
        this.calendarioDevolucao = false;
      }
    }
  }

  // Função que retorna se um usuário é atendente ou supervisor, para que possa fazer uma reserva no nome de um professor
  retornarUsuarioGerencia() {
    let usuario = parseInt(localStorage.getItem("usuario") || "");
    if (usuario == 2 || usuario == 3 || usuario == 4)
      return true;
    return false
  }

  // Função que efetua a reserva do item
  retornarProfessor() {
    const professor = document.getElementById("professores") as HTMLInputElement;
    return professor.value;
  }

  reservar() {
    if (this.item.quantidade > 0) {
      if (!this.retornarUsuarioGerencia()) {
        this.fecharModalReserva("reservar");
      } else {
        if (this.retornarProfessor() != "") {
          this.fecharModalReserva("reservar");
        } else {
          this.feedbackDados = true;
          setTimeout(() => {
            this.feedbackDados = false;
          }, 4500);
        }
      }
    } else {
      this.feedbackDados = true;
      setTimeout(() => {
        this.feedbackDados = false;
      }, 4500);
    }
  }

  fecharModalAlerta(numeroModal: any) {
    this.feedbackDados = false;
  }

  // Função que envia um Output para fechar o modal e abrir o modal de anexos do item
  verDetales() {
    this.fecharModalReserva("anexos");
  }

  // Função para salvar as datas advindas do calendário, chamada por um Output do componente "Calendario"
  salvarData(numero: number, data: any) {
    if (numero == 1) {
      this.calendarioRetirada = false;
      this.dataRetirada = data;
    } else {
      this.calendarioDevolucao = false;
      this.dataDevolucao = data;
    }
  }

  // Função para emitir Output para fechar o modal e emitir um feeback de "item adicionado na sacola"
  adicionarSacola() {
    if (this.qtdItem > 0 && this.item.quantidade > 0) {
      this.fecharModalReserva("sacola");
    }
  }

  // Função para determinar se o input de adicionar professor está habilitado ou não
  isDisabled() {
    if (this.item.quantidade > 0) {
      return false;
    }
    return true;
  }
}