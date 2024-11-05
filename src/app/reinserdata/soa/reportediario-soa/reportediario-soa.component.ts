import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportediario-soa',
  standalone: true,
  imports: [],
  templateUrl: './reportediario-soa.component.html',
  styleUrl: './reportediario-soa.component.css'
})
export class ReportediarioSOAComponent {
  fechaSeleccionada: string = '';

  constructor(private router: Router){
    const savedFecha = localStorage.getItem('fechaSeleccionada');
    if (savedFecha){
      this.fechaSeleccionada = savedFecha;
    }
  }

  navigateTo(route: string):void {
    this.router.navigate([`/${route}`], {queryParams: {fecha: this.fechaSeleccionada}});
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fechaSeleccionada = input.value;

    localStorage.setItem('fechaSeleccionada', this.fechaSeleccionada);
  }

}
