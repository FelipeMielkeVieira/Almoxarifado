import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-atendente',
  templateUrl: './home-atendente.component.html',
  styleUrls: ['./home-atendente.component.css']
})
export class HomeAtendenteComponent implements OnInit {

  aparecer = 0

  constructor() { }

  ngOnInit() {
  }

  aparecerModal() {
    this.aparecer = 1
    let containerGeral = document.querySelector('#container') as HTMLElement;
    containerGeral.style.opacity = '0.5';
  }

}
