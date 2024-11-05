// situacioneducativaactual.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CJDRService } from '../../../../app/cjdr.service';

@Component({
  selector: 'app-situacioneducativaactual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './situacioneducativaactual.component.html',
  styleUrls: ['./situacioneducativaactual.component.css']
})
export class SituacionEducativaActualComponent implements OnInit {
  selectedDate: Date = new Date();
  isActive: boolean = false;

  constructor(
    private router: Router,
    private cjdrService: CJDRService
  ) {}

  ngOnInit() {
    const today = new Date();
    this.selectedDate = new Date(today.getFullYear(), today.getMonth(), 1);
  }

  onDateChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const [year, month] = inputValue.split('-');
    if (year && month) {
      this.selectedDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    } else {
      console.error('Formato de fecha inválido, por favor ingresa en formato YYYY-MM');
    }
  }

  setFilterType(isActive: boolean) {
    this.isActive = isActive;
  }

  searchData() {
    const formattedDate = this.formatDate(this.selectedDate);
    this.router.navigate(['/grSituacionEducativaActual'], {
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
