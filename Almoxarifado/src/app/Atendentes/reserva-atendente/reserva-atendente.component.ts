import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-atendente',
  templateUrl: './reserva-atendente.component.html',
  styleUrls: ['./reserva-atendente.component.css']
})
export class ReservaAtendenteComponent implements OnInit {

  @Input() lista;

  constructor() { }

  ngOnInit() {
  }


}
