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

  postUser(usuario: Object): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/alma_sis/usuario", usuario, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }

  deleteUser(email: string): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/alma_sis/usuario/${email}`);
  }

}
