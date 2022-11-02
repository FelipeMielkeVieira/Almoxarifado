import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-ocorrencia',
  templateUrl: './modal-ocorrencia.component.html',
  styleUrls: ['./modal-ocorrencia.component.scss']
})
export class ModalOcorrenciaComponent implements OnInit {

  constructor() { }

  // Input para definir qual a ocorrência que será aberta
  // 1 - Cancelamento de Reserva
  // 2 - Remoção de Itens da Reserva
  // 3 - Defeito em Item na Devolução
  // 4 - Item não Devolvido na Devolução
  @Input() tipoOcorrencia = 0;

  @Output() fecharModal = new EventEmitter<string>();

  ngOnInit(): void {}

  textArea: String = "";
  alertaDados: boolean = false;

  retornaTextoOcorrencia() {
    switch(this.tipoOcorrencia) {
      case 1:
        return "Motivo do Cancelamento";
        case 2:
          return "Motivo da Remoção";
          case 3:
            return "Atraso de Devolução";
            case 4:
              return "Informar Defeito";
            }
            return "";
          }
          
          fecharModalOcorrencia(texto: string) {
    this.fecharModal.emit(texto);
  }
  
  
  salvarOcorrencia() {  
    if(this.textArea != "") {
      this.fecharModalOcorrencia("salvar");
    } else {
      this.alertaDados = true;
      setTimeout(() => {
        this.alertaDados = false;
      }, 4500);
    }
  }
  
  fecharModalAlerta(numeroModal: any) {
    this.alertaDados = false;
  }

}
