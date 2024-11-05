// poblacionedadsimple.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CJDRService } from '../../../../app/cjdr.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-poblacionedadsimple',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDatepickerModule, MatNativeDateModule, MatInputModule],
  templateUrl: './poblacionedadsimple.component.html',
  styleUrl: './poblacionedadsimple.component.css'
})
export class PoblacionEdadSimpleComponent implements OnInit {
  selectedDate: Date = new Date();
  isActive: boolean = false;

  constructor(
    private router: Router,
    private cjdrService: CJDRService
  ) {}

  ngOnInit() {
    // Establece la fecha por defecto como el primer día del mes actual
    const today = new Date();
    this.selectedDate = new Date(today.getFullYear(), today.getMonth(), 1);
  }

  onDateChange(event: any) {
    // Este evento se activará al seleccionar una fecha en el datepicker
    const selectedDate = event.value;
    if (selectedDate) {
      this.selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    }
  }
  
  chosenMonthHandler(normalizedMonth: Date, datepicker: any) {
    // Se selecciona el mes y se cierra el datepicker
    this.selectedDate = new Date(normalizedMonth.getFullYear(), normalizedMonth.getMonth(), 1);
    datepicker.close();
  }
  

  setFilterType(isActive: boolean) {
    this.isActive = isActive;
  }

  searchData() {
    const formattedDate = this.formatDate(this.selectedDate);
    this.router.navigate(['/grPoblacionEdadSimple'], {
      queryParams: {
        fecha: formattedDate,
        isActive: this.isActive
      }
    });
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}-01`;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  goBack() {
    this.router.navigate(['/cjdr']);
  }
}