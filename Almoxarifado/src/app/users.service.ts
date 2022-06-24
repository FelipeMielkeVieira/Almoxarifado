import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Object[]> {
        return this.httpClient.get<Object[]>('http://localhost:3000/users');
    }
}