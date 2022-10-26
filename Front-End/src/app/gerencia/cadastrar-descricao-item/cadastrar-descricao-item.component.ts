import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastrar-descricao-item',
  templateUrl: './cadastrar-descricao-item.component.html',
  styleUrls: ['./cadastrar-descricao-item.component.scss']
})
export class CadastrarDescricaoItemComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
