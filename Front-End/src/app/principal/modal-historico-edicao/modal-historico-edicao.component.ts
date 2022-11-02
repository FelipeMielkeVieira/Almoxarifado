import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-historico-edicao',
  templateUrl: './modal-historico-edicao.component.html',
  styleUrls: ['./modal-historico-edicao.component.scss']
})
export class ModalHistoricoEdicaoComponent implements OnInit {
  checked: boolean = true;
  edicoes: any = [
  {data:"01/01/2020", usuario:"Atendente", descricao:"Uma descrição pequena", hora:"10:00"},
  {data:"02/01/2020", usuario:"Gerente", descricao:"Uma descrição média pois eu quero testar", hora:"11:00"},
  {data:"03/01/2020", usuario:"Sherek", descricao:"Aqui jas uma descrição bem grande para fazer testes de quanto cabe e como fica na tabela, então preciso saber", hora:"12:00"},
  {data:"04/01/2020", usuario:"Autor", descricao:"Descrição 4", hora:"13:00"},
  {data:"05/01/2020", usuario:"Atendente", descricao:"Descrição 5", hora:"14:00"},
  ];

  constructor() {
  }

  @Input() item = { id: 0, nome: "", caracteristicas: "", quantidade: 0, descartavel: false, imagem: {dados: "", id: 0, nome: "", tipo: ""}, classificacao: 0 };

  @Output() fecharModal = new EventEmitter<string>();

  ngOnInit() { }

  fecharModalHistorico() {
    this.fecharModal.emit("fechar");
  }

  selecionarRow(edicao: any) {
    edicao.checked = !edicao.checked;
  }

  getClass(edicao: any) {
    if (edicao.checked) 
      return 'table-active';
    return '';
  }

}