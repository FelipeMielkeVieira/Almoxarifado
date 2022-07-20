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
  feedback = 0;
  
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

  buscarClassificacao(codigoClassificacao) {
    return "Classificação"
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

}
