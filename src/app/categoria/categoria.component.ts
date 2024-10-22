import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})

export class CategoriaComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void{
    this.router.navigate([`/${route}`]);
  }
}
