import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cadastro: number = 0;

  senha1: number = 0;
  senha2: number = 0;
  senha3: number = 0;

  tempo = 300;
  tempoString = "5m";
  intervaloTimer = undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    if(localStorage.getItem('cadastro')) {
      localStorage.removeItem('cadastro');
      this.cadastro = 1;
    }
  }

  ngOnInit() {
    if(this.cadastro == 1) {
      this.modalCadastro();
    }
  }

  cadastrar(){
    this.router.navigate(['/cadastro']);
  }

  fechar() {
    this.cadastro = 0;
  }

  esqueciASenha() {
    this.senha1 = 1;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '0.5';
  }

  modalCadastro() {
    setTimeout(() => {
      this.cadastro = 0;
    }, 5000);
  }

  fechar2() {
    this.senha1 = 0;
    this.senha2 = 0;
    this.senha3 = 0;
    if(this.intervaloTimer) {
      clearInterval(this.intervaloTimer);
    }
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '1';
  }

  esqueciSenha2() {
    this.senha1 = 0;
    this.senha2 = 1;
    this.timer();
  }

  ativarCod2() {
    let elementoAtual = document.querySelector("#cod1") as HTMLInputElement;
    if(elementoAtual.value != "") {
      let elemento = document.querySelector("#cod2") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod3() {
    let elementoAtual = document.querySelector("#cod2") as HTMLInputElement;
    if(elementoAtual.value == "") {
      let elemento = document.querySelector("#cod1") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod3") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod4() {
    let elementoAtual = document.querySelector("#cod3") as HTMLInputElement;
    if(elementoAtual.value == "") {
      let elemento = document.querySelector("#cod2") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod4") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod5() {
    let elementoAtual = document.querySelector("#cod4") as HTMLInputElement;
    if(elementoAtual.value == "") {
      let elemento = document.querySelector("#cod3") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod5") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod6() {
    let elementoAtual = document.querySelector("#cod5") as HTMLInputElement;
    if(elementoAtual.value == "") {
      let elemento = document.querySelector("#cod4") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod6") as HTMLInputElement;
      elemento.focus();
    }
  }
  voltarCodigo() {
    let elementoAtual = document.querySelector("#cod6") as HTMLInputElement;
    if(elementoAtual.value == "") {
      let elemento = document.querySelector("#cod5") as HTMLInputElement;
      elemento.focus();
    }
  }

  timer() {
    this.tempo = 300;
    this.tempoString = "5m";
    this.intervaloTimer = setInterval(() => {
      this.tempo--;
      if(this.tempo % 60 == 0 && this.tempo != 0) {
        this.tempoString = this.tempo / 60 + "m";
      } else if(this.tempo > 60) {
        this.tempoString = ((this.tempo - this.tempo % 60) / 60) + "m e " + this.tempo % 60 + "s";
      } else {
        this.tempoString = this.tempo + "s";
      }
    }, 1000);
  }
}
