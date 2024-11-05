import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CJDRService } from '../../../cjdr.service';

@Component({
  selector: 'app-infraccioncometidacjdr',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDatepickerModule, MatNativeDateModule, MatInputModule],
  templateUrl: './infraccioncometidacjdr.component.html',
  styleUrl: './infraccioncometidacjdr.component.css'
})
export class InfraccioncometidacjdrComponent {
  selectedDate: Date = new Date();
  isActive: boolean = false;

  constructor(
    private router:Router,
    private cjdrService: CJDRService
  ) {}

  ngOnInit() {
    const today = new Date();
    this.selectedDate = new Date(today.getFullYear(), today.getMonth(),1);
  }

  onDateChange(event: any) {
    const selectedDate = event.value;
    if (selectedDate) {
      this.selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(),1);
    }
  }

  chosenMonthHandler(normalizedMonth: Date, datepicker: any) {
    this.selectedDate = new Date(normalizedMonth.getFullYear(), normalizedMonth.getMonth(),1);
    datepicker.close();
  }

  setFilterType(isActive: boolean){
    this.isActive = isActive;
  }

  searchData() {
    const formattedDate = this.formatDate(this.selectedDate);
    this.router.navigate(['/grInfraccionCometida'], {
      queryParams: {
        fecha: formattedDate,
        isActive: this.isActive
      }
    });
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,'0');
    return `${year}-${month}-01`;
  }

  navigateTo(route: string){
    this.router.navigate([route]);
  }

  goBack(){
    this.router.navigate(['/cjdr']);
  }

}
