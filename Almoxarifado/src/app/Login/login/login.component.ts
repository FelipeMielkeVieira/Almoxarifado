import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailUser: string;
  senhaUser: string;
  senhaIncorreta: number;

  cadastro: number = 0;
  requisicaoSenha: number = 0;

  senha1: number = 0;
  senha2: number = 0;
  senha3: number = 0;

  senhaNova: string;
  senhaNova2: string;

  tempo = 300;
  tempoString = "5m";
  intervaloTimer = undefined;

  olho1: number = 1;
  olho2: number = 1;
  olho3: number = 1;

  constructor(private router: Router, private route: ActivatedRoute, private users: UsersService) {
    if (localStorage.getItem('cadastro')) {
      localStorage.removeItem('cadastro');
      this.cadastro = 1;
    }

    window.addEventListener("beforeunload", () => {
      if (localStorage.getItem('lembrarSenha') == '0' || !localStorage.getItem('lembrarSenha')) {
        localStorage.removeItem('usuario');
        localStorage.removeItem('emailAtual');
        localStorage.removeItem('lembrarSenha');
      }
    });
  }

  ngOnInit() {
    if (localStorage.getItem('usuario')) {
      this.navegacaoTipo();
    }
    if (this.cadastro == 1) {
      this.modalCadastro();
    }
  }

  lembrar() {
    if (localStorage.getItem('lembrarSenha') == '0' || !localStorage.getItem('lembrarSenha')) {
      localStorage.setItem('lembrarSenha', '1');
    } else {
      localStorage.setItem('lembrarSenha', '0')
    }
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }

  fechar() {
    this.cadastro = 0;
    this.requisicaoSenha = 0;
    this.senhaIncorreta = 0;
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

  modalSenha() {
    setTimeout(() => {
      this.requisicaoSenha = 0;
    }, 5000);
  }

  fechar2() {
    this.senha1 = 0;
    this.senha2 = 0;
    this.senha3 = 0;
    this.senhaNova = undefined;
    this.senhaNova2 = undefined;
    if (this.intervaloTimer) {
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
    if (elementoAtual.value != "") {
      let elemento = document.querySelector("#cod2") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod3() {
    let elementoAtual = document.querySelector("#cod2") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod1") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod3") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod4() {
    let elementoAtual = document.querySelector("#cod3") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod2") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod4") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod5() {
    let elementoAtual = document.querySelector("#cod4") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod3") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod5") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod6() {
    let elementoAtual = document.querySelector("#cod5") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod4") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod6") as HTMLInputElement;
      elemento.focus();
    }
  }
  voltarCodigo() {
    let elementoAtual = document.querySelector("#cod6") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod5") as HTMLInputElement;
      elemento.focus();
    }
  }

  timer() {
    this.tempo = 300;
    this.tempoString = "5m restantes";
    this.intervaloTimer = setInterval(() => {
      this.tempo--;
      if (this.tempo % 60 == 0 && this.tempo != 0) {
        this.tempoString = this.tempo / 60 + "m restantes";
      } else if (this.tempo > 60) {
        this.tempoString = ((this.tempo - this.tempo % 60) / 60) + "m e " + this.tempo % 60 + "s restantes";
      } else if (this.tempo < 0) {
        this.tempoString = "Código Expirado"
        clearInterval(this.intervaloTimer);
      } else {
        this.tempoString = this.tempo + "s restantes";
      }
    }, 1000);
  }

  esqueciSenha3() {
    this.senha2 = 0
    this.senha3 = 1;
  }

  enviarNovaSenha() {
    this.senha3 = 0;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '1';

    if (this.intervaloTimer) {
      clearInterval(this.intervaloTimer);
    }

    this.requisicaoSenha = 1;
    this.modalSenha();
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
      case 3:
        divOlho = document.querySelector("#olho3");
        input2 = document.querySelector("#inputSenha3");
        if (this.olho3 == 1) {
          this.olho3 = 0;
          divOlho.src = "../../../assets/olho-aberto.png";
          input2.type = 'text';
        } else {
          this.olho3 = 1;
          divOlho.src = "../../../assets/olho-fechado.png";
          input2.type = 'password';
        }
        break;
    }
  }

  login() {
    let senhaCorreta = 0;
    this.users.usuarios.forEach((e) => {
      if ((e.email == this.emailUser || e.nome == this.emailUser) && e.senha == this.senhaUser) {
        localStorage.setItem('usuario', e.tipo.toString());
        localStorage.setItem('emailAtual', e.email);
        senhaCorreta++;
        this.navegacaoTipo();
      }
    })
    if (senhaCorreta == 0) {
      this.senhaIncorreta = 1;
      setTimeout(() => {
        this.senhaIncorreta = 0;
      }, 5000);
    }
  }

  navegacaoTipo() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else if (localStorage.getItem('usuario') == '4') {
      this.router.navigate(['/supervisor'])
    }
  }
}
