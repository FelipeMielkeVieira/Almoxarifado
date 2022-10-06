import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor(private router:Router, private service: UsersService) {
    this.usuario = parseInt(localStorage.getItem('usuario'));
    this.listaClassificacoes = service.classificacoes;
  }

  listaClassificacoes;
  usuario: number;
  aparecer: number = 0;
  feedback = 0;
  filtroSelecionado:number;

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
    this.aparecer = 0;
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

  // *Esse é complicado...
  filtrar(item) {
    this.filtroSelecionado = item;
    this.fecharFiltro();

    if(document.querySelector("#containerFiltro")) {
      this.tirarFiltro();
    }

    let divFiltro = document.querySelector("#filtro");

    const containerFiltro = document.createElement("div");
    const textoFiltro = document.createElement("p");
    const containerExcluir = document.createElement("div");
    const imgExcluir = document.createElement("img");

    textoFiltro.innerText = item.classificacao;
    imgExcluir.src = "../../../assets/close.png";

    containerFiltro.id = "containerFiltro";
    containerExcluir.id = "containerExcluir";
    imgExcluir.id = "imgExcluir";

    containerFiltro.style.marginTop = "10px"
    containerFiltro.style.display = "flex";
    containerFiltro.style.alignItems = "center";
    containerFiltro.style.padding = "5px"
    containerFiltro.style.borderRadius = "5px"
    containerFiltro.style.backgroundColor = "white";
    containerFiltro.style.border = "1px solid gray";
    containerFiltro.style.width = "fit-content";
    containerFiltro.style.fontSize = "var(--font-size--default)";

    containerExcluir.style.display = "flex";
    containerExcluir.style.alignItems = "center";
    containerExcluir.style.marginLeft = "10px"
    containerExcluir.style.cursor = "pointer";
    containerExcluir.onclick = this.tirarFiltro;

    imgExcluir.style.width = "15px"

    containerFiltro.appendChild(textoFiltro);
    containerFiltro.appendChild(containerExcluir);

    containerExcluir.appendChild(imgExcluir);

    divFiltro.appendChild(containerFiltro);
  }

  // *Irá levar para uma rota, que seria na opção clicada
  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  // *Irá abrir o modal de gerenciar filtro
  modalFiltro() {
    this.aparecer = 1;
  }

  // *Tendi nn
  tirarFiltro() {
    let divFiltro = document.querySelector("#filtro");
    let containerFiltro = document.querySelector("#containerFiltro");

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
