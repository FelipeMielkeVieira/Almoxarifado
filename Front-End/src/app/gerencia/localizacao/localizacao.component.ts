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

  ngOnInit(): void {
  }

  selecionarRow(localizacao: any) {
    localizacao.checked = !localizacao.checked;
  }

  getClass(localizacao: any) {
    if (localizacao.checked) 
      return 'table-active';
    return '';
  }
}
