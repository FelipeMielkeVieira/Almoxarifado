import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: number = 0;

  constructor() { }

  ngOnInit() {
  }

  abrirUser() {
    if(this.user == 0) {
      this.user = 1;
    } else {
      this.user = 0;
    }
  }

}
