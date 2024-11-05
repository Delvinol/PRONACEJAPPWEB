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
  templateUrl: './gr-situacion-educativa-actual-cjdr.component.html',
  styleUrls: ['./gr-situacion-educativa-actual-cjdr.component.css']
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
