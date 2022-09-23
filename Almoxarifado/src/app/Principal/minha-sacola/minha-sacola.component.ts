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
    if(this.usuario != 1) {
      this.sacola = this.service.retornaSacola(parseInt(this.route.snapshot.paramMap.get('id')));
      this.produtosSacola = this.service.retornaProdutosSacola(this.sacola.id);
    } else {
      this.sacola = this.service.retornaReserva(parseInt(this.route.snapshot.paramMap.get('id')));
      this.produtosSacola = this.service.retornaProdutosReserva(this.sacola.id);
    }
    this.dataSacola = new Date(this.sacola.data_devolucao);
  }

  dataAtual = new Date();
  dataSacola;
  produtosSacola = [];
  sacola;
  professorReserva = "";
  calendarioAberto1 = 0;
  calendarioAberto2 = 0;

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
    if(this.professorReserva != "") {
      if(localStorage.getItem('usuario') == '1') {
        this.router.navigate(['/professor/sacolas']);
      } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
        this.router.navigate(['/atendente/sacolas']);
      } else {
        this.router.navigate(['/supervisor/sacolas'])
      }
    }
    //Colocar modal de verificação
    //Fazer a reserva
  }

  excluir() {
    if(localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas']);
    } else {
      this.router.navigate(['/supervisor/sacolas'])
    }
    //Colocar modal de verificação
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

  abrirCalendario(numero: number) {
    if(this.usuario != 1) {
      if(numero == 1) {
        if(this.calendarioAberto1 == 0) {
          this.calendarioAberto1 = 1;
        } else {
          this.calendarioAberto1 = 0;
        }
        this.calendarioAberto2 = 0;
      } else {
        if(this.calendarioAberto2 == 0) {
          this.calendarioAberto2 = 1;
        } else {
          this.calendarioAberto2 = 0;
        }
        this.calendarioAberto1 = 0;
      }
    }
  }

  salvarData(evento, numero) {
    if(numero == 1) {
      this.calendarioAberto1 = 0;
      this.sacola.data_retirada = evento;
    } else {
      this.calendarioAberto2 = 0;
      this.sacola.data_devolucao = evento;
    }
  }

  formatarData(data: string) {
    return new Date(data).toLocaleString();
  }

  cancelarReserva() {
    
  }

}
