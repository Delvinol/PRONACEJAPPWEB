import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportediario',
  templateUrl: './reportediario.component.html',
  styleUrls: ['./reportediario.component.css'],
})
export class ReportediarioComponent {
  fechaSeleccionada: string = '';

  constructor(private router: Router) {
    // Cargar la fecha desde localStorage si existe
    const savedFecha = localStorage.getItem('fechaSeleccionada');
    if (savedFecha) {
      this.fechaSeleccionada = savedFecha;
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`], { queryParams: { fecha: this.fechaSeleccionada } });
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fechaSeleccionada = input.value;

    // Guardar la fecha en localStorage
    localStorage.setItem('fechaSeleccionada', this.fechaSeleccionada);
  }
}
