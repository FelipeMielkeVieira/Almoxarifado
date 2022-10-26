import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastrar-item',
  templateUrl: './cadastrar-item.component.html',
  styleUrls: ['./cadastrar-item.component.scss']
})
export class CadastrarItemComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Função para fechar o modal
  fecharModalCadastro(texto: string) {
    this.fecharModal.emit(texto);
  }

  carregarImagem(event: any) {
    let imagem = document.querySelector("#imagemItem") as HTMLImageElement;
    imagem.src = URL.createObjectURL(event.target.files[0]);
  }

}
