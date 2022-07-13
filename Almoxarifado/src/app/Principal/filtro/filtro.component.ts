import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor(private router:Router, private service: UsersService) {
    this.usuario = parseInt(localStorage.getItem('usuario'));
    this.listaClassificacoes = service.classificacoes;
  }

  listaClassificacoes;
  usuario: number;

  filtroSelecionado:number;

  ngOnInit() {
  }

  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  fecharFiltro(id) {
    this.filtroSelecionado = id;
    const input = document.querySelector("#check") as HTMLInputElement;
    input.checked = true;
  }

  modalFiltro() {

  }

}
