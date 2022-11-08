import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClassificacaoService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/classificacao");
  }

  postFiltros(filtro: Object): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/alma_sis/classificacao", filtro, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }

  putFiltro(filtro: any, id: number): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/alma_sis/classificacao/${id}`, filtro, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }

  deleteFiltros(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/alma_sis/classificacao/${id}`);
  }

}
