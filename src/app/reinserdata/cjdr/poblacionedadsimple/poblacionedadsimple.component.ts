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
  template: `
    <div class="container">
      <div class="header">
        <button class="home-button" (click)="navigateTo('/')" [style.background-color]="'#00aae6'">
          <i class="fas fa-home"></i>
        </button>
        
        <div class="title">
          <h2>Elegir fecha del gráfico</h2>
        </div>
        
        <button class="back-button" (click)="goBack()" [style.background-color]="'#00aae6'">
          Atrás
        </button>
      </div>

      <div class="date-section">
  <h3>Fecha a buscar</h3>
  <div class="date-input-container">
    <input 
      matInput 
      [matDatepicker]="picker" 
      placeholder="Elegir Mes y Año" 
      (dateChange)="onDateChange($event)"
      class="date-picker"
    >
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker 
      #picker 
      startView="multi-year" 
      (monthSelected)="chosenMonthHandler($event, picker)" 
      panelClass="month-picker" 
    ></mat-datepicker>
    <button 
      class="search-button" 
      (click)="searchData()" 
      [style.background-color]="'#00aae6'"
    >
      <i class="fas fa-search"></i>
    </button>
  </div>
</div>


      <div class="filter-options">
        <div class="checkbox-container">
          <input 
            type="radio" 
            id="atendidos" 
            name="filterType" 
            [checked]="!isActive"
            (change)="setFilterType(false)"
          >
          <label for="atendidos">ATENDIDOS: Población acumulada en un periodo</label>
        </div>
        
        <div class="checkbox-container">
          <input 
            type="radio" 
            id="activos" 
            name="filterType" 
            [checked]="isActive"
            (change)="setFilterType(true)"
          >
          <label for="activos">ACTIVOS: Adolescentes que están siendo atendidos</label>
        </div>
      </div>

      <div class="footer">
        <img src="logos/ministeriologo.png" alt="Ministerio" class="footer-logo">
        <img src="logos/pronacejlogo.png" alt="Pronacej" class="footer-logo">
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }

    .home-button, .back-button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }

    .home-button {
      width: 45px;
      height: 45px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .title {
      text-align: center;
      font-weight: bold;
    }

    .date-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
    }

    .date-input-container {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .date-picker {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    .search-button {
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .filter-options {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 30px;
    }

    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .footer {
      margin-top: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 0;
    }

    .footer-logo {
      height: 50px;
      object-fit: contain;
    }
  `]
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