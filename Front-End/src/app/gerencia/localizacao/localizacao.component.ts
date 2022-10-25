import { Component, Input, OnInit } from '@angular/core';

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

}
