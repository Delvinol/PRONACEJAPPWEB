import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CJDRService } from '../../../cjdr.service';

@Component({
  selector: 'app-tratamientodiferenciadocjdr',
  templateUrl: './tratamientodiferenciadocjdr.component.html',
  styleUrls: ['./tratamientodiferenciadocjdr.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TratamientodiferenciadocjdrComponent implements OnInit {
  selectedDate: string = '';
  isAtendido: boolean = true;
  isActivo: boolean = false;

  constructor(
    private router: Router,
    private cjdrService: CJDRService
  ) {}

  ngOnInit() {
    // Establecer fecha inicial como el primer día del mes actual
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    this.selectedDate = `${year}-${month}`;
  }

  onDateChange(event: any) {
    this.selectedDate = event;
  }

  toggleStatus(status: 'atendido' | 'activo') {
    if (status === 'atendido') {
      this.isAtendido = true;
      this.isActivo = false;
    } else {
      this.isAtendido = false;
      this.isActivo = true;
    }
  }

  navigateToGraph(route: string) {
    const formattedDate = `${this.selectedDate}-01`;
    const incluirEstadoIng = this.isActivo ? '1' : '0';
  
    this.router.navigate([`/${route}`], {
      queryParams: {
        fecha: formattedDate,
        incluirEstadoIng: incluirEstadoIng
      }
    });
  }
  

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
