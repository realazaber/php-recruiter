import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';
import { User } from '../interfaces/User';

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

  loginUser(formData: FormData) {
    return this.http.post(`${this.baseUrl}/login`, formData);
  }


  loadUser(id: Number): User | null {
    return null;
  }

  loadEmployer(id: Number): User | null {
    return this.user;
  }
}
