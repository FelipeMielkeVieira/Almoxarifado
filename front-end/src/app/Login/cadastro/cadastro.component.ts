import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css' ]
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  olho1: number = 1;
  olho2: number = 1;

  usuario: string;
  email: string | undefined;
  senhaUser: string | undefined;
  repetirSenhaUser: string | undefined;

  senhaIncorreta: boolean = false;     //Variável para modal de senhas não correspondem
  dadosIncorretos: boolean = false;    //Variável para modal de preencher todos campos
  listaTimeoutsAlertas: [any, any] = [null, null];

  trocarOlho1: boolean = false;
  trocarOlho2: boolean = false;

  ngOnInit() {
  }

  entrar() {
    console.log("a")
    this.router.navigate(['']);
  }

  cadastrar() {
    if(this.email && this.usuario && this.senhaUser) {
      if(this.senhaUser == this.repetirSenhaUser && this.senhaUser != '' && this.senhaUser) {
        localStorage.setItem('cadastro', '1');
  
        const user = {
          nome: this.usuario,
          email: this.email,
          senha: this.senhaUser,
          tipo: 0
        }
        
        this.service.usuarios.push(user);
        this.router.navigate(['']); 
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

  trocarOlho(input: number) {
    let input2: HTMLInputElement

    switch(input) {
      case 1:
        input2 = document.querySelector("#inputSenha1") as HTMLInputElement;
        if(this.olho1 == 1) {
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
        input2 = document.querySelector("#inputSenha2") as HTMLInputElement;
        if(this.olho2 == 1) {
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

  // Função para abrir os modais de alerta caso algum dado esteja faltando ou esteja incorreto
  abrirModalFeito(numero : number) {
    switch(numero) {
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
  fecharModalFeito(numero : number) {
    switch(numero) {
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