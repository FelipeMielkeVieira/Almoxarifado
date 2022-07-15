import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: number = 0;
  usuarioTipo: number = 0;

  constructor(private router: Router, private service: UsersService) {}

  ngOnInit() {
    this.service.usuarios.forEach((e) => {
      if(localStorage.getItem('emailAtual') == e.email) {
        this.emailUsuario = e.email;
        this.nomeUsuario = e.nome;
      }
    })
    this.usuarioTipo = parseInt(localStorage.getItem('usuario'));
  }

  nomeUsuario: string;
  emailUsuario: string;

  abrirUser() {
    if(this.user == 0) {
      this.user = 1;
    } else {
      this.user = 0;
    }
  }

  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('emailAtual');
    localStorage.removeItem('lembrarSenha');
    this.navegar('/');
  }

  navegacaoTipo() {
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

}
