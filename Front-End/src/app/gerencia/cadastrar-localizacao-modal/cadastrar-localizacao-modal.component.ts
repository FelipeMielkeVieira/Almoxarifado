import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalizacaoService } from 'src/app/service/localizacaoService';

@Component({
  selector: 'app-cadastrar-localizacao-modal',
  templateUrl: './cadastrar-localizacao-modal.component.html',
  styleUrls: ['./cadastrar-localizacao-modal.component.scss']
})
export class CadastrarLocalizacaoModalComponent implements OnInit {
  @Output() fecharModal = new EventEmitter<string>();
  @Input() primeirasLocalizacoes: any[] = [];

  listaLocalizacoes: any[] = [];

  localizacao: String = "";
  localizacaoPai: String = "";

  feedbackDados: boolean = false;
  listaLocalizacoesEscolhidas: any = [null];

  constructor(private localizacaoService : LocalizacaoService) {
  }

  ngOnInit(): void {
    this.listaLocalizacoes.push(this.primeirasLocalizacoes)
  }

  buscarPorPai(id : any) {
    this.localizacaoService.getByPai(id).subscribe(
      data => {
        this.listaLocalizacoes.push(data);
        if (this.listaLocalizacoes[this.listaLocalizacoes.length - 1].length < 1) {
          this.listaLocalizacoes.splice(this.listaLocalizacoes.length - 1, 1);
        }
      },
      error => {console.log(error)},
    )
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

  // Função para editar a escolha de localização
  mudarLocalizacoes(index: number) {

    if (this.listaLocalizacoes.length - 1 != index) {
      this.listaLocalizacoes.splice(index + 1, this.listaLocalizacoes.length - index)
    }

    this.buscarPorPai(this.listaLocalizacoesEscolhidas[index])
  }
}
