import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  createUser(formData: FormData) {
    return this.http.post('http://127.0.0.1:8000/api/users', formData);
  }
}
