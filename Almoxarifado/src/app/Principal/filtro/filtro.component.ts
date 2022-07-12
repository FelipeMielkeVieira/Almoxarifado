import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  fecharFiltro() {
    const input = document.querySelector("#check") as HTMLInputElement;
    input.checked = true;
  }

}
