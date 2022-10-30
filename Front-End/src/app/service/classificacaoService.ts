import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClassificacaoService {
  constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/classificacao");
    }

}
