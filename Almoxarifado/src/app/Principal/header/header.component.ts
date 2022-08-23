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
  abrirEditar: boolean = false;

  olho1: number = 1;
  olho2: number = 1;

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
  
  editarPerfil() {
    this.user = 0;
    if (this.abrirEditar == false) {
      this.abrirEditar = true;
    } else {
      this.abrirEditar = false;
    }
    
  }

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

  sacolas(){
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas']);
    } else {
      this.router.navigate(['/supervisor/sacolas'])
    }
  }

  trocarOlho(input) {

    let divOlho: HTMLImageElement;
    let input2: HTMLInputElement

    switch (input) {
      case 1:
        divOlho = document.querySelector("#olho1");
        input2 = document.querySelector("#inputSenha1");
        if (this.olho1 == 1) {
          this.olho1 = 0;
          divOlho.src = "../../../assets/olho-aberto.png";
          input2.type = 'text';
        } else {
          this.olho1 = 1;
          divOlho.src = "../../../assets/olho-fechado.png";
          input2.type = 'password';
        }
        break;
      case 2:
        divOlho = document.querySelector("#olho2");
        input2 = document.querySelector("#inputSenha2")
        if (this.olho2 == 1) {
          this.olho2 = 0;
          divOlho.src = "../../../assets/olho-aberto.png";
          input2.type = 'text';
        } else {
          this.olho2 = 1;
          divOlho.src = "../../../assets/olho-fechado.png";
          input2.type = 'password';
        }
        break;
    }
  }

  fechar() {
    if (this.abrirEditar = true) {
      this.abrirEditar = false;
    }
  }

  salvar() {
    if (this.abrirEditar = true) {
      this.abrirEditar = false;
    }
  }

}
