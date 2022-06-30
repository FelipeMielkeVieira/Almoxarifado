import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cadastro: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    if(localStorage.getItem('cadastro')) {
      localStorage.removeItem('cadastro');
      this.cadastro = 1;
    }
  }

  ngOnInit() {
    if(this.cadastro == 1) {
      this.modalCadastro();
    }
    this.modalCadastro();
  }

  cadastrar(){
    this.router.navigate(['/cadastro']);
  }

  modalCadastro() {
    this.cadastro = 1;
    // setTimeout(() => {
    //   this.cadastro = 0;
    // }, 3000);
  }

}
