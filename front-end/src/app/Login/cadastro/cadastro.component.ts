import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router, private service: UsersService) { }

  usuario: string = "";
  email: string = "";
  senhaUser: string = "";
  repetirSenhaUser: string = "";

  senhaIncorreta: boolean = false;     //Variável para modal de senhas não correspondem
  dadosIncorretos: boolean = false;    //Variável para modal de preencher todos campos
  listaTimeoutsAlertas: [any, any] = [null, null];

  senhaVisivel: boolean = false;
  confirmarSenhaVisivel: boolean = false;

  modalConfirmarCadastro: boolean = false;

  ngOnInit() {
  }

  entrar() {
    this.router.navigate(['']);
  }

  cadastrar() {
    // Item adicionado no localStorage para poder emitir um feedback na tela de login
    localStorage.setItem('cadastro', '1');

    const user = {
      nome: this.usuario,
      email: this.email,
      senha: this.senhaUser,
      tipo: 0
    }

    this.service.usuarios.push(user);
    this.controlarModalConfirmarCadastro();
    this.router.navigate(['']);
  }

  verificarDadosValidos() {
    if (this.email && this.usuario && this.senhaUser) {
      if (this.senhaUser == this.repetirSenhaUser && this.senhaUser != '' && this.senhaUser) {
        // Ao invés de cadastrar o usuário, deve-se abrir modal de confirmação de cadastro
        // solicitando para inserir o código de confirmação enviado por email
        let divPrincipal = document.querySelector(".divPrincipal") as HTMLDivElement;
        divPrincipal.style.opacity = "0.5";
        this.controlarModalConfirmarCadastro();
      } else {
        this.senhaIncorreta = true;
        setTimeout(() => {
          this.senhaIncorreta = false;
        }, 5000)
      }
    } else {
      this.dadosIncorretos = true;
      setTimeout(() => {
        this.dadosIncorretos = false;
      }, 5000)
    }
  }

  // Método para abrir ou fechar o modal de confirmação de cadastro
  controlarModalConfirmarCadastro() {
    // Função para abrir modal de confirmação de cadastro
    this.modalConfirmarCadastro = !this.modalConfirmarCadastro;
  }

  // Função para mostrar ou esconder a senha
  trocarOlho(input: number) {
    let inputElement: HTMLInputElement

    switch (input) {
      case 1:
        inputElement = document.getElementById("inputSenha") as HTMLInputElement;
        this.senhaVisivel = !this.senhaVisivel;
        inputElement.type = this.senhaVisivel ? 'text' : "password";
        break;
      case 2:
        inputElement = document.getElementById("inputConfirmarSenha") as HTMLInputElement;
        this.confirmarSenhaVisivel = !this.confirmarSenhaVisivel;
        inputElement.type = this.confirmarSenhaVisivel ? 'text' : "password";
        break;
    }
  }

  // Função para abrir os modais de alerta caso algum dado esteja faltando ou esteja incorreto
  abrirModalFeito(numero: number) {
    switch (numero) {
      case 1:
        this.senhaIncorreta = true;
        this.listaTimeoutsAlertas[0] = setTimeout(() => {
          this.senhaIncorreta = false;
        }, 5000);
        break;
      case 2:
        this.dadosIncorretos = true;
        this.listaTimeoutsAlertas[1] = setTimeout(() => {
          this.dadosIncorretos = false;
        }, 5000);
        break;
    }
  }

  // Função para fechar os modais de alerta caso algum dado esteja faltando ou esteja incorreto
  fecharModalFeito(numero: number) {
    switch (numero) {
      case 1:
        this.senhaIncorreta = false;
        clearTimeout(this.listaTimeoutsAlertas[0]);
        break;
      case 2:
        this.dadosIncorretos = false;
        clearTimeout(this.listaTimeoutsAlertas[1]);
        break;
    }
  }
}
