import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-sacolas',
  templateUrl: './sacolas.component.html',
  styleUrls: ['./sacolas.component.css']
})
export class SacolasComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) {
    this.listaSacolas = service.retornaSacolasUsuario(localStorage.getItem('emailAtual'));
  }

  listaSacolas = [];
  tamanhoLista = 0;

  ngOnInit() {
    this.tamanhoLista = this.listaSacolas.length;
  }

  home() {
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

}
