import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poblacionedadsimple',
  standalone: true,
  imports: [],
  templateUrl: './poblacionedadsimple.component.html',
  styleUrl: './poblacionedadsimple.component.css'
})
export class PoblacionedadsimpleComponent {
  selectedDate: string = '';
  showDateError: boolean = false;
  activeChecked: boolean = false;
  attendedChecked: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializar la fecha con el mes actual
    const date = new Date();
    const month = date.toLocaleString('es-ES', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    this.selectedDate = `${month} ${year}`;
  }

  openMonthYearPicker(): void {
    // Aquí implementarías la lógica para abrir el selector de fecha
    // Podrías usar una librería como ngx-mat-datetime-picker
  }

  showSelectedDate(): void {
    // Aquí implementarías la lógica para procesar la fecha seleccionada
    if (this.isValidDate()) {
      // Navegar a la página de gráficos con los parámetros seleccionados
      this.router.navigate(['/grafica'], {
        queryParams: {
          fecha: this.selectedDate,
          activos: this.activeChecked,
          atendidos: this.attendedChecked
        }
      });
    } else {
      this.showDateError = true;
    }
  }

  isValidDate(): boolean {
    // Implementar validación de fecha
    return true;
  }

  goBack(): void {
    this.router.navigate(['/poblacionedadsimple']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
