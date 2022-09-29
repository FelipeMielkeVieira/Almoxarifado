import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-esquecerSenha",
  templateUrl: "./esquecerSenha.component.html",
  styleUrls: ["./esquecerSenha.component.css"],
})
export class EsquecerSenhaComponent implements OnInit {

  etapaRedefinicaoSenha: number = 1;

  constructor() {}

  ngOnInit() {
    
  }
}
