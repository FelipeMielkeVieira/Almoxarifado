import {
  Component,
  HostListener,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css'],
})
export class ModalUserComponent implements OnInit {

  @Output() fecharModal = new EventEmitter<string>();

  nomeUsuario: string;
  emailUsuario: string;

  abrirEditar: boolean = false;
  modalConfiguracoes: boolean = false;

  usuarioTipo: number = 0;

  constructor(private router: Router, private service: UsersService) {}

  ngOnInit(): void {
    this.service.usuarios.forEach((e) => {
      if (localStorage.getItem('emailAtual') == e.email) {
        this.emailUsuario = e.email;
        this.nomeUsuario = e.nome;
      }
    })
    this.usuarioTipo = parseInt(localStorage.getItem('usuario') || '0');
  }

  // *Alguma coisa com o mouse, o resto nn entendi T-T
  // @HostListener('document:mousedown', ['$event'])
  // onGlobalClick(event: any): void {
  //   let contagem = 0;
  //   for (const path of event.path) {
  //     if (path.className == 'modalUser') {
  //       contagem = 1;
  //     }
  //   }
  //   if (contagem == 0 && event.path[1].id != 'usuarioIcone') {
  //     this.fecharModal.emit();
  //   }
  // }

  // *Irá abrir o modal de editar
  editarPerfil() {
    if (this.abrirEditar == false) {
      this.abrirEditar = true;
    } else {
      this.abrirEditar = false;
    }
  }

  // *Irá navegar pela rota recebida
  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  // *Irá abrir as configurações
  abrirConfiguracoes() {
    this.modalConfiguracoes = !this.modalConfiguracoes;
  }

  abrirAjuda() {
    //Colocar rota para ajuda
  }

  // *Irá deslogar do sistema
  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('emailAtual');
    localStorage.removeItem('lembrarSenha');
    this.navegar('/');
  }

  fecharModalEdicao(evento : string) {
    this.abrirEditar = false;
    if(evento == "2") {
      //Fazer modal para confirmar alteração
    }
  }

  fecharModalConfiguracoes() {
    this.modalConfiguracoes = false;
  }
}
