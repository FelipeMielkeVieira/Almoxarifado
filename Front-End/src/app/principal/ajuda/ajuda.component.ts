import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.scss']
})
export class AjudaComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  home() {
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

  fecharCard(card: number) {
    let cardElement: any = null;
    let expandirElement: any = null;
    let headerElement: any = null;
    let conteudoElement: any = null;
    switch(card) {
      case 1:
        cardElement = document.getElementById('card1');
        expandirElement = document.getElementById('expandir1');
        headerElement = document.getElementById('header1');
        conteudoElement = document.getElementById('conteudo1');
        break;
      case 2:
        cardElement = document.getElementById('card2');
        expandirElement = document.getElementById('expandir2');
        headerElement = document.getElementById('header2');
        conteudoElement = document.getElementById('conteudo2');
        break;
      case 3:
        cardElement = document.getElementById('card3');
        expandirElement = document.getElementById('expandir3');
        headerElement = document.getElementById('header3');
        conteudoElement = document.getElementById('conteudo3');
        break;
    }
    if (cardElement.style.display == 'block' ) {
      expandirElement.style.transition = 'transform 1s';
      expandirElement.style.transform = 'rotate(360deg)';
      cardElement.style.animation = "subir 1.5s"
      conteudoElement.style.display = 'none';
      setTimeout(() => {
        cardElement.style.display = 'none';
      },1500);

    } else {
      expandirElement.style.transform = 'rotate(-180deg)';
      expandirElement.style.transition = 'transform 1s';
      cardElement.style.display = 'block';
      cardElement.style.animation = "descer 1s"
    }
  }
}