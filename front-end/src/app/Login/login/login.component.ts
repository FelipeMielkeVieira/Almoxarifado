import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UsersService } from 'src/app/service';
import { AlertaFeitoComponent } from '../alerta-feito/alerta-feito.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailUser: string | undefined;
  senhaUser: string | undefined;

  alertaSolicitacaoCadastro: any;
  alertaRedefinicaoSenha: any;
  alertaSenhaIncorreta: any;
  listaTimeoutsAlertas: [any, any, any] = [null, null, null];

  modalRedefinicaoSenha: boolean = false;
  senhaVisivel: boolean = false;

  constructor(
    private router: Router,
    private users: UsersService,
    private modalService: MdbModalService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('usuario')) {
      this.navegacaoTipo();
    }
    if (localStorage.getItem('cadastro')) {
      localStorage.removeItem('cadastro');
      this.abrirModalAlerta(1);
    }
  }

  lembrar() {
    if (
      localStorage.getItem('lembrarSenha') == '0' ||
      !localStorage.getItem('lembrarSenha')
    ) {
      localStorage.setItem('lembrarSenha', '1');
    } else {
      localStorage.setItem('lembrarSenha', '0');
    }
  }

  // Função para redirecionar o usuário para a página de cadastro
  cadastrar() {
    this.router.navigate(['/cadastro']);
  }

  // Função para abrir o modal de redefinição de senha
  esqueciASenha() {
    this.modalRedefinicaoSenha = true;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '0.5';
  }

  // Função para trocar a visibilidade da senha
  trocarOlho() {
    let inputSenha = document.getElementById('inputSenha') as HTMLInputElement;
    this.senhaVisivel = !this.senhaVisivel;
    inputSenha.type = inputSenha.type == "text" ? 'password' : 'text';
  }

  // Função para verificar se o usuário existe e entrar na página principal caso exista
  login() {
    this.users.usuarios.forEach((e) => {
      if (
        (e.email == this.emailUser || e.nome == this.emailUser) &&
        e.senha == this.senhaUser
      ) {
        localStorage.setItem('usuario', e.tipo.toString());
        localStorage.setItem('emailAtual', e.email);
        this.navegacaoTipo();
        return;
      }
    });

    this.abrirModalAlerta(3);
  }

  // Função para direcionar o usuário para a página principal dependendo de sua persona
  navegacaoTipo() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor']);
    } else if (
      localStorage.getItem('usuario') == '2' ||
      localStorage.getItem('usuario') == '3'
    ) {
      this.router.navigate(['/atendente']);
    } else if (localStorage.getItem('usuario') == '4') {
      this.router.navigate(['/supervisor']);
    }
  }

  // Função para abrir os modais de alertas de funções efetuadas, criando um timeout de 5 segundos para desaparecer
  // Recebe como parâmetro o número / id do modal que deverá ser aberto
  // Os timeouts são armazenados numa lista
  abrirModalAlerta(numeroModal: number) {
    switch (numeroModal) {
      case 1:
        this.alertaSolicitacaoCadastro = this.modalService.open(AlertaFeitoComponent, {
          data: { tipoMensagemModal: 1},
        });

        this.listaTimeoutsAlertas[0] = setTimeout(() => {
          this.alertaSolicitacaoCadastro.close();
        }, 5000);
        break;
      case 2:
        this.alertaRedefinicaoSenha = this.modalService.open(AlertaFeitoComponent, {
          data: { tipoMensagemModal: 2}
        });

        this.listaTimeoutsAlertas[1] = setTimeout(() => {
          this.alertaRedefinicaoSenha.close();
        }, 5000);
        break;
      case 3:
        this.alertaSenhaIncorreta = this.modalService.open(AlertaFeitoComponent, {
          data: { tipoMensagemModal: 3}
        });

        this.listaTimeoutsAlertas[2] = setTimeout(() => {
          this.alertaSenhaIncorreta.close();
        }, 5000);
        break;
    }
  }

  // Função para fechar os modais de alerta, limpando os timeouts respectivos para impedir conflitos
  fecharModalAlerta(numeroModal: any) {
    switch (numeroModal) {
      case "1":
        this.alertaSolicitacaoCadastro.close();
        clearTimeout(this.listaTimeoutsAlertas[0]);
        break;
      case "2":
        this.alertaRedefinicaoSenha.close();
        clearTimeout(this.listaTimeoutsAlertas[1]);
        break;
      case "3":
        this.alertaSenhaIncorreta.close();
        clearTimeout(this.listaTimeoutsAlertas[2]);
        break;
    }
  }

  // Função recebida do "esquecerSenha" para fechar o modal da senha e criar o modal de alerta
  // Recebe como evento um string dizendo se ele fez a redefinição (chamando modal de conclusão) ou saiu no X
  fecharModalSenha(event: string) {
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '1';
    this.modalRedefinicaoSenha = false;

    if (event == 'Finalizado') {
      this.abrirModalAlerta(2);
    }
  }
}
