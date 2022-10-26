import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastrar-localizacao-modal',
  templateUrl: './cadastrar-localizacao-modal.component.html',
  styleUrls: ['./cadastrar-localizacao-modal.component.scss']
})
export class CadastrarLocalizacaoModalComponent implements OnInit {
  @Output() fecharModal = new EventEmitter<string>();

  localizacao: String = "";
  localizacaoPai: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.fecharModal.emit('fechar');
  }

  cadastrar() {
    console.log(this.localizacao);
    console.log(this.localizacaoPai);
    this.close();
  }

}
