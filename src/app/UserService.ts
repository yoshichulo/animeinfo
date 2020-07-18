import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    url = 'http://localhost:3000/';
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get(this.url + 'animes/latest/8');
    }
}
