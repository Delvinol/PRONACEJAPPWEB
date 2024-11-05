import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CJDRService } from '../../../../app/cjdr.service';

@Component({
  selector: 'app-situacion-laboral',
  templateUrl: './situacionlaboral.component.html',
  styleUrls: ['./situacionlaboral.component.css']

})
export class SituacionLaboralComponent implements OnInit {
  selectedDate: Date = new Date();
  includeEstadoIng: boolean = false;

  constructor(private router: Router, private cjdrService: CJDRService) {}

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

  setFilterType(include: boolean) {
    this.includeEstadoIng = include;
  }

  searchData() {
    const formattedDate = this.formatDate(this.selectedDate);
    this.router.navigate(['/grSituacionLaboral'], {
      queryParams: {
        fecha: formattedDate,
        incluirEstadoIng: this.includeEstadoIng ? 1 : 0
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
