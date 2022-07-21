import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minha-sacola',
  templateUrl: './minha-sacola.component.html',
  styleUrls: ['./minha-sacola.component.css']
})
export class MinhaSacolaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuario = parseInt(localStorage.getItem('reserva'));
    localStorage.removeItem('reserva');
  }

  usuario: number;

  home() {
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

  minhasSacolas(){
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas']);
    } else {
      this.router.navigate(['/supervisor/sacolas'])
    }
  }

  reservar() {
    this.router.navigate(["/professor/sacolas"])
  }
}
