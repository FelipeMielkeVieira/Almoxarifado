import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Input() lista;

  textoDescartavel: string;
  aparecer: boolean = false;
  feedback = 0;
  qtd: number = 1;

  calendarioAberto1: number = 0;
  calendarioAberto2: number = 0;
  data1: string = "__/__/____ 00:00";
  data2: string = "__/__/____ 00:00";

  requisicaoSenha = 0;

  listaProfessores = this.buscarProfessores();


  constructor() { }

  ngOnInit() {
    if (this.item.descartavel) {
      this.textoDescartavel = "Descartável"
    } else {
      this.textoDescartavel = "Não Descartável"
    }
  }

  abrirModalItem() {
    this.aparecer = true;
  }

  fecharModal() {
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
    this.aparecer = false;
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }

  fechar() {
    this.feedback = 0;
  }

  atendente() {
    let usuario = parseInt(localStorage.getItem("usuario"));
    if (usuario == 2 || usuario == 3)
      return true;
    return false
  }

  buscarProfessores() {
    return [{ id: 1, nome: "Professor 1" }, { id: 2, nome: "Professor 2" },
    { id: 3, nome: "Professor 3" }, { id: 4, nome: "Professor 4" },
    { id: 5, nome: "Professor 5" }];
  }

}
