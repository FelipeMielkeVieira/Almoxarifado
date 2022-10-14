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
    this.listaItens = this.service.retornaProdutosReserva(this.reserva.id);
    this.mudarCor();
  }

  // *Muda a cor do status da reserva
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

  // *Entra no detalhe da reserva (Abrindo uma nova pagina)
  verDetalhes() {
    localStorage.setItem('reserva', '1')
    this.router.navigate(['/professor/reservas/1'])
  }

  // *Formata a data
  formatarData(data: string) {
    return new Date(data).toLocaleString();
  }

}
