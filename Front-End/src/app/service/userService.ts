import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/usuario");
  }

  getCadastros(tipoUsuario: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/usuario/tipo-usuario/${tipoUsuario}`);
  }

  getUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/usuario/tipo-usuario-excluir/${"PENDENTE"}`);
  }

  getUsuariosPage(param: string): Observable<any[]> {
    if (param == "") {
      return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/usuario/page/users");
    } else {
      return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/produto/page/users?${param}`);
    }
  }

  getUsuariosPageByNome(nome: string, param: string): Observable<any[]> {
    if (param == "") {
      return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/usuario/page/users/${nome}`);
    } else {
      return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/produto/page/users/${nome}?${param}`);
    }
  }

  getCadastrosPage(param: string): Observable<any[]> {
    if (param == "") {
      return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/usuario/page/cadastros");
    } else {
      return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/produto/page/cadastros?${param}`);
    }
  }

  getCadastrosPageByNome(nome: string, param: string): Observable<any[]> {
    if (param == "") {
      return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/usuario/page/cadastros/${nome}`);
    } else {
      return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/produto/page/cadastros/${nome}?${param}`);
    }
  }

  getCountCadastros(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/usuario/count-cadastros");
  }

  getCountCadastrosByNome(nome: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/alma_sis/usuario/count-cadastros/${nome}`);
  }

  getCountUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/usuario/count-users");
  }

  getCountUsersByNome(nome: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/usuario/count-users/${nome}`);
  }

  postUser(usuario: Object): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/alma_sis/usuario", usuario, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }

  putUser(usuario: Object, email: string): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/alma_sis/usuario/${email}`, usuario, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }

  deleteUser(email: string): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/alma_sis/usuario/${email}`);
  }

}
