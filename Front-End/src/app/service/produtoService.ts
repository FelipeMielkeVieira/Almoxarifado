import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/produto");
    }

    // postProduto(produto: Object, imagem: any, anexos: any): Observable<any> {
    //     const formData = new FormData();
    //     formData.append("produto", JSON.stringify(produto));
    //     formData.append("imagem", imagem);
    //     formData.append("anexos", anexos);

    //     return this.httpClient.post<any>("http://localhost:8080/alma_sis/produto", formData, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    // }

    putProduto(usuario: Object, email: string): Observable<any> {
        return this.httpClient.put<any>(`http://localhost:8080/alma_sis/usuario/${email}`, usuario, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    }

    deleteProduto(email: string): Observable<any> {
        return this.httpClient.delete<any>(`http://localhost:8080/alma_sis/usuario/${email}`);
    }

}
