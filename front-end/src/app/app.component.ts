import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front-End';

  constructor(private darkModeService: DarkModeService) {

  }

  ngOnInit() {
    // Ao invés de usar um item setado manualmente, poderia usar o item dark-mode do localStorage
    if(localStorage.getItem("modoEscuro") == "ativo" && document.body.style.backgroundColor == "#ffffff") {
      this.darkModeService.toggle();
    }
  }
}
