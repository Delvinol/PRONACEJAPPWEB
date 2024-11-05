import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CJDRService } from '../../../../cjdr.service';
import { ActivatedRoute, Router } from '@angular/router';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);

interface SituacionLaboralData {
  trabaja_formal: number;
  trabaja_informal: number;
  trabaja_sin: number;
  // Agrega otros campos según tus necesidades
}

@Component({
  selector: 'app-gr-situacion-laboral',
  templateUrl: './gr-situacion-laboral.component.html',
  styleUrls: ['./gr-situacion-laboral.component.css']

})
export class GrSituacionLaboralComponent implements OnInit {
  reportData: SituacionLaboralData | null = null;
  totalPoblacion: number = 0;
  chart: any;
  situacionList: { label: string; value: number }[] = [];

  colors: string[] = [
    '#0090d4', 
    '#e62984', 
    '#cad200', 
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cjdrService: CJDRService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const fecha = params['fecha'];
      const incluirEstadoIng = params['incluirEstadoIng'];
      if (fecha) {
        this.getData(fecha, incluirEstadoIng);
      }
    });
  }

  private getData(fecha: string, incluirEstadoIng: boolean) {
    const estadoIng = incluirEstadoIng ? 1 : 0;
    this.cjdrService.getSituacionLaboralData(fecha, estadoIng).subscribe(data => {
      if (data && data.length > 0) {
        this.reportData = data[0];
        this.processData();
        this.setupChart();
      }
    });
  }

  private processData() {
    if (!this.reportData) return;
  
    // Crear la lista de situaciones y calcular la suma total en una sola pasada
    this.situacionList = [
      { label: 'Sin trabajo', value: this.reportData.trabaja_sin },
      { label: 'Trabajo formal', value: this.reportData.trabaja_formal },
      { label: 'Trabajo informal', value: this.reportData.trabaja_informal }
      
      // Agrega otros campos según tus necesidades
    ];
  
    // Calcular la suma total de Empleado, Desempleado e Inactivo
    this.totalPoblacion = this.reportData.trabaja_formal + this.reportData.trabaja_informal + this.reportData.trabaja_sin;
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
    this.router.navigate(['/situacionlaboral']);
  }
}
