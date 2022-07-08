import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  olho1: number = 1;
  olho2: number = 1;

  ngOnInit() {
  }

  entrar() {
    console.log("a")
    this.router.navigate(['']);
  }

  cadastrar() {
    localStorage.setItem('cadastro', '1');
    this.router.navigate(['']);
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

}
