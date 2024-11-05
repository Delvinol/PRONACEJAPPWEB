import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  lastName: string = '';
  entity: string = '';
  dni: string = '';
  email: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onRegister(event: Event): void {
    event.preventDefault();
    
    const registerData = {
      typeUserId: 2,
      name: this.name,
      lastName: this.lastName,
      entity: this.entity,
      dni: this.dni,
      email: this.email
    };

    this.http.post('http://appconsulta.pronacej.gob.pe:8081/api/v1/auth/register', registerData)
      .subscribe({
        next: () => {
          alert('La solicitud fue enviada');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
  }
}