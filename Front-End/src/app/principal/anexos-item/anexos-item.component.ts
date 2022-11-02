import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-anexos-item',
  templateUrl: './anexos-item.component.html',
  styleUrls: ['./anexos-item.component.scss']
})
export class AnexosItemComponent implements OnInit {

  // Input para receber as características do item
  @Input() item = { id: 0, nome: "", caracteristicas: "", quantidade: 0, descartavel: false, imagem: {dados: "", id: 0, nome: "", tipo: ""}, classificacao: 0, anexos: [ { descricao: "", anexo: "" } ] };

  // Output para fechar o modal e abrir novamente o modal de reserva
  @Output() fecharModal = new EventEmitter();
  
  constructor() {
    console.log(this.item)
  }

  ngOnInit() {
  
  }

  fecharModalAnexos() {
    this.fecharModal.emit();
  }

}
