import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-minha-sacola',
  templateUrl: './minha-sacola.component.html',
  styleUrls: ['./minha-sacola.component.css']
})
export class MinhaSacolaComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: UsersService) { }

  ngOnInit() {
    this.usuario = parseInt(localStorage.getItem('reserva'));
    localStorage.removeItem('reserva');
    this.sacola = this.service.retornaSacola(parseInt(this.route.snapshot.paramMap.get('id')));
    this.produtosSacola = this.service.retornaProdutosSacola(this.sacola.id);
  }

  produtosSacola = [];
  sacola;

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
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas']);
    } else {
      this.router.navigate(['/supervisor/sacolas'])
    }
  }

  excluir() {
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas']);
    } else {
      this.router.navigate(['/supervisor/sacolas'])
    }
  }

  minhasReservas() {
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/reservas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/professor/reservas']);
    } else {
      this.router.navigate(['/professor/reservas'])
    }
  }

  buscarProfessores() {
    return [{ id: 1, nome: "Professor 1" }, { id: 2, nome: "Professor 2" },
    { id: 3, nome: "Professor 3" }, { id: 4, nome: "Professor 4" },
    { id: 5, nome: "Professor 5" }];
  }

  qtdProduto(tipo, index) {
    if(tipo == 1) {
      if(this.produtosSacola[index].qtd_atual > 1) {
        this.produtosSacola[index].qtd_atual--;
      }
    } else {
      if(!((this.produtosSacola[index].qtd_atual + 1) > this.produtosSacola[index].quantidade)) {
        this.produtosSacola[index].qtd_atual++;
      }
    }
  }
}
