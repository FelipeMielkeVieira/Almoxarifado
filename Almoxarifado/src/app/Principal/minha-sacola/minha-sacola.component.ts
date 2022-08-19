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
  listaProfessores = this.buscarProfessores();

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

  minhasReservas() {
    this.router.navigate(['/professor/reservas'])
  }

  atendente() {
    let usuario = parseInt(localStorage.getItem("usuario"));

    if (usuario == 2 || usuario == 3)
      return true;
    return false;
  }

  buscarProfessores() {
    return [{ id: 1, nome: "Professor 1" }, { id: 2, nome: "Professor 2" },
    { id: 3, nome: "Professor 3" }, { id: 4, nome: "Professor 4" },
    { id: 5, nome: "Professor 5" }];
  }
}
