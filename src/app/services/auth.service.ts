import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface AuthResponse {
  id: number;
  token: string;
  typeUserId: number;
  name: string;
  lastName: string;
  dni: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://181.176.172.117:8081/api/v1/auth/authenticate';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, { email, password });
  }

  saveUserData(response: AuthResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('userData', JSON.stringify(response));
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
