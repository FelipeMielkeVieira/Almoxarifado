import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home-professor',
  templateUrl: './home-professor.component.html',
  styleUrls: ['./home-professor.component.css']
})
export class HomeProfessorComponent implements OnInit {

  constructor(private service: UsersService) {
    this.listaItens = service.itens;
  }

  listaItens;
  aparecer: boolean = false;

  ngOnInit() {
  }

  abrirModalItem() {
    this.aparecer = true;
  }

  fecharModal() {
    this.aparecer = false;
  }
}
