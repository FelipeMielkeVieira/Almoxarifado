import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalUserComponent } from '../modal-user/modal-user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // ------------- VARIAVEIS DO MODAL EDITAR USER ------------------
  nomeUsuario: string = "";
  emailUsuario: string = "";

  trocarOlho1: boolean = false;
  olho1: number = 1;
  trocarOlho2: boolean = false;
  olho2: number = 1;
  // ------------- FIM VARIAVEIS DO MODAL EDITAR USER ------------------

  // ------------- VARIAVEIS DO MODAL CONFIGURAÇÕES ------------------
  // configuracoes: boolean = false;
  fonteAtual: number = 3;
  // ------------- FIM VARIAVEIS DO MODAL CONFIGURAÇÕES ------------------

  // -------- VARIAVEIS DO MODAL USER (DENTRO DO HEADER EM SI) --------
  modalUser: any;
  usuarioTipo: number = 0;
  // ------- FIM VARIAVEIS DO MODAL USER (DENTRO DO HEADER EM SI) ------

  constructor(private router: Router, private service: UsersService, private modalService: MdbModalService) { }

  // *Pega o email e nome do usuario logado
  ngOnInit() {
    this.service.usuarios.forEach((e) => {
      if (localStorage.getItem('emailAtual') == e.email) {
        this.emailUsuario = e.email;
        this.nomeUsuario = e.nome;
      }
    })
    this.usuarioTipo = parseInt(localStorage.getItem('usuario') || '0');
  }

  // ----------------------- FUNÇÕES DO HEADER EM SI --------------------------
  // *Irá navegar conforme o usuário que loga
  navegacaoTipo() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

  // *Irá navegar para a página de sacolas
  sacolas() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas']);
    } else {
      this.router.navigate(['/supervisor/sacolas'])
    }
  }

  // *Irá abrir o modal do user
  abrirUser() {
    if (!this.modalUser) {
      this.modalUser = true;
    } else {
      this.modalUser = false;
    }
  }

  fecharModalUser() {
    this.modalUser = false;
  }
}
