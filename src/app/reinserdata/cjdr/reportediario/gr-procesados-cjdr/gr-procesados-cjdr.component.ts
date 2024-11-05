import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CJDRService } from '../../../../cjdr.service';
import { ActivatedRoute, Router } from '@angular/router';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);


interface CJDRData {
  centro_cjdr: string;
  procesados_cjdr: number;
  sentenciados_cjdr: number;
}

@Component({
  selector: 'app-gr-procesados-cjdr',
  templateUrl: './gr-procesados-cjdr.component.html',
  styleUrls: ['./gr-procesados-cjdr.component.css']
})
export class GrProcesadosCJDRComponent implements OnInit {
  reportData: CJDRData[] = [];
  totalProcesados: number = 0;
  totalSentenciados: number = 0;
  
  chart: any;

  colors: string[] = ['#474c55', '#cad200']; // Azul para procesados, naranja para sentenciados

  constructor(private route: ActivatedRoute, private cjdrService: CJDRService, private router: Router,) {}

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
    this.totalProcesados = this.reportData.reduce((sum, item) => sum + item.procesados_cjdr, 0);
    this.totalSentenciados = this.reportData.reduce((sum, item) => sum + item.sentenciados_cjdr, 0);
  }

  private setupChart() {
    const ctx = document.getElementById('stackedBarChart') as HTMLCanvasElement;
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.reportData.map(item => item.centro_cjdr),
        datasets: [
          {
            label: 'Procesados',
            data: this.reportData.map(item => item.procesados_cjdr),
            backgroundColor: this.colors[0]
          },
          {
            label: 'Sentenciados',
            data: this.reportData.map(item => item.sentenciados_cjdr),
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
                const percentage = (
                  (value / (this.totalProcesados + this.totalSentenciados)) *
                  100
                ).toFixed(1);
                return `${context.dataset.label}: ${value} (${percentage}%)`;
              }
            }
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value, context) => {
              const total = this.totalProcesados + this.totalSentenciados;
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
