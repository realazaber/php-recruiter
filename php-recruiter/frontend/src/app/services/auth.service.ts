import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  baseUrl: string = 'http://127.0.0.1:8000/api';

  user: User | null = null;

  checkAuth() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);
    }
  }

  loginUser(formData: FormData) {
    return this.http.post(`${this.baseUrl}/login`, formData);
  }

  logOut() {

    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
