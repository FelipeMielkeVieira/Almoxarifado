import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastrar-descricao-item',
  templateUrl: './cadastrar-descricao-item.component.html',
  styleUrls: ['./cadastrar-descricao-item.component.scss']
})
export class CadastrarDescricaoItemComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();

  // Importante! Essa variável vai guardar os arquivos adicionados pelo usuário
  inputFileList: any = [];

  constructor() {
    
  }

  ngOnInit(): void {
  }

  //Função para fechar modal, emite um evento para o componente pai que irá fechar o modal	
  fechar() {
    this.fecharModal.emit();
  }

  // Cancela e fecha o modal
  cancelar() {
    this.fechar();
  }

  // Salva o item
  salvar() {
    this.fechar();
  }

  // Função adicionada quando o usuário adiciona um arquivo no input de anexo, adiciona uma nova linha na tabela de anexos 
  anexoAdicionado() {
    let inputFile = document.getElementById('anexoInput') as HTMLInputElement;
    const tbody = document.getElementById('tbodyAnexos');
    const linha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaDeletar = document.createElement('td');
    const spanDeletar = document.createElement('span');

    spanDeletar.classList.add('material-symbols-outlined');
    spanDeletar.classList.add('icone');
    spanDeletar.title = "Remover anexo";
    spanDeletar.onclick = ($event) => {
      this.removerAnexo($event);
    };
    spanDeletar.innerHTML = "delete";

    this.inputFileList.push.apply(this.inputFileList, inputFile.files);
    // this.inputFileList.push(inputFile.files)
    
    colunaNome.innerHTML = inputFile.files![inputFile.files!.length - 1].name;

    console.log(this.inputFileList);
    console.log(inputFile.files);

    linha.id = (this.inputFileList.length - 1).toString();
    linha.className = "linha-anexo";

    colunaDeletar.appendChild(spanDeletar);

    colunaNome.className = 'itemTabela';
    colunaDeletar.style.textAlign = "center";
    colunaDeletar.classList.add('itemTabela');

    linha.appendChild(colunaNome);
    linha.appendChild(colunaDeletar);
    tbody?.appendChild(linha);
  }

  // Remove um anexo da tabela de anexos e também do array de arquivos
  //Falta lógica para excluir o arquivo da lista inputFileList
  removerAnexo(event: any) {
    console.log(event);
    console.log(this.inputFileList);

    const listaTr = document.querySelectorAll(".linha-anexo");

    this.inputFileList.splice(parseInt(event.target.parentElement.parentElement.id), 1);
    event.target.parentElement.parentElement.remove();

    console.log(this.inputFileList);
  }
}
