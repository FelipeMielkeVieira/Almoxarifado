import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmar-cadastro',
  templateUrl: './confirmar-cadastro.component.html',
  styleUrls: ['./confirmar-cadastro.component.scss']
})
export class ConfirmarCadastroComponent implements OnInit {
  etapaRedefinicaoSenha: number = 1;

  emailVerificacao: string = '';
  emailInvalido = false;

  tempoTimer: number = 0;
  timerInsercaoCodigo: any;

  codigoVerificacao: number | undefined;
  listaCodigoInput = ['', '', '', '', '', ''];
  codigoVerificacaoIncorreto = false;

  senhaVisivel: boolean = false;
  confirmarSenhaVisivel: boolean = false;

  senhaNova: string = '';
  confirmarSenha: string = '';
  senhasNaoConferem = false;

  timeoutsAlertas: [any, any, any] = [undefined, undefined, undefined];

  @Output() fecharModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  // Função que emite output para fechar o modal
  fecharComponente() {
    clearInterval(this.timerInsercaoCodigo);
    this.fecharModal.emit('naoFeito');
  }

  // Função para verificação do email para envio do código. Se estiver válido, irá criar o timer e código aleatório
  verificarEmail() {
    this.codigoVerificacao = Math.floor(100000 + Math.random() * 900000);
    console.log(this.codigoVerificacao);
    this.criarTimer();
  }

  // Função para trocar a posição do teclado na inserção do código (parte de verificação do código recebido no email)
  trocarCodigoVerificacao(indexCodigo: number) {
    let elementoAtual = document.querySelector(
      '#cod' + indexCodigo
    ) as HTMLInputElement;
    if (elementoAtual.value == '') {
      if (indexCodigo > 1) {
        (
          document.querySelector('#cod' + (indexCodigo - 1)) as HTMLInputElement
        ).focus();
      }
    } else {
      if (indexCodigo < 6) {
        (
          document.querySelector('#cod' + (indexCodigo + 1)) as HTMLInputElement
        ).focus();
      }
    }
  }

  // Função para verificação do código automático
  verificarCodigo() {
    let numeroFinal = '';
    for (let index = 0; index < this.listaCodigoInput.length; index++) {
      numeroFinal += this.listaCodigoInput[index];
    }

    if (parseInt(numeroFinal) != this.codigoVerificacao) {
      this.codigoVerificacaoIncorreto = true;

      this.timeoutsAlertas[1] = setTimeout(() => {
        this.codigoVerificacaoIncorreto = false;
      }, 5000);
    }

  }

  // Função para criar o timer na segunda etapa da redefinição
  criarTimer() {
    this.tempoTimer = 300;
    this.timerInsercaoCodigo = setInterval(() => {
      this.tempoTimer--;
    }, 1000);
  }

  // Função para formatar o timer em uma string, convertendo os segundos para minutos
  formatarTempoTimer() {
    if (this.tempoTimer % 60 == 0 && this.tempoTimer != 0) {
      return this.tempoTimer / 60 + 'm restantes';
    } else if (this.tempoTimer > 60) {
      return (
        (this.tempoTimer - (this.tempoTimer % 60)) / 60 +
        'm e ' +
        (this.tempoTimer % 60) +
        's restantes'
      );
    } else if (this.tempoTimer < 0) {
      clearInterval(this.timerInsercaoCodigo);
      this.codigoVerificacao = undefined;
      return 'Código Expirado';
    } else {
      return this.tempoTimer + 's restantes';
    }
  }

  // Função para reenviar o código na segunda etapa de redefinição
  reenviarCodigo() {
    clearInterval(this.timerInsercaoCodigo);
    this.codigoVerificacao = Math.floor(100000 + Math.random() * 900000);
    console.log(this.codigoVerificacao);
    this.criarTimer();
  }

  // Função para trocar a visibilidade da senha
  trocarOlho(input: number) {
    let inputElement: HTMLInputElement

    switch (input) {
      case 1:
        inputElement = document.getElementById("inputRecuperarSenha") as HTMLInputElement;
        this.senhaVisivel = !this.senhaVisivel;
        inputElement.type = this.senhaVisivel ? 'text' : "password";
        break;
      case 2:
        inputElement = document.getElementById("inputRecuperarConfirmarSenha") as HTMLInputElement;
        this.confirmarSenhaVisivel = !this.confirmarSenhaVisivel;
        inputElement.type = this.confirmarSenhaVisivel ? 'text' : "password";
        break;
    }
  }

  // Função para redefinir a senha nova, fechando o modal
  enviarNovaSenha() {
    if (this.timerInsercaoCodigo) {
      clearInterval(this.timerInsercaoCodigo);
    }
    this.fecharModal.emit('Finalizado');
  }

  // Função para abrir os modais de alertas de funções efetuadas, criando um timeout de 5 segundos para desaparecer
  // Recebe como parâmetro o número / id do modal que deverá ser aberto
  // Os timeouts são armazenados numa lista
  abrirModalAlerta(modal: number) {
    switch (modal) {
      case 1:
        this.emailInvalido = true;
        this.timeoutsAlertas[0] = setTimeout(() => {
          this.emailInvalido = false;
        }, 5000);
        break;
      case 2:
        this.codigoVerificacaoIncorreto = true;
        this.timeoutsAlertas[1] = setTimeout(() => {
          this.codigoVerificacaoIncorreto = false;
        }, 5000);
        break;
      case 3:
        this.senhasNaoConferem = true;
        this.timeoutsAlertas[2] = setTimeout(() => {
          this.senhasNaoConferem = false;
        }, 5000);
        break;
    }
  }

  // Função para fechar os modais de alerta (alertaFeito)
  fecharModalAlerta(modal: number) {
    switch (modal) {
      case 1:
        this.emailInvalido = false;
        clearTimeout(this.timeoutsAlertas[0]);
        break;
      case 2:
        this.codigoVerificacaoIncorreto = false;
        clearTimeout(this.timeoutsAlertas[1]);
        break;
      case 3:
        this.senhasNaoConferem = false;
        clearTimeout(this.timeoutsAlertas[2]);
        break;
    }
  }
}
