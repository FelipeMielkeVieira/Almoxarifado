import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  olho1: number = 1;
  olho2: number = 1;

  usuario: string;
  email: string;
  senhaUser: string;
  repetirSenhaUser: string;

  senhaIncorreta: number;
  dadosIncorretos: number;

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
        this.senhaIncorreta = 1;
        setTimeout(() => {
          this.senhaIncorreta = 0;
        }, 5000)
      }
    } else {
      this.dadosIncorretos = 1;
      setTimeout(() => {
        this.dadosIncorretos = 0;
      }, 5000)
    }
  }

  trocarOlho(input) {

    let divOlho: HTMLImageElement;
    let input2: HTMLInputElement

    switch(input) {
      case 1:
        divOlho = document.querySelector("#olho1");
        input2 = document.querySelector("#inputSenha1");
        if(this.olho1 == 1) {
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
        if(this.olho2 == 1) {
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
    this.senhaIncorreta = 0;
  }

}
