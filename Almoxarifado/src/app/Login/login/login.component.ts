import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  emailUser: string;
  senhaUser: string;

  alertaSolicitacaoCadastro: boolean = false;
  alertaRedefinicaoSenha: boolean = false;
  alertaSenhaIncorreta: boolean = false;
  listaTimeoutsAlertas = [];

  modalRedefinicaoSenha: boolean = false;

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

  trocarOlho1: boolean = false;
  trocarOlho2: boolean = false;
  trocarOlho3: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private users: UsersService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("usuario")) {
      this.navegacaoTipo();
    }
    if (localStorage.getItem("cadastro")) {
      localStorage.removeItem("cadastro");
      this.abrirModalAlerta(1);
    }
  }

  lembrar() {
    if (
      localStorage.getItem("lembrarSenha") == "0" ||
      !localStorage.getItem("lembrarSenha")
    ) {
      localStorage.setItem("lembrarSenha", "1");
    } else {
      localStorage.setItem("lembrarSenha", "0");
    }
  }

  cadastrar() {
    this.router.navigate(["/cadastro"]);
  }

  esqueciASenha() {
    this.modalRedefinicaoSenha = true;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "0.5";
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
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "1";
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
        this.tempoString =
          (this.tempo - (this.tempo % 60)) / 60 +
          "m e " +
          (this.tempo % 60) +
          "s restantes";
      } else if (this.tempo < 0) {
        this.tempoString = "Código Expirado";
        clearInterval(this.intervaloTimer);
      } else {
        this.tempoString = this.tempo + "s restantes";
      }
    }, 1000);
  }

  esqueciSenha3() {
    this.senha2 = 0;
    this.senha3 = 1;
  }

  enviarNovaSenha() {
    this.senha3 = 0;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "1";

    if (this.intervaloTimer) {
      clearInterval(this.intervaloTimer);
    }

    this.abrirModalAlerta(2);
  }

  trocarOlho(input) {
    let input2: HTMLInputElement;

    switch (input) {
      case 1:
        input2 = document.querySelector("#inputSenha1");
        if (this.olho1 == 1) {
          this.olho1 = 0;
          this.trocarOlho1 = true;
          input2.type = "text";
        } else {
          this.olho1 = 1;
          this.trocarOlho1 = false;
          input2.type = "password";
        }
        break;
      case 2:
        input2 = document.querySelector("#inputSenha2");
        if (this.olho2 == 1) {
          this.olho2 = 0;
          this.trocarOlho2 = true;
          input2.type = "text";
        } else {
          this.olho2 = 1;
          this.trocarOlho2 = false;
          input2.type = "password";
        }
        break;
      case 3:
        input2 = document.querySelector("#inputSenha3");
        if (this.olho3 == 1) {
          this.olho3 = 0;
          this.trocarOlho3 = true;
          input2.type = "text";
        } else {
          this.olho3 = 1;
          this.trocarOlho3 = false;
          input2.type = "password";
        }
        break;
    }
  }

  login() {
    this.users.usuarios.forEach((e) => {
      if (
        (e.email == this.emailUser || e.nome == this.emailUser) &&
        e.senha == this.senhaUser
      ) {
        localStorage.setItem("usuario", e.tipo.toString());
        localStorage.setItem("emailAtual", e.email);
        this.navegacaoTipo();
        return;
      }
    });

    this.abrirModalAlerta(3);
  }

  navegacaoTipo() {
    if (localStorage.getItem("usuario") == "1") {
      this.router.navigate(["/professor"]);
    } else if (
      localStorage.getItem("usuario") == "2" ||
      localStorage.getItem("usuario") == "3"
    ) {
      this.router.navigate(["/atendente"]);
    } else if (localStorage.getItem("usuario") == "4") {
      this.router.navigate(["/supervisor"]);
    }
  }

  // Função para abrir os modais de alertas de funções efetuadas, criando um timeout de 5 segundos para desaparecer
  // Recebe como parâmetro o número / id do modal que deverá ser aberto
  // Os timeouts são armazenados numa lista
  abrirModalAlerta(numeroModal) {
    switch (numeroModal) {
      case 1:
        this.alertaSolicitacaoCadastro = true;
        this.listaTimeoutsAlertas[0] = setTimeout(() => {
          this.alertaSolicitacaoCadastro = false;
        }, 5000);
        break;
      case 2:
        this.alertaRedefinicaoSenha = true;
        this.listaTimeoutsAlertas[1] = setTimeout(() => {
          this.alertaRedefinicaoSenha = false;
        }, 5000);
        break;
      case 3:
        this.alertaSenhaIncorreta = true;
        this.listaTimeoutsAlertas[2] = setTimeout(() => {
          this.alertaSenhaIncorreta = false;
        }, 5000);
        break;
    }
  }

  // Função para fechar os modais de alerta, limpando os timeouts respectivos para impedir conflitos
  fecharModalAlerta(numeroModal) {
    switch (numeroModal) {
      case 1:
        this.alertaSolicitacaoCadastro = false;
        clearTimeout(this.listaTimeoutsAlertas[0]);
        break;
      case 2:
        this.alertaRedefinicaoSenha = false;
        clearTimeout(this.listaTimeoutsAlertas[1]);
        break;
      case 3:
        this.alertaSenhaIncorreta = false;
        clearTimeout(this.listaTimeoutsAlertas[2]);
        break;
    }
  }
}
