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

  feedbackDados: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.fecharModal.emit('fechar');
  }

  cadastrar() {
    if (this.localizacao != "" && this.localizacaoPai != "") {
      this.close();
    } else {
      this.feedbackDados = true;
      setTimeout(() => {
        this.feedbackDados = false;
      }, 4500);
    } 
  }

  fecharModalAlerta(numeroModal: any) {
    this.feedbackDados = false;
  }
}
