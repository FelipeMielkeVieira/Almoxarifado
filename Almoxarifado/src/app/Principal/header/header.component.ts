import { Component, HostListener, OnInit } from '@angular/core';
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
  configuracoes = false;
  fonteAtual = 3;

  trocarOlho1: boolean = false;
  trocarOlho2: boolean = false;

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.service.usuarios.forEach((e) => {
      if (localStorage.getItem('emailAtual') == e.email) {
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
    if (this.user == 0) {
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
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

  sacolas() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas']);
    } else {
      this.router.navigate(['/supervisor/sacolas'])
    }
  }

  trocarOlho(input) {
    let input2: HTMLInputElement

    switch (input) {
      case 1:
        input2 = document.querySelector("#inputSenha1");
        if (this.olho1 == 1) {
          this.olho1 = 0;
          this.trocarOlho1 = true;
          input2.type = 'text';
        } else {
          this.olho1 = 1;
          this.trocarOlho1 = false;
          input2.type = 'password';
        }
        break;
      case 2:
        input2 = document.querySelector("#inputSenha2")
        if (this.olho2 == 1) {
          this.olho2 = 0;
          this.trocarOlho2 = true;
          input2.type = 'text';
        } else {
          this.olho2 = 1;
          this.trocarOlho2 = false;
          input2.type = 'password';
        }
        break;
    }
  }

  fechar() {
    this.abrirEditar = false;
    this.configuracoes = false;
  }

  salvar() {
    if (this.abrirEditar = true) {
      this.abrirEditar = false;
    }
  }

  abrirConfiguracoes() {
    this.configuracoes = !this.configuracoes;
    this.user = 0;
  }

  salvarConfig() {
    this.configuracoes = false;
    if(this.fonteAtual == 1) {
      document.documentElement.style.setProperty('--font-size--verysmall', '6px');
      document.documentElement.style.setProperty('--font-size--small', '10px');
      document.documentElement.style.setProperty('--font-size--default', '12px');
      document.documentElement.style.setProperty('--font-size--medium', '14px');
      document.documentElement.style.setProperty('--font-size--big', '16px');
      document.documentElement.style.setProperty('--font-size--verybig', '20px');
      document.documentElement.style.setProperty('--font-size--giant', '26px');
      document.documentElement.style.setProperty('--font-size--extreme', '36px');
    }
    if(this.fonteAtual == 2) {
      document.documentElement.style.setProperty('--font-size--verysmall', '8px');
      document.documentElement.style.setProperty('--font-size--small', '12px');
      document.documentElement.style.setProperty('--font-size--default', '14px');
      document.documentElement.style.setProperty('--font-size--medium', '16px');
      document.documentElement.style.setProperty('--font-size--big', '18px');
      document.documentElement.style.setProperty('--font-size--verybig', '22px');
      document.documentElement.style.setProperty('--font-size--giant', '28px');
      document.documentElement.style.setProperty('--font-size--extreme', '38px');
    }
    if(this.fonteAtual == 3) {
      document.documentElement.style.setProperty('--font-size--verysmall', '10px');
      document.documentElement.style.setProperty('--font-size--small', '14px');
      document.documentElement.style.setProperty('--font-size--default', '16px');
      document.documentElement.style.setProperty('--font-size--medium', '18px');
      document.documentElement.style.setProperty('--font-size--big', '20px');
      document.documentElement.style.setProperty('--font-size--verybig', '24px');
      document.documentElement.style.setProperty('--font-size--giant', '30px');
      document.documentElement.style.setProperty('--font-size--extreme', '40px');
    }
    if(this.fonteAtual == 4) {
      document.documentElement.style.setProperty('--font-size--verysmall', '12px');
      document.documentElement.style.setProperty('--font-size--small', '16px');
      document.documentElement.style.setProperty('--font-size--default', '18px');
      document.documentElement.style.setProperty('--font-size--medium', '20px');
      document.documentElement.style.setProperty('--font-size--big', '22px');
      document.documentElement.style.setProperty('--font-size--verybig', '26px');
      document.documentElement.style.setProperty('--font-size--giant', '32px');
      document.documentElement.style.setProperty('--font-size--extreme', '42px');
    }
    if(this.fonteAtual == 5) {
      document.documentElement.style.setProperty('--font-size--verysmall', '14px');
      document.documentElement.style.setProperty('--font-size--small', '18px');
      document.documentElement.style.setProperty('--font-size--default', '20px');
      document.documentElement.style.setProperty('--font-size--medium', '22px');
      document.documentElement.style.setProperty('--font-size--big', '24px');
      document.documentElement.style.setProperty('--font-size--verybig', '28px');
      document.documentElement.style.setProperty('--font-size--giant', '34px');
      document.documentElement.style.setProperty('--font-size--extreme', '44px');
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    let contagem = 0;
    for (const path of event.path) {
      if(path.className == "modalUser") {
        contagem = 1;
      }
    }
    if(contagem == 0 && event.path[1].id != "usuarioIcone") {
      if (this.user == 1) {
        this.user = 0;
      }
    }
  }
}