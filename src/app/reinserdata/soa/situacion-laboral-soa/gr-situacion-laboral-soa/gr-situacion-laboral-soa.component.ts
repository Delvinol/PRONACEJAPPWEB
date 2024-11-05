import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { SoaService } from '../../../../soa.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);


export interface LaboralData {
  trabaja_informal: number;
  trabaja_formal: number;
  trabaja_sin: number;
  estado_ing: number;
}

@Component({
  selector: 'app-gr-situacion-laboral-soa',
  standalone: true,
  imports: [],
  templateUrl: './gr-situacion-laboral-soa.component.html',
  styleUrl: './gr-situacion-laboral-soa.component.css'
})
export class GrSituacionLaboralSOAComponent {
  reportData: LaboralData | null = null;
  totalPoblacion: number = 0;
  chart: any;
  agesList: { label: string; value: number }[] = [];

  colors: string[] = [
    '#0090d4', // Pronacej1
    '#D20019', // Pronacej2
    '#cad200', // Pronacej3
    '#474c55', // Pronacej4
    '#e62984', // Pronacej5
    '#49D200', // Pronacej6
    '#D28500', // Pronacej7
    '#A500D2', // Pronacej8
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private soaService: SoaService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const fecha = params['fecha'];
      const isActive = params['isActive'] === 'true';
      if (fecha) {
        this.getData(fecha, isActive);
      }
    });
  }

  private getData(fecha: string, isActive: boolean) {
    this.soaService.getLaboralData(fecha, isActive).subscribe(data => {
      if (data && data.length > 0) {
        this.reportData = data[0];
        this.processData();
        this.setupChart();
      }
    });
  }


  private processData() {
    if (!this.reportData) return;
  
    this.agesList = [
      { label: 'Trabaja Formal', value: this.reportData.trabaja_formal },
      { label: 'Trabaja Informal', value: this.reportData.trabaja_informal },
      { label: 'Sin trabajo', value: this.reportData.trabaja_sin },

    ];
  
    // Calcular la suma total de todas las edades
    this.totalPoblacion = this.agesList.reduce((sum, age) => sum + age.value, 0);
  }

  private setupChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.agesList.map(item => item.label),
        datasets: [{
          data: this.agesList.map(item => item.value),
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

  onHome() {
    this.router.navigate(['/']);
  }

  onBack() {
    this.router.navigate(['/poblacionedadsimpleSOA']);
  }

}