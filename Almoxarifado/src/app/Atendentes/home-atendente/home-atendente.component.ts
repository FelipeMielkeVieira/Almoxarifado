import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-atendente',
  templateUrl: './home-atendente.component.html',
  styleUrls: ['./home-atendente.component.css']
})
export class HomeAtendenteComponent implements OnInit {

  aparecer: number = 1

  constructor() { }

  ngOnInit() {
  }

  aparecerModal() {
    this.aparecer = 1
  }

  fecharModal() {
    this.aparecer = 0
  }


}
