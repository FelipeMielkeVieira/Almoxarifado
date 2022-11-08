import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LocalizacaoService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/localizacao");
  }

  getPage(param: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/localizacao/page?${param}`);
  }

  getByPai(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/localizacao/filho/${id}`);
  }

  countLocalizacoes(): Observable<any> {
    return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/localizacao/count");
  }

  postLocalizacoes(filtro: Object): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/alma_sis/localizacao", filtro, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }

  deleteLocalizacoes(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/alma_sis/localizacao/${id}`);
  }

}
