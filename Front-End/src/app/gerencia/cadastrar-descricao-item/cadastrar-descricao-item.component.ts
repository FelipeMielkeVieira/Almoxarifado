import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cadastrar-descricao-item',
  templateUrl: './cadastrar-descricao-item.component.html',
  styleUrls: ['./cadastrar-descricao-item.component.scss']
})
export class CadastrarDescricaoItemComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();
  @Output() encaminharArquivos = new EventEmitter<File[]>();

  // Importante! Essa variável vai guardar os arquivos adicionados pelo usuário
  inputFileList: any = [];
  descricao: string = "";

  constructor() {
    
  }

  ngOnInit(): void {
  }

  //Função para fechar modal, emite um evento para o componente pai que irá fechar o modal	
  fechar() {
    this.fecharModal.emit(this.descricao);
  }

  // Cancela e fecha o modal
  cancelar() {
    this.fechar();
  }

  // Salva o item
  salvar() {
    this.encaminharArquivos.emit(this.inputFileList);
    this.fechar();
  }

  // Função adicionada quando o usuário adiciona um arquivo no input de anexo, adiciona uma nova linha na tabela de anexos 
  anexoAdicionado() {
    let inputFile = document.getElementById('anexoInput') as HTMLInputElement;
    this.inputFileList.push.apply(this.inputFileList, inputFile.files);
  }

  // Remove um anexo da tabela de anexos e também do array de arquivos
  removerAnexo(index: Number) {
    this.inputFileList.splice(index, 1);
  }
}
