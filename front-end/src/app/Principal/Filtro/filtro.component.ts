import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/service';
import { ClassificacaoService } from 'src/app/service/classificacaoService';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  constructor(private router: Router, private classificacaoService: ClassificacaoService) {
    this.usuario = parseInt(localStorage.getItem('usuario') || "0");
    this.buscarClassificacoes();
  }

  @Output() itemFiltroSelecionado: any = new EventEmitter<{ classificacao: string }>();
  @Output() receberFiltros = new EventEmitter<any>();
  listaClassificacoes: any = [];
  filtrosSecundarios: any = [false, false, false, false, false];
  usuario: number;

  fundoModal: boolean = false;
  modalConfirmarAlteracoes: boolean = false;
  modalGerenciarFiltros: boolean = false;

  //Adicionado valor inicial como null no começo por sinalização de erro de sintaxe pelo VS Code.
  filtroSelecionado: { classificacao: string } | null = null;
  feedbackFiltrosSalvos = false;

  ngOnInit() {
    // Função para fechamento do filtro caso tenha sido clicado fora
    window.addEventListener("click", function (event) {
      try {
        if (!(event.target as HTMLElement).className.includes("parteFiltro")) {
          let filtro = document.querySelector("#check") as HTMLInputElement;
          if (!((event.target as HTMLElement).id == "check")) {
            try {
              if (!filtro.checked) {
                filtro.checked = true;
              }
            } catch (erro) {

            }
          }
        }
      } catch (error) {
        let filtro = document.querySelector("#check") as HTMLInputElement;
        filtro.checked = true;
      }
    });
  }

  // Função usada para emitir o output de filtrar os itens (facilidade para ser usado direto no html)
  emitirFiltro(param: any) {
    this.receberFiltros.emit(param);
  }

  buscarClassificacoes() {
    this.classificacaoService.getAll().subscribe(
      data => this.listaClassificacoes = data,
      error => { console.log(error) }
    );
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-= Fim Funções Modal FeedBack Salvo com sucesso =-=-=-=-=-=-=-=-=-=-=-=-=-=

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= FILTRO EM SI =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // *Essa função irá dar check no input, caso ele clique na div
  checkDescartavel() {
    const input = document.querySelector("#checkDescartavel") as HTMLInputElement;
    if (input.checked == true) {
      this.filtrosSecundarios[0] = false;
    } else {
      this.filtrosSecundarios[0] = true;
      this.filtrosSecundarios[1] = false;
    }
    this.emitirFiltro(this.filtrosSecundarios);
  }

  // *Essa função irá dar check no input, caso ele clique na div
  checkNaoDescartavel() {
    const input = document.querySelector("#checkNaoDescartavel") as HTMLInputElement;
    if (input.checked == true) {
      this.filtrosSecundarios[1] = false;
    } else {
      this.filtrosSecundarios[1] = true;
      this.filtrosSecundarios[0] = false;
    }
    this.emitirFiltro(this.filtrosSecundarios);
  }

  // *Essa função irá dar check no input, caso ele clique na div
  checkSemEstoque() {
    const input = document.querySelector("#checkSemEstoque") as HTMLInputElement;
    if (input.checked == true) {
      this.filtrosSecundarios[2] = false;
    } else {
      this.filtrosSecundarios[2] = true;
      this.filtrosSecundarios[3] = false;
    }
    this.emitirFiltro(this.filtrosSecundarios);
  }

  // *Essa função irá dar check no input, caso ele clique na div
  checkComEstoque() {
    const input = document.querySelector("#checkComEstoque") as HTMLInputElement;
    if (input.checked == true) {
      this.filtrosSecundarios[3] = false;
    } else {
      this.filtrosSecundarios[3] = true;
      this.filtrosSecundarios[2] = false;
    }
    this.emitirFiltro(this.filtrosSecundarios);
  }

  // *Essa função irá dar check no input, caso ele clique na div
  checkFavoritos() {
    const input = document.querySelector("#checkFavoritos") as HTMLInputElement;
    if (input.checked == true) {
      this.filtrosSecundarios[4] = false;
    } else {
      this.filtrosSecundarios[4] = true;
    }
    this.emitirFiltro(this.filtrosSecundarios);
  }

  // *Esse é complicado...
  filtrar(item: { id: number, classificacao: string }) {
    this.filtroSelecionado = item;
    this.fecharFiltro();
    this.itemFiltroSelecionado.emit(this.filtroSelecionado);

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
    containerExcluir.onclick = () => {
      let divFiltro = document.querySelector("#filtro") as HTMLDivElement;
      let containerFiltro = document.querySelector("#containerFiltro") as HTMLDivElement;

      divFiltro.removeChild(containerFiltro);
      this.filtroSelecionado = null;
      this.emitirFiltro({id: 0, tirar: 1 });
    };

    iconExcluir.style.fontSize = "20px"

    containerFiltro.appendChild(textoFiltro);
    containerFiltro.appendChild(containerExcluir);

    containerExcluir.appendChild(iconExcluir);

    divFiltro.appendChild(containerFiltro);
    this.emitirFiltro(item);
  }

  // *Irá levar para uma rota, que seria na opção clicada
  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  // *Tendi nn
  tirarFiltro() {
    let divFiltro = document.querySelector("#filtro") as HTMLDivElement;
    let containerFiltro = document.querySelector("#containerFiltro") as HTMLDivElement;

    divFiltro.removeChild(containerFiltro);
    this.filtroSelecionado = null;
    this.emitirFiltro({id: null, tirar: 0 });
  }

  // *Caso ele clique na flecha, irá puxar o modal para a direita
  fecharFiltro() {
    const input = document.querySelector("#check") as HTMLInputElement;
    input.checked = true;
  }
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= FIM FILTRO EM SI =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  // *Irá abrir o modal de gerenciar filtro
  abrirModalFiltro() {
    document.documentElement.style.overflow = "hidden";
    this.modalGerenciarFiltros = true;
  }

  // Função para abrir e fechar o modal de feedback de alteração nos filtros
  mudarModalFeedback() {
    if (!this.feedbackFiltrosSalvos) {
      this.feedbackFiltrosSalvos = true;
      setTimeout(() => {
        this.feedbackFiltrosSalvos = false;
      }, 4000);
    } else {
      this.feedbackFiltrosSalvos = false;
    }
  }

  // Função para fechar o modal de alteração de filtros e ativar o feedback caso salvas
  fecharModalFiltros(event: any) {
    this.modalGerenciarFiltros = false;
    document.documentElement.style.overflow = "visible";
    if (event) {
      this.mudarModalFeedback();
    }
  }
}
