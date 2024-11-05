import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CJDRService } from '../../../../cjdr.service';
import { ActivatedRoute, Router } from '@angular/router';
import ChartDataLabels from 'chartjs-plugin-datalabels';

interface CJDRData {
  centro_cjdr: string;
  mayores_cjdr: number;
  menores_cjdr: number;
}

@Component({
  selector: 'app-gr-mayores-cjdr',
  templateUrl: './gr-mayores-cjdr.component.html',
  styleUrls: ['./gr-mayores-cjdr.component.css']
})
export class GrMayoresCJDRComponent implements OnInit {
  reportData: CJDRData[] = [];
  totalMayores: number = 0;
  totalMenores: number = 0;
  chart: any;
  colors: string[] = ['#00a3e2', '#fcea00']; // Azul para mayores, naranja para menores

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
    this.totalMayores = this.reportData.reduce((sum, item) => sum + item.mayores_cjdr, 0);
    this.totalMenores = this.reportData.reduce((sum, item) => sum + item.menores_cjdr, 0);
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
            label: 'Mayores',
            data: this.reportData.map(item => item.mayores_cjdr),
            backgroundColor: this.colors[0]
          },
          {
            label: 'Menores',
            data: this.reportData.map(item => item.menores_cjdr),
            backgroundColor: this.colors[1]
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'start',
            labels: { padding: 20 }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const rawValue = context.raw as number;
                const total = context.dataset.label === 'Mayores'
                  ? rawValue + this.reportData[context.dataIndex].menores_cjdr
                  : rawValue + this.reportData[context.dataIndex].mayores_cjdr;
                const percentage = ((rawValue / total) * 100).toFixed(1);
          
                // Retorna el label solo si el porcentaje es mayor a 0
                return rawValue > 0 ? `${context.dataset.label}: ${rawValue} (${percentage}%)` : '';
              }
            }
          }
          ,
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value, context) => {
              const rawValue = value as number;
              const total = this.reportData[context.dataIndex].mayores_cjdr + this.reportData[context.dataIndex].menores_cjdr;
              const percentage = ((rawValue / total) * 100).toFixed(1);
          
              // Retorna el porcentaje solo si es mayor a 0
              return rawValue > 0 ? `${percentage}%` : '';
            },
            color: '#000',
            font: { weight: 'bold' }
          }
        },
        scales: {
          x: { stacked: true, beginAtZero: true },
          y: { stacked: true }
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
