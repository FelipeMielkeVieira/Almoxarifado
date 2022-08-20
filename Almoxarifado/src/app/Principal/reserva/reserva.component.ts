import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @Input() reserva: {id: 0, data_retirada: '0000-00-00', data_devolucao: '0000-00-00', status: number, usuario_email: ''};

  listaItens = [];

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    var self = this;
    this.service.reservaProduto.forEach((e) => {
      if(e.reserva_id == self.reserva.id) {
        self.listaItens.push(self.service.retornaProduto(e.id));
      }
    })
    this.mudarCor();
  }

  mudarCor() {
    let divLinha = document.querySelector("#status") as HTMLHRElement;
    if(new Date() > new Date(this.reserva.data_devolucao) && this.reserva.status == 2) {
      divLinha.className = 'atrasado';
    } else
    if(new Date() > new Date(this.reserva.data_retirada) && this.reserva.status == 2) {
      divLinha.className = 'perto';
    } else if(this.reserva.status == 1) {
      divLinha.className = 'longe';
    }
  }

  verDetalhes() {
    localStorage.setItem('reserva', '1')
    this.router.navigate(['/professor/reservas/1'])
  }

  formatarData(data: string) {
    return new Date(data).toLocaleString();
  }

}
