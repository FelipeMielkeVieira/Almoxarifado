import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorito-item',
  templateUrl: './favorito-item.component.html',
  styleUrls: ['./favorito-item.component.scss']
})
export class FavoritoItemComponent implements OnInit {

  @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: {id: 0, classificacao: ''}, anexos: [{ descricao: "", anexo: "" }] };
  favorito: boolean = false;

  constructor() {
  }

  ngOnInit() { }

  favoritar() {
    this.favorito = !this.favorito;
  }
}