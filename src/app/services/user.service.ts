import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get('/users').map((response: Response) => response.json());
    }

    getById(id: string) {
        return this.http.get('/users/' + id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/users/register', user);
    }

    update(user: User) {
        return this.http.put('/users/' + user.id, user);
    }

    delete(id: string) {
        return this.http.delete('/users/' + id);
    }
}
