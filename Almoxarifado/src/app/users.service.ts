import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {

    constructor(private httpClient: HttpClient) {
    }

    usuarios = [
        {nome: "Felipe", email: "felipe_mielke-vieira@estudante.sc.senai.br", senha: "123", tipo: 1},
        {nome: "Kenzo", email: "kenzo_sato@estudante.sc.senai.br", senha: "123", tipo: 2},
        {nome: "Matheus", email: "matheus_hohmann@estudante.sc.senai.br", senha: "123", tipo: 3},
        {nome: "Thiago", email: "thiago_braga@estudante.sesisenai.org.br", senha: "123", tipo: 4}
    ]

    // findAll(): Observable<Object[]> {
    //     return this.httpClient.get<Object[]>('http://localhost:3000/users');
    // }
}