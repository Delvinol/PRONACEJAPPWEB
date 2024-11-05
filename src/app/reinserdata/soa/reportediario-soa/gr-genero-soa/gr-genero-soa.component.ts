import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoaService } from '../../../../soa.service';
import { Chart } from 'chart.js';

interface SOAData {
  centro_soa: string;
  varones_soa: number;
  mujeres_soa: number;
}

@Component({
  selector: 'app-gr-genero-soa',
  standalone: true,
  imports: [],
  templateUrl: './gr-genero-soa.component.html',
  styleUrl: './gr-genero-soa.component.css'
})
export class GrGeneroSOAComponent implements OnInit {
  reportData: SOAData[] = [];
  totalMayores: number = 0;
  totalMenores: number = 0;
  chart: any;
  colors: string[] = ['#00a3e2', '#fcea00']; // Azul para mayores, naranja para menores


  constructor(private route: ActivatedRoute, private cjdrService: SoaService, private router: Router,) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const fecha = params['fecha'];
      if (fecha) {
        this.getData(fecha);
      }
    });
  }

  private getData(fecha: string) {
    this.cjdrService.getDailySOAData(fecha).subscribe(data => {
      this.reportData = data;
      this.calculateTotals();
      this.setupChart();
    });
  }

  private calculateTotals() {
    this.totalMayores = this.reportData.reduce((sum, item) => sum + item.mujeres_soa, 0);
    this.totalMenores = this.reportData.reduce((sum, item) => sum + item.varones_soa, 0);
  }


  private setupChart() {
    const ctx = document.getElementById('stackedBarChart') as HTMLCanvasElement;
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.reportData.map(item => item.centro_soa),
        datasets: [
          {
            label: 'Mayores',
            data: this.reportData.map(item => item.mujeres_soa),
            backgroundColor: this.colors[0]
          },
          {
            label: 'Menores',
            data: this.reportData.map(item => item.varones_soa),
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
                  ? rawValue + this.reportData[context.dataIndex].varones_soa
                  : rawValue + this.reportData[context.dataIndex].mujeres_soa;
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
              const total = this.reportData[context.dataIndex].varones_soa + this.reportData[context.dataIndex].mujeres_soa;
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
    this.router.navigate(['/reportediarioSOA']);
  }
}
