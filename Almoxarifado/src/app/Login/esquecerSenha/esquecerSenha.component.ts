import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-esquecerSenha",
  templateUrl: "./esquecerSenha.component.html",
  styleUrls: ["./esquecerSenha.component.css"],
})
export class EsquecerSenhaComponent implements OnInit {
  etapaRedefinicaoSenha: number = 1;

  tempoTimer: number;
  timerInsercaoCodigo: any;

  visibilidadeOlho1 = false;
  visibilidadeOlho2 = false;

  senhaNova : string;
  senhaNova2 : string;

  @Output() fecharModal = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  // Função que emite output para fechar o modal
  fecharComponente() {
    clearInterval(this.timerInsercaoCodigo);
    this.fecharModal.emit("naoFeito");
  }

  // Função para passar para a próxima etapa da redefinição
  prosseguirEtapaSenha() {
    this.etapaRedefinicaoSenha++;
    if (this.etapaRedefinicaoSenha == 2) {
      this.criarTimer();
    }
  }

  // Função para trocar a posição do teclado na inserção do código (parte de verificação do código recebido no email)
  trocarCodigoVerificacao(indexCodigo: number) {
    let elementoAtual = document.querySelector(
      "#cod" + indexCodigo
    ) as HTMLInputElement;
    if (elementoAtual.value == "") {
      if (indexCodigo > 1) {
        (
          document.querySelector("#cod" + (indexCodigo - 1)) as HTMLInputElement
        ).focus();
      }
    } else {
      if (indexCodigo < 6) {
        (
          document.querySelector("#cod" + (indexCodigo + 1)) as HTMLInputElement
        ).focus();
      }
    }
  }

  verificarCodigo() {
    
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
      return this.tempoTimer / 60 + "m restantes";
    } else if (this.tempoTimer > 60) {
      return (
        (this.tempoTimer - (this.tempoTimer % 60)) / 60 +
        "m e " +
        (this.tempoTimer % 60) +
        "s restantes"
      );
    } else if (this.tempoTimer < 0) {
      clearInterval(this.timerInsercaoCodigo);
      return "Código Expirado";
    } else {
      return this.tempoTimer + "s restantes";
    }
  }

  // Função para reenviar o código na segunda etapa de redefinição
  reenviarCodigo() {
    clearInterval(this.timerInsercaoCodigo);
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

    let inputSenha = document.getElementById("inputSenha" + (numeroOlho + 1)) as HTMLInputElement;
    if(inputSenha.type == "password") {
      inputSenha.type = "text";
    } else {
      inputSenha.type = "password";
    }
  }

  // Função para redefinir a senha nova, fechando o modal
  enviarNovaSenha() {
    if (this.timerInsercaoCodigo) {
      clearInterval(this.timerInsercaoCodigo);
    }
    this.fecharModal.emit("Finalizado");
  }
}
