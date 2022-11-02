import { Component, Input, OnInit } from '@angular/core';
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

  @Input() localizacoes: any = [{ id: Number, idPai : Number, nome: String }];
  localizacoe: any = [
    { id: 1, idPai: 0, nome: 'São Paulo' },
    { id: 2, idPai: 1, nome: 'Rio de Janeiro' },
    { id: 3, idPai: 2, nome: 'Minas Gerais' },
    { id: 4, idPai: 3, nome: 'São Paulo - Capital' },
    { id: 5, idPai: 4, nome: 'São Paulo - Interior' },
    { id: 6, idPai: 5, nome: 'Rio de Janeiro - Capital' },
    { id: 7, idPai: 6, nome: 'Rio de Janeiro - Interior' },
    { id: 1, idPai: 0, nome: 'São Paulo' },
    { id: 2, idPai: 1, nome: 'Rio de Janeiro' },
    { id: 3, idPai: 2, nome: 'Minas Gerais' },
    { id: 4, idPai: 3, nome: 'São Paulo - Capital' },
    { id: 5, idPai: 4, nome: 'São Paulo - Interior' },
    { id: 6, idPai: 5, nome: 'Rio de Janeiro - Capital' },
    { id: 7, idPai: 6, nome: 'Rio de Janeiro - Interior' },
    { id: 1, idPai: 0, nome: 'São Paulo' },
    { id: 2, idPai: 1, nome: 'Rio de Janeiro' },
    { id: 3, idPai: 2, nome: 'Minas Gerais' },
    { id: 4, idPai: 3, nome: 'São Paulo - Capital' },
    { id: 5, idPai: 4, nome: 'São Paulo - Interior' },
    { id: 6, idPai: 5, nome: 'Rio de Janeiro - Capital' },
    { id: 7, idPai: 6, nome: 'Rio de Janeiro - Interior' },
  ];

  @Input() localizacoesSelecionadas: any[] = [];

  ngOnInit(): void {
  }

  // Função para selecionar ou deselecionar uma localização
  selecionarRow(localizacao: any) {
    if(!localizacao.checked) {
      this.localizacoesSelecionadas.push(localizacao);
    } else {
      this.removerLocalizacao(localizacao);
    }
    localizacao.checked = !localizacao.checked;
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
