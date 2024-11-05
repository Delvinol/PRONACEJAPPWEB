import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CommonModule } from '@angular/common';
import { CJDRService } from '../../../../cjdr.service';
Chart.register(...registerables);

interface ParticipaData {
  participa_programa_uno: number;
  participa_programa_dos: number;
  participa_programa_tres: number;
  participa_programa_cuatro: number;
  participa_programa_cinco: number;
  participa_programa_no: number;
}

@Component({
  selector: 'app-participaprogramaintervencioncjdr',
  templateUrl: './participaprogramaintervencioncjdr.component.html',
  styleUrls: ['./participaprogramaintervencioncjdr.component.css'],
  standalone: true,
  imports: [CommonModule]
})



export class ParticipaprogramaintervencioncjdrComponent implements OnInit {
  reportData: ParticipaData | null = null;
  totalPoblacion: number = 0;
  chart: any;
  programList: { label: string; value: number }[] = [];
  colors: string[] = [
    '#0090d4',
    '#D20019',
    '#cad200',
    '#474c55',
    '#e62984',
    '#49D200',
    '#D28500',
    '#A500D2',
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

  private getData(fecha: string, incluirEstadoIng: string) {
    this.cjdrService.getTDData(fecha, incluirEstadoIng).subscribe(data => {
      if (data && data.length > 0) {
        this.reportData = data[0];
        this.processData();
        this.setupChart();
      }
    });
  }
  

  private processData() {
    if (!this.reportData) return;

    this.programList = [
      { label: 'Participa en Programa 1', value: this.reportData.participa_programa_uno },
      { label: 'Participa en Programa 2', value: this.reportData.participa_programa_dos },
      { label: 'Participa en Programa 3', value: this.reportData.participa_programa_tres },
      { label: 'Participa en Programa 4', value: this.reportData.participa_programa_cuatro },
      { label: 'Participa en Programa 5', value: this.reportData.participa_programa_cinco },
      { label: 'No Participa', value: this.reportData.participa_programa_no }
    ];

    this.totalPoblacion = this.programList.reduce((sum, program) => sum + program.value, 0);
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
        labels: this.programList.map(item => item.label),
        datasets: [{
          data: this.programList.map(item => item.value),
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
          datalabels: { anchor: 'end', align: 'end' }
        }
      }
    });
  }
  
  onHome() {
    this.router.navigate(['/']);
  }

  onBack() {
    this.router.navigate(['/treatment-options']);
  }
}