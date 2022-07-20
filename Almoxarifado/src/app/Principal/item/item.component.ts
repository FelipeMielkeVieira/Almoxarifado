import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;

  textoDescartavel: string;
  aparecer: boolean = false;
  qtd: number = 1;

  calendarioAberto1: number = 0;
  calendarioAberto2: number = 0;
  data1: string = "__/__/____ 00:00";
  data2: string = "__/__/____ 00:00";
  
  constructor() { }

  ngOnInit() {
    if(this.item.descartavel) {
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
    if(variavel == 1) {
      if(this.qtd < this.item.quantidade) {
        this.qtd++;
      }
    } else {
      if(this.qtd > 1) {
        this.qtd--;
      }
    }
  }

  buscarClassificacao(codigoClassificacao) {
    
    return "Classificação"
  }

  abrirCalendario(numero) {
    if(numero == 1) {
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

}
