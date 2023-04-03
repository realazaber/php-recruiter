import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl: string = 'http://127.0.0.1:8000/api';

  user: User | null = null;

  constructor(private http: HttpClient) { }

  createUser(formData: FormData) {
    return this.http.post(`${this.baseUrl}/register`, formData);
  }

  loadUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  loadEmployer(id: Number): User | null {
    return this.user;
  }
}
