import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @Input() corStatus: string;

  listaItens = [
    {nome: "Abracadeira"},
    {nome: "Resistor"},
    {nome: "Bateria"}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verDetalhes() {
    localStorage.setItem('reserva', '1')
    this.router.navigate(['/professor/reservas/1'])
  }

}
