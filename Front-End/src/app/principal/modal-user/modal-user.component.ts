import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {
  @Output() fecharModal = new EventEmitter<string>();

  nomeUsuario: string = "";
  emailUsuario: string = "";

  abrirEditar: boolean = false;
  modalConfiguracoes: boolean = false;

  usuarioTipo: number = 0;

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit(): void {
    this.service.usuarios.forEach((e) => {
      if (localStorage.getItem('emailAtual') == e.email) {
        this.emailUsuario = e.email;
        this.nomeUsuario = e.nome;
      }
    })
    this.usuarioTipo = parseInt(localStorage.getItem('usuario') || '0');
  }

  // *Irá abrir o modal de editar
  editarPerfil() {
    if (this.abrirEditar == false) {
      document.documentElement.style.overflow = "hidden"
      this.abrirEditar = true;
    } else {
      document.documentElement.style.overflow = "visible"
      this.abrirEditar = false;
    }
  }

  // *Irá navegar pela rota recebida
  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  // *Irá abrir as configurações
  abrirConfiguracoes() {
    document.documentElement.style.overflow = "hidden"
    this.modalConfiguracoes = !this.modalConfiguracoes;
  }

  abrirAjuda() {
    this.router.navigate(['/ajuda']);
  }

  // *Irá deslogar do sistema
  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('emailAtual');
    localStorage.removeItem('lembrarSenha');
    this.navegar('/');
  }

  fecharModalEdicao(evento: string) {
    document.documentElement.style.overflow = "visible"
    this.abrirEditar = false;
    if (evento == "2") {
      //Fazer modal para confirmar alteração
    }
  }

  fecharModalConfiguracoes() {
    document.documentElement.style.overflow = "visible"
    this.modalConfiguracoes = false;
  }
}
