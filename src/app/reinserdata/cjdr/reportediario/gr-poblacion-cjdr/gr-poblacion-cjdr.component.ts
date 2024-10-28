import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CJDRService } from '../../../../cjdr.service';
import { ActivatedRoute } from '@angular/router';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);

interface CJDRData {
  centro_cjdr: string;
  poblacion_cjdr: number;
}

@Component({
  selector: 'app-gr-poblacion-cjdr',
  templateUrl: './gr-poblacion-cjdr.component.html',
  styleUrls: ['./gr-poblacion-cjdr.component.css']
})
export class GrPoblacionCJDRComponent implements OnInit {
  reportData: CJDRData[] = [];
  totalPoblacion: number = 0;
  chart: any;

  colors: string[] = [
    '#4682B4', // Pronacej1
    '#43A047', // Pronacej2
    '#FB8C00', // Pronacej3
    '#E53935', // Pronacej4
    '#8E24AA', // Pronacej5
    '#3949AB', // Pronacej6
    '#00ACC1', // Pronacej7
    '#7CB342', // Pronacej8
    '#C0CA33', // Pronacej9
    '#FFB300'  // Pronacej10
  ];

  constructor(private route: ActivatedRoute, private cjdrService: CJDRService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const fecha = params['fecha'];
      if (fecha) {
        this.getData(fecha);
      }
    });
  }

  private getData(fecha: string) {
    this.cjdrService.getDailyCJDRData(fecha).subscribe(data => {
      this.reportData = data;
      this.calculateTotal();
      this.setupChart();
    });
  }

  private calculateTotal() {
    this.totalPoblacion = this.reportData.reduce((sum, item) => sum + item.poblacion_cjdr, 0);
  }

  private setupChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.reportData.map(item => item.centro_cjdr),
        datasets: [{
          data: this.reportData.map(item => item.poblacion_cjdr),
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
            formatter: (value, context) => {
              const rawValue = value as number;
              const total = this.totalPoblacion; // Total general de población
              const percentage = ((rawValue / total) * 100).toFixed(1);
              return rawValue > 0 ? `${percentage}%` : ''; // Muestra el porcentaje solo si es mayor a 0
            },
            color: '#000',
            font: { weight: 'bold' }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: { display: false } // Opcional: ocultar las líneas de la cuadrícula
          },
          y: {
            grid: { display: false }
          }
        }
      },
      plugins: [ChartDataLabels] // Asegúrate de incluir el plugin aquí
    });
  }

  onHome() {
    console.log('Navegando a home');
  }

  onBack() {
    console.log('Navegando hacia atrás');
  }
}
