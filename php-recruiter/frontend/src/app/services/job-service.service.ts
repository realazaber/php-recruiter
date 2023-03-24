import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/Job';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8000/api";

  getJobs(): Observable<Job[]> {
    const url = `${this.baseUrl}/jobs`;
    return this.http.get<Job[]>(url);
  }
}
