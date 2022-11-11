import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adicionar-sacola',
  templateUrl: './adicionar-sacola.component.html',
  styleUrls: ['./adicionar-sacola.component.scss']
})

export class AdicionarSacolaComponent implements OnInit {

  @Output() fecharModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void { }

  fecharModalAnexos() {
    this.fecharModal.emit();
  }

}
