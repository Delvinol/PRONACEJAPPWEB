import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { SoaService } from '../../../../soa.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);


export interface InfraccionesData {
  agresiones_mujeres: number;
  autoaborto: number;
  exposicion_peligro: number;
  feminicidio: number;
  homicidio_c: number;
  homicidio_ct: number;
  homicidio_culposo: number;
  homicidio_s: number;
  homicidio_st: number;
  infanticidio: number;
  lesiones_culposas: number;
  lesiones_culposas_agravadas: number;
  lesiones_dolosas: number;
  lesiones_graves: number;
  lesiones_leves: number;
  lesiones_leves_agravadas: number;
  lesiones_leves_tentativa: number;
  maltrato: number;
  parricidio: number;
  sicariato: number;
  otros: number;
  trafico_drogas: number;
  apropiacion_ilicita: number;
  chantaje: number;
  danos_agravados: number;
  extorsion: number;
  extorsion_agravada: number;
  hurto_agravado: number;
  hurto_agravado_tentativa: number;
  hurto_ganado: number;
  hurto_simple: number;
  hurto_simple_tentativa: number;
  hurto_simple_dano: number;
  receptacion_agravada: number;
  robo: number;
  robo_agravado: number;
  robo_ganado: number;
  robo_tentativa: number;
  usurpacion_agravada: number;
  acoso: number;
  acoso_sexual: number;
  chantaje_sexual: number;
  coaccion: number;
  exhibiciones_obscenas: number;
  favorecimiento_prostitucion: number;
  proposiciones_sexuales: number;
  secuestro: number;
  tocamientos_menores: number;
  tocamientos_sin_consentimiento: number;
  violacion_menor: number;
  violacion_inconsciencia: number;
  violacion_sexual: number;
  violacion_menor_tentativa: number;
  violacion_tentativa: number;
  violacion_domicilio: number;
  conduccion_ebriedad: number;
  fabricacion_armas: number;
  fabricacion_materiales_peligrosos: number;
  produccion_peligro_comun: number;
  produccion_trafico_armas: number;
  trafico_microcomercializacion: number;
  trafico_insumos_quimicos: number;
  violacion_medidas_sanitarias: number;
  encubrimiento_personal: number;
  fuga_accidente: number;
  resistencia_autoridad: number;
}

