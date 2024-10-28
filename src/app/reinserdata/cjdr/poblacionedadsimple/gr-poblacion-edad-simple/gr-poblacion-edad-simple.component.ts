// gr-poblacion-edad-simple.component.ts
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CJDRService, EdadSimpleData } from '../../../../cjdr.service';
import { Router } from '@angular/router';

Chart.register(...registerables);

@Component({
  selector: 'app-gr-poblacion-edad-simple',
  templateUrl: './gr-poblacion-edad-simple.component.html',
  styleUrls: ['./gr-poblacion-edad-simple.component.css']
})
export class GrPoblacionEdadSimpleComponent implements OnInit {
  reportData: EdadSimpleData[] = [];
  totalPoblacion: number = 0;
  chart: any;
  selectedDate: string = '';
  isActiveSelected: boolean = true;
  showChart: boolean = false;

  colors: string[] = [
    '#4682B4', '#43A047', '#FB8C00', '#E53935', '#8E24AA',
    '#3949AB', '#00ACC1', '#7CB342', '#C0CA33', '#FFB300'
  ];

  constructor(
    private cjdrService: CJDRService,
    private router: Router
  ) {}

  ngOnInit() {
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
  }

  onDateSelect(event: any): void {
    this.selectedDate = event.target.value;
    this.getData();
  }

  setTipoSeleccion(esActivo: boolean): void {
    this.isActiveSelected = esActivo;
    if (this.selectedDate) {
      this.getData();
    }
  }

  getData(): void {
    this.cjdrService.getEdadSimpleData(this.selectedDate, this.isActiveSelected)
      .subscribe(data => {
        this.reportData = data;
        this.calculateTotal();
        this.setupChart();
        this.showChart = true;
      });
  }

  private calculateTotal(): void {
    this.totalPoblacion = this.reportData.reduce((sum, item) => sum + item.cantidad, 0);
  }

  private setupChart(): void {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.reportData.map(item => item.edad),
        datasets: [{
          data: this.reportData.map(item => item.cantidad),
          backgroundColor: this.colors,
          barThickness: 30,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.parsed.x;
                const percentage = ((value / this.totalPoblacion) * 100).toFixed(1);
                return `${value} (${percentage}%)`;
              }
            }
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => {
              const percentage = ((value as number / this.totalPoblacion) * 100).toFixed(1);
              return value > 0 ? `${percentage}%` : '';
            },
            color: '#000',
            font: { weight: 'bold' }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: { display: false }
          },
          y: {
            grid: { display: false }
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }

  onHome(): void {
    this.router.navigate(['/']);
  }

  onBack(): void {
    this.router.navigate(['/']);
  }
}