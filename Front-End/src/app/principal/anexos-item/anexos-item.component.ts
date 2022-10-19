import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-anexos-item',
  templateUrl: './anexos-item.component.html',
  styleUrls: ['./anexos-item.component.scss']
})
export class AnexosItemComponent implements OnInit {

  // Input para receber as características do item
  @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: 0 };

  // Output para fechar o modal e abrir novamente o modal de reserva
  @Output() fecharModal = new EventEmitter();
  
  constructor() {
  }

  ngOnInit() {
  
  }

  fecharModalAnexos() {
    this.fecharModal.emit();
  }

}
