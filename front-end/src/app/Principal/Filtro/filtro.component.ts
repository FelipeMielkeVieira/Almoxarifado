import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/service';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  constructor(private router: Router, private service: UsersService) {
    this.usuario = parseInt(localStorage.getItem('usuario') || "0");
    this.listaClassificacoes = service.classificacoes;
  }

  listaClassificacoes;
  usuario: number;

  modalGerenciarFiltro: boolean = false;

  feedback = 0;
  //Adicionado valor inicial como null no começo por sinalização de erro de sintaxe pelo VS Code.
  filtroSelecionado: { classificacao: string } | null = null;

  ngOnInit() {
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-= Funções Modal FeddBack Salvo com sucesso =-=-=-=-=-=-=-=-=-=-=-=-=-=

  // *Irá fechar o modal do feedback
  fechar() {
    this.feedback = 0;
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-= Fim Funções Modal FeddBack Salvo com sucesso =-=-=-=-=-=-=-=-=-=-=-=-=-=

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= MODAL GERENCIAR FILTRO =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  // *Irá fechar o modal de gerenciar filtro
  fecharModal() {
    this.modalGerenciarFiltro = false;
  }

  // *Irá salvar o novo item do filtro, fazendo aparecer o modal de feedback e fechando o modal de gerenciar filtro
  salvar() {
    this.fecharModal();
    this.feedback = 1;
    setTimeout(() => {
      this.feedback = 0;
    }, 5000);
  }
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= FIM MODAL GERENCIAR FILTRO =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= FILTRO EM SI =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // *Essa função irá dar check no input, caso ele clique na div
  checkDescartavel() {
    const input = document.querySelector("#checkDescartavel") as HTMLInputElement;
    if (input.checked == true) {
      input.checked = false;
    } else {
      input.checked = true;
    }
  }

  // *Essa função irá dar check no input, caso ele clique na div
  checkNaoDescartavel() {
    const input = document.querySelector("#checkNaoDescartavel") as HTMLInputElement;
    if (input.checked == true) {
      input.checked = false;
    } else {
      input.checked = true;
    }
  }

  // *Essa função irá dar check no input, caso ele clique na div
  checkSemEstoque() {
    const input = document.querySelector("#checkSemEstoque") as HTMLInputElement;
    if (input.checked == true) {
      input.checked = false;
    } else {
      input.checked = true;
    }
  }

  // *Essa função irá dar check no input, caso ele clique na div
  checkComEstoque() {
    const input = document.querySelector("#checkComEstoque") as HTMLInputElement;
    if (input.checked == true) {
      input.checked = false;
    } else {
      input.checked = true;
    }
  }

  // *Esse é complicado...
  filtrar(item: { classificacao: string }) {
    this.filtroSelecionado = item;
    this.fecharFiltro();

    if (document.querySelector("#containerFiltro")) {
      this.tirarFiltro();
    }

    let divFiltro = document.querySelector("#filtro") as HTMLDivElement;

    const containerFiltro = document.createElement("div");
    const textoFiltro = document.createElement("div");
    const containerExcluir = document.createElement("div");
    const iconExcluir = document.createElement("span");

    textoFiltro.innerText = item.classificacao;
    textoFiltro.style.fontSize = "var(--font-size--small)";
    textoFiltro.style.fontWeight = "500";
    iconExcluir.innerText = "close"

    containerFiltro.id = "containerFiltro";
    containerExcluir.id = "containerExcluir";
    iconExcluir.id = "iconExcluir";
    iconExcluir.className = "material-symbols-outlined";

    containerFiltro.style.marginTop = "10px"
    containerFiltro.style.display = "flex";
    containerFiltro.style.alignItems = "center";
    containerFiltro.style.padding = "5px"
    containerFiltro.style.borderRadius = "5px"
    containerFiltro.style.backgroundColor = "#F2F2F2";
    containerFiltro.style.width = "fit-content";
    containerFiltro.style.fontSize = "var(--font-size--default)";

    containerExcluir.style.display = "flex";
    containerExcluir.style.alignItems = "center";
    containerExcluir.style.marginLeft = "10px"
    containerExcluir.style.cursor = "pointer";
    containerExcluir.onclick = this.tirarFiltro;

    iconExcluir.style.fontSize = "20px"

    containerFiltro.appendChild(textoFiltro);
    containerFiltro.appendChild(containerExcluir);

    containerExcluir.appendChild(iconExcluir);

    divFiltro.appendChild(containerFiltro);
  }

  // *Irá levar para uma rota, que seria na opção clicada
  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  // *Irá abrir o modal de gerenciar filtro
  modalFiltro() {
    this.modalGerenciarFiltro = true;
  }

  // *Tendi nn
  tirarFiltro() {
    let divFiltro = document.querySelector("#filtro") as HTMLDivElement;
    let containerFiltro = document.querySelector("#containerFiltro") as HTMLDivElement;

    divFiltro.removeChild(containerFiltro);
    this.filtroSelecionado = null;
  }

  // *Caso ele clique na flecha, irá puxar o modal para a direita
  fecharFiltro() {
    const input = document.querySelector("#check") as HTMLInputElement;
    input.checked = true;
  }
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= FIM FILTRO EM SI =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

}
