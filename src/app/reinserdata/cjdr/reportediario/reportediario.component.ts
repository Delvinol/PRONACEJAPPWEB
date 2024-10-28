import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportediario',
  standalone: true,
  templateUrl: './reportediario.component.html',
  styleUrls: ['./reportediario.component.css']
})
export class ReportediarioComponent {
  fechaSeleccionada: string = '';

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`], { queryParams: { fecha: this.fechaSeleccionada } });
  }

  // Método para manejar la selección de fecha
  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fechaSeleccionada = input.value;  // Suponiendo que usas un input de tipo fecha
  }
}
