import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onLogin(event: Event): void {
    event.preventDefault();
    this.http.post('http://appconsulta.pronacej.gob.pe:8081/api/v1/auth/authenticate', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        this.router.navigate(['/categoria']);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}