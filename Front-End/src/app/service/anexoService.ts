import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AnexoService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/anexo");
  }

  postAnexo(anexo: File): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/alma_sis/anexo", anexo, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }

  deleteAnexo(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/alma_sis/anexo/${id}`);
  }

}
