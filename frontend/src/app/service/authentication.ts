import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface loginDetails{
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class Authentication {
  private baseUrl = 'http://localhost:8010/auth';

  constructor(private http: HttpClient) { }

  getAuthenticationDetails(): Observable<loginDetails[]>{
    return this.http.get<loginDetails[]>(`${this.baseUrl}/details`)
  }
}