import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CJDRService, CJDRData } from '../../../../cjdr.service';
import { ActivatedRoute,Router } from '@angular/router';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-gr-ingresos-cjdr',
  templateUrl: './gr-ingresos-cjdr.component.html',
  styleUrls: ['./gr-ingresos-cjdr.component.css']
})
export class GrIngresosCJDRComponent implements OnInit {
  reportData: CJDRData[] = [];
  totalIngresos: number = 0;
  totalEgresos: number = 0;
  chart: any;
  colors: string[] = ['#e62984', '#00a3e2']; // Verde para ingresos, rojo para egresos

  constructor(private route: ActivatedRoute, private cjdrService: CJDRService,  private router: Router,) {}

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
      this.calculateTotals();
      this.setupChart();
    });
  }

  private calculateTotals() {
    this.totalIngresos = this.reportData.reduce((sum, item) => sum + item.ingresos_cjdr, 0);
    this.totalEgresos = this.reportData.reduce((sum, item) => sum + item.egresos_cjdr, 0);
  }

  private setupChart() {
    const ctx = document.getElementById('stackedBarChartIngresosEgresos') as HTMLCanvasElement;
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.reportData.map(item => item.centro_cjdr),
        datasets: [
          {
            label: 'Ingresos',
            data: this.reportData.map(item => item.ingresos_cjdr),
            backgroundColor: this.colors[0]
          },
          {
            label: 'Egresos',
            data: this.reportData.map(item => item.egresos_cjdr),
            backgroundColor: this.colors[1]
          }
        ]
      },
      options: {
        indexAxis: 'y', // Mantiene las barras horizontales
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'start', // Mueve la leyenda a la izquierda
            labels: {
              padding: 20 // Espacio entre la leyenda y la gráfica
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.raw as number;
                const percentage = ((value / (this.totalIngresos + this.totalEgresos)) * 100).toFixed(1);
                return `${context.dataset.label}: ${value} (${percentage}%)`;
              }
            }
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value, context) => {
              const total = this.totalIngresos + this.totalEgresos;
              const percentage = ((value / total) * 100).toFixed(1);
              return value > 0 ? `${percentage}%` : '';
            },
            color: '#000',
            font: {
              weight: 'bold'
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            beginAtZero: true
          },
          y: {
            stacked: true
          }
        }
      }
    });
  }

  onHome() {
    this.router.navigate(['/categoria']);
  }
  
  onBack() {
    this.router.navigate(['/reportediario']);
  }
}
