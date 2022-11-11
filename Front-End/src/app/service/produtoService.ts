import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/produto");
    }

    getCount(param: HttpParams): Observable<any> {
        return this.httpClient.get<any[]>("http://localhost:8080/alma_sis/produto/page/count", { params: param });
    }

    getPage(pagina: string, param: HttpParams): Observable<any[]> {
        return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/produto/page?${pagina}`, { params: param });
    }

    getByNome(param: string, ordenacao: string): Observable<any[]> {
        return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/produto/page/${param}?${ordenacao}`);
    }

    getClassificacao(classificacao: any): Observable<any> {
        return this.httpClient.get<any[]>(`http://localhost:8080/alma_sis/produto/classificacoes/${classificacao.id}`);
    }

    postProduto(produto: Object, imagem: File, anexos: File[]): Observable<any> {
        const formData = new FormData();
        formData.set("produto", JSON.stringify(produto));
        formData.set("imagem", imagem);

        if (anexos.length > 0) {
            for (const anexo of anexos) {
                formData.append("anexos", anexo);
            }
        }

        if (anexos.length > 0) {
            return this.httpClient.post<any>("http://localhost:8080/alma_sis/produto/anexos", formData);
        } else {
            return this.httpClient.post<any>("http://localhost:8080/alma_sis/produto", formData);
        }
    }

    putProduto(item: Object, id: number): Observable<any> {
        return this.httpClient.put<any>(`http://localhost:8080/alma_sis/produto/${id}`, item, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    }

    removerLocalizacoes(classificacao: Object): Observable<any> {
        return this.httpClient.put<any>(`http://localhost:8080/alma_sis/produto/remover-classificacao`, classificacao, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    }

    deleteProduto(id: number): Observable<any> {
        return this.httpClient.delete<any>(`http://localhost:8080/alma_sis/produto/${id}`);
    }

}
