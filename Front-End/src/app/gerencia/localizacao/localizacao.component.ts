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

  @Input() localizacoes: any = [{ id: Number, nome: String }];

  ngOnInit(): void {
  }

  selecionarRow(localizacao: any) {
    localizacao.checked = !localizacao.checked;
    // console.log(id);
    // let tr = event.path.find((el: any) => el.nodeName === 'TR');
    // tr.classList.toggle('table-active');
    // console.log(tr);
    // console.log("event: ", event)
    // let checkbox = event.path.find((el: any) => el.nodeName === 'INPUT');
    // checkbox.toggle();
  }

  getClass(localizacao: any) {
    if (localizacao.checked) 
      return 'table-active';
    return '';
  }
}
