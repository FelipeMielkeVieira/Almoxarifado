import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/produto");
    }

    getCount(): Observable<any> {
        return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/produto/count");
    }

    getPage(param: string): Observable<any[]> {
        if(param == "") {
            return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/produto/page");
        } else {
            return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/produto/page?${param}`);
        }
    }

    postProduto(produto: Object, imagem: File, anexos: Array<File>): Observable<any> {
        const formData = new FormData();
        formData.set("produto", JSON.stringify(produto));
        formData.set("imagem", imagem);
        formData.set("anexos", JSON.stringify(anexos));

        return this.httpClient.post<any>("http://localhost:8080/alma_sis/produto", formData);
    }

    putProduto(usuario: Object, email: string): Observable<any> {
        return this.httpClient.put<any>(`http://localhost:8080/alma_sis/usuario/${email}`, usuario, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    }

    deleteProduto(email: string): Observable<any> {
        return this.httpClient.delete<any>(`http://localhost:8080/alma_sis/usuario/${email}`);
    }

}
