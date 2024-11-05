import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CJDRService } from '../../../../../app/cjdr.service';
import { ActivatedRoute, Router } from '@angular/router';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);

interface SituacionEducativaData {
  no_aplica: number;
  universidad: number;
  instituto: number;
  cetpro: number;
  academia: number;
  cepre: number;
  ceba: number;
  cebr: number;
}

@Component({
  selector: 'app-gr-situacion-educativa-actual',
  template: `
    <div class="main-container">
      <div class="header">
        <button class="home-button" (click)="onHome()">
          <i class="fas fa-home"></i>
        </button>
        <h1>Situación Educativa Actual</h1>
        <button class="back-button" (click)="onBack()">Atrás</button>
      </div>

      <div class="content">
        <div class="total-container">
          <div class="total-value">{{ totalPoblacion }}</div>
          <div class="total-label">Total</div>
        </div>

        <div class="chart-container">
          <canvas id="barChart"></canvas>
        </div>

        <div class="ages-list">
          <div class="age-item" *ngFor="let item of situacionList; let i = index">
            <div class="percentage-box" [style.background-color]="colors[i]">
              {{ item.value }}
            </div>
            <div class="age-name">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <img src="logos/ministeriologo.png" alt="Ministerio" class="footer-logo">
        <img src="logos/pronacejlogo.png" alt="Pronacej" class="footer-logo">
      </div>
    </div>
  `,
  styles: [`
    .main-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      padding: 20px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .home-button, .back-button {
      padding: 10px 20px;
      background-color: #00aae6;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .total-container {
      text-align: center;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 10px;
    }

    .total-value {
      font-size: 2em;
      font-weight: bold;
      color: #00aae6;
    }

    .total-label {
      font-size: 1.2em;
      color: #666;
    }

    .chart-container {
      flex: 1;
      min-height: 300px;
      position: relative;
    }

    .ages-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      padding: 20px 0;
    }

    .age-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .percentage-box {
      padding: 5px 10px;
      color: white;
      border-radius: 5px;
      min-width: 50px;
      text-align: center;
    }

    .age-name {
      font-size: 0.9em;
      color: #333;
    }

    .footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 0;
    }

    .ministry-logo, .pronacej-logo {
      height: 50px;
      object-fit: contain;
    }

    .footer {
      margin-top: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 0;
    }

    .footer-logo {
      height: 50px;
      object-fit: contain;
    }
  `]
})
export class GrSituacionEducativaActualComponent implements OnInit {
  reportData: SituacionEducativaData | null = null;
  totalPoblacion: number = 0;
  chart: any;
  situacionList: { label: string; value: number }[] = [];

  colors: string[] = [
    '#D20019', // no_aplica
    '#49D200', // universidad
    '#cad200', // instituto
    '#0090d4', // cetpro
    '#fcea00', // academia
    '#474c55', // cepre
    '#e62984', // ceba
    '#0a3e2',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cjdrService: CJDRService
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
    const activeNumber = isActive ? 1 : 0;
    this.cjdrService.getSituacionEducativaData(fecha, activeNumber).subscribe(data => {
 
      if (data && data.length > 0) {
        this.reportData = data[0];
        this.processData();
        this.setupChart();
      }
    });
  }

  private processData() {
    if (!this.reportData) return;

    this.situacionList = [
      { label: 'No Aplica', value: this.reportData.no_aplica },
      { label: 'Universidad', value: this.reportData.universidad },
      { label: 'Instituto', value: this.reportData.instituto },
      { label: 'Cetpro', value: this.reportData.cetpro },
      { label: 'Academia', value: this.reportData.academia },
      { label: 'Cepre', value: this.reportData.cepre },
      { label: 'Ceba', value: this.reportData.ceba },
      { label: 'Cebr', value: this.reportData.cebr }
    ];

    // Calcular la suma total
    this.totalPoblacion = this.situacionList.reduce((sum, item) => sum + item.value, 0);
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
        labels: this.situacionList.map(item => item.label),
        datasets: [{
          data: this.situacionList.map(item => item.value),
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
    this.router.navigate(['/situacioneducativaactual']);
  }
}