@Component({
  selector: 'app-gr-infracciones-cometidas-soa',
  standalone: true,
  imports: [],
  templateUrl: './gr-infracciones-cometidas-soa.component.html',
  styleUrl: './gr-infracciones-cometidas-soa.component.css'
})
export class GrInfraccionesCometidasSOAComponent {
  reportData: InfraccionesData | null = null;
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
    this.soaService.getInfraccionData(fecha, isActive).subscribe(data => {
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
      { label: 'Agresiones a Mujeres', value: this.reportData.agresiones_mujeres },
      { label: 'Autoaborto', value: this.reportData.autoaborto },
      { label: 'Exposición al Peligro', value: this.reportData.exposicion_peligro },
      { label: 'Feminicidio', value: this.reportData.feminicidio },
      { label: 'Homicidio Calificado', value: this.reportData.homicidio_c },
      { label: 'Homicidio Calificado Tentativa', value: this.reportData.homicidio_ct },
      { label: 'Homicidio Culposo', value: this.reportData.homicidio_culposo },
      { label: 'Homicidio Simple', value: this.reportData.homicidio_s },
      { label: 'Homicidio Simple Tentativa', value: this.reportData.homicidio_st },
      { label: 'Infanticidio', value: this.reportData.infanticidio },
      { label: 'Lesiones Culposas', value: this.reportData.lesiones_culposas },
      { label: 'Lesiones Culposas Agravadas', value: this.reportData.lesiones_culposas_agravadas },
      { label: 'Lesiones Dolosas', value: this.reportData.lesiones_dolosas },
      { label: 'Lesiones Graves', value: this.reportData.lesiones_graves },
      { label: 'Lesiones Leves', value: this.reportData.lesiones_leves },
      { label: 'Lesiones Leves Agravadas', value: this.reportData.lesiones_leves_agravadas },
      { label: 'Lesiones Leves Tentativa', value: this.reportData.lesiones_leves_tentativa },
      { label: 'Maltrato', value: this.reportData.maltrato },
      { label: 'Parricidio', value: this.reportData.parricidio },
      { label: 'Sicariato', value: this.reportData.sicariato },
      { label: 'Otros', value: this.reportData.otros },
      { label: 'Tráfico de Drogas', value: this.reportData.trafico_drogas },
      { label: 'Apropiación Ilícita', value: this.reportData.apropiacion_ilicita },
      { label: 'Chantaje', value: this.reportData.chantaje },
      { label: 'Daños Agravados', value: this.reportData.danos_agravados },
      { label: 'Extorsión', value: this.reportData.extorsion },
      { label: 'Extorsión Agravada', value: this.reportData.extorsion_agravada },
      { label: 'Hurto Agravado', value: this.reportData.hurto_agravado },
      { label: 'Hurto Agravado Tentativa', value: this.reportData.hurto_agravado_tentativa },
      { label: 'Hurto de Ganado', value: this.reportData.hurto_ganado },
      { label: 'Hurto Simple', value: this.reportData.hurto_simple },
      { label: 'Hurto Simple Tentativa', value: this.reportData.hurto_simple_tentativa },
      { label: 'Hurto Simple con Daño', value: this.reportData.hurto_simple_dano },
      { label: 'Receptación Agravada', value: this.reportData.receptacion_agravada },
      { label: 'Robo', value: this.reportData.robo },
      { label: 'Robo Agravado', value: this.reportData.robo_agravado },
      { label: 'Robo de Ganado', value: this.reportData.robo_ganado },
      { label: 'Robo Tentativa', value: this.reportData.robo_tentativa },
      { label: 'Usurpación Agravada', value: this.reportData.usurpacion_agravada },
      { label: 'Acoso', value: this.reportData.acoso },
      { label: 'Acoso Sexual', value: this.reportData.acoso_sexual },
      { label: 'Chantaje Sexual', value: this.reportData.chantaje_sexual },
      { label: 'Coacción', value: this.reportData.coaccion },
      { label: 'Exhibiciones Obscenas', value: this.reportData.exhibiciones_obscenas },
      { label: 'Favorecimiento a la Prostitución', value: this.reportData.favorecimiento_prostitucion },
      { label: 'Proposiciones Sexuales', value: this.reportData.proposiciones_sexuales },
      { label: 'Secuestro', value: this.reportData.secuestro },
      { label: 'Tocamientos a Menores', value: this.reportData.tocamientos_menores },
      { label: 'Tocamientos sin Consentimiento', value: this.reportData.tocamientos_sin_consentimiento },
      { label: 'Violación a Menor', value: this.reportData.violacion_menor },
      { label: 'Violación en Estado de Inconsciencia', value: this.reportData.violacion_inconsciencia },
      { label: 'Violación Sexual', value: this.reportData.violacion_sexual },
      { label: 'Violación a Menor Tentativa', value: this.reportData.violacion_menor_tentativa },
      { label: 'Violación Tentativa', value: this.reportData.violacion_tentativa },
      { label: 'Violación de Domicilio', value: this.reportData.violacion_domicilio },
      { label: 'Conducción en Estado de Ebriedad', value: this.reportData.conduccion_ebriedad },
      { label: 'Fabricación de Armas', value: this.reportData.fabricacion_armas },
      { label: 'Fabricación de Materiales Peligrosos', value: this.reportData.fabricacion_materiales_peligrosos },
      { label: 'Producción de Peligro Común', value: this.reportData.produccion_peligro_comun },
      { label: 'Producción y Tráfico de Armas', value: this.reportData.produccion_trafico_armas },
      { label: 'Tráfico y Microcomercialización', value: this.reportData.trafico_microcomercializacion },
      { label: 'Tráfico de Insumos Químicos', value: this.reportData.trafico_insumos_quimicos },
      { label: 'Violación de Medidas Sanitarias', value: this.reportData.violacion_medidas_sanitarias },
      { label: 'Encubrimiento Personal', value: this.reportData.encubrimiento_personal },
      { label: 'Fuga en Accidente', value: this.reportData.fuga_accidente },
      { label: 'Resistencia a la Autoridad', value: this.reportData.resistencia_autoridad }
    ].filter(item => item.value > 0);
    
  
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
          barThickness: 20,
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
    this.router.navigate(['/infraccioncometidaSOA']);
  }

}
