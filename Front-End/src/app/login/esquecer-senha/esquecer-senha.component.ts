import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-esquecer-senha',
  templateUrl: './esquecer-senha.component.html',
  styleUrls: ['./esquecer-senha.component.scss']
})
export class EsquecerSenhaComponent implements OnInit {
  etapaRedefinicaoSenha: number = 1;

  emailVerificacao: string = '';
  emailInvalido = false;

  tempoTimer: number = 0;
  timerInsercaoCodigo: any;

  codigoVerificacao: number | undefined;
  listaCodigoInput = ['', '', '', '', '', ''];
  codigoVerificacaoIncorreto = false;

  visibilidadeOlho1 = false;
  visibilidadeOlho2 = false;

  senhaNova: string = '';
  senhaNova2: string = '';
  senhasNaoConferem = false;

  timeoutsAlertas: [any, any, any] = [undefined, undefined, undefined];

  @Output() fecharModal = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  // Função que emite output para fechar o modal
  fecharComponente() {
    clearInterval(this.timerInsercaoCodigo);
    this.fecharModal.emit('naoFeito');
  }

  // Função para passar para a próxima etapa da redefinição
  prosseguirEtapaSenha() {
    this.etapaRedefinicaoSenha++;
    if (this.etapaRedefinicaoSenha == 2) {
      this.verificarEmail();
    }

    if (this.etapaRedefinicaoSenha == 3) {
      this.verificarCodigo();
    }
  }

  // Função para verificação do email para envio do código. Se estiver válido, irá criar o timer e código aleatório
  verificarEmail() {
    if (this.emailVerificacao == '') {
      this.etapaRedefinicaoSenha--;
      this.emailInvalido = true;

      this.timeoutsAlertas[0] = setTimeout(() => {
        this.emailInvalido = false;
      }, 5000);
    } else {
      this.codigoVerificacao = Math.floor(100000 + Math.random() * 900000);
      console.log(this.codigoVerificacao);
      this.criarTimer();
    }
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
      this.etapaRedefinicaoSenha--;
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

  // Função para trocar a visibilidade dos dois olhos na redefinição da nova senha
  trocarOlho(numeroOlho: number) {
    switch (numeroOlho) {
      case 1:
        this.visibilidadeOlho1 = !this.visibilidadeOlho1;
        break;
      case 2:
        this.visibilidadeOlho2 = !this.visibilidadeOlho2;
        break;
    }

    let inputSenha = document.getElementById(
      'inputSenha' + (numeroOlho + 1)
    ) as HTMLInputElement;
    if (inputSenha.type == 'password') {
      inputSenha.type = 'text';
    } else {
      inputSenha.type = 'password';
    }
  }

  // Função para verificar se as duas novas senhas conferem
  verificarNovasSenhas() {
    if (this.senhaNova == this.senhaNova2 && this.senhaNova != '') {
      this.enviarNovaSenha();
    } else {
      this.senhasNaoConferem = true;
      this.timeoutsAlertas[2] = setTimeout(() => {
        this.senhasNaoConferem = false;
      }, 5000);
    }
  }

  // Função para redefinir a senha nova, fechando o modal
  enviarNovaSenha() {
    if (this.timerInsercaoCodigo) {
      clearInterval(this.timerInsercaoCodigo);
    }
    this.fecharModal.emit('Finalizado');
  }

  // Função para fechar os modais de alerta (alertaFeito)
  fecharModalAlerta(modal: number) {
    switch (modal) {
      case 1:
        this.emailInvalido = false;
        break;
      case 2:
        this.codigoVerificacaoIncorreto = false;
        break;
      case 3:
        this.senhasNaoConferem = false;
        break;
    }
  }
}
