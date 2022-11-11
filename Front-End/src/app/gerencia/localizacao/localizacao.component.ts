import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  color: ThemePalette;
}

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss']
})
export class LocalizacaoComponent implements OnInit {
  checked: boolean = true;

  constructor() { }

  @Output() localizacoesSelecionadasByUser = new EventEmitter<any[]>();
  @Input() localizacoes: any = [{ id: Number, idPai : Number, nome: String, checked: Boolean }];
  @Input() localizacoesSelecionadas: any[] = [];
  // Variávle para saber se o checkbox de selecionar todas as localizações da página está selecionado
  // Importante na hora de deselecionar uma localização, pois caso o checkbox esteja selecionado, todas as localizações da página vão ser deselecionadas
  //e não podem ser removidas da lista, pois a localização estava sumindo no home.
  @Input() allSelected: boolean = false;

  ngOnInit(): void {
  }

  // Função para selecionar ou deselecionar uma localização
  selecionarRow(localizacao: any) {
    if(!localizacao.checked) {
      this.localizacoesSelecionadas.push(localizacao);
    } else {
      if (!this.allSelected) {
        this.removerLocalizacao(localizacao);
      }
    }
    localizacao.checked = !localizacao.checked;
    this.localizacoesSelecionadasByUser.emit(this.localizacoesSelecionadas);
  }

  // Função para remover uma localização da lista de localizações selecionadas
  removerLocalizacao(localizacao : any) {
    for (let i = 0; i < this.localizacoesSelecionadas.length; i++) {
      if(this.localizacoesSelecionadas[i].id == localizacao.id) {
        this.localizacoesSelecionadas.splice(i, 1);
      }
    }
  }

  getClass(localizacao: any) {
    if (localizacao.checked) 
      return 'table-active';
    return '';
  }
}
