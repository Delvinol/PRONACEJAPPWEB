// cjdr.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface CJDRData {
  centro_cjdr: string;
  fecha_cjdr: number;
  poblacion_cjdr: number;
  sentenciados_cjdr: number;
  procesados_cjdr: number;
  egresos_cjdr: number;
  ingresos_cjdr: number;
  mayores_cjdr: number;
  menores_cjdr: number;
}

export interface EdadSimpleData {
  estado_ing: number;
  veintiuno_mas: number;
  veinte: number;
  diecinueve: number;
  dieciocho: number;
  diecisiete: number;
  dieciseis: number;
  quince: number;
  catorce: number;
  edad: string;
  cantidad: number;
}

export interface InfraccionData {
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
  juridica_sentenciado: number;
  juridica_procesado: number;
  ingreso_sentenciado: number;
  ingreso_procesado: number;
  estado_ing: number;
}


@Injectable({
  providedIn: 'root'
})
export class CJDRService {
  private baseUrl = 'http://appconsulta.pronacej.gob.pe:8081/pronacej/v1';
  
  private centrosFilter = [
    'Trujillo', 'Pucallpa', 'El Tambo', 'José Quiñones Gonzales',
    'Marcavalle', 'Lima', 'Alfonso Ugarte', 'Santa Margarita',
    'Miguel Grau', 'Anexo III - Ancón II'
  ];

  constructor(private http: HttpClient) {}

  getTDData(fecha: string, incluirEstadoIng: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/cj/showTD`,
      {
        params: {
          fechaInicio: fecha,
          incluirEstadoIng: incluirEstadoIng
        }
      }
    );
  }
  

  getDailyCJDRData(fecha: string): Observable<CJDRData[]> {
    return this.http.get<CJDRData[]>(
      `${this.baseUrl}/dailyCjdr/showReportCjdr`,
      { params: { fecha_seleccionada: fecha } }
    ).pipe(
      map(data => data.filter(item =>
        this.centrosFilter.includes(item.centro_cjdr)
      ))
    );
  }

  getEdadSimpleData(fecha: string, esActivo: boolean): Observable<EdadSimpleData[]> {
    return this.http.get<EdadSimpleData[]>(
      `${this.baseUrl}/cj/showEdadSimple`,
      { 
        params: {
          fechaInicio: fecha,
          incluirEstadoIng: esActivo ? '1' : '0'
        }
      }
    );
  }

  getInfraccionCometida(fecha: string, esActivo: boolean): Observable<InfraccionData[]> {
    return this.http.get<InfraccionData[]>(
      `${this.baseUrl}/cj/showIC`,
      { 
        params: {
          fechaInicio: fecha,
          incluirEstadoIng: esActivo ? '1' : '0'
        }
      }
    );
  }
  

  getSituacionEducativaData(fechaInicio: string, incluirEstadoIng: number) {
    const url = `http://appconsulta.pronacej.gob.pe:8081/pronacej/v1/cj/showIE?fechaInicio=${fechaInicio}&incluirEstadoIng=${incluirEstadoIng}`;
    return this.http.get<any[]>(url);
  }
  getSituacionLaboralData(fechaInicio: string, incluirEstadoIng: number) {
    const url = `http://appconsulta.pronacej.gob.pe:8081/pronacej/v1/cj/showIL?fechaInicio=${fechaInicio}&incluirEstadoIng=${incluirEstadoIng}`;
    return this.http.get<any[]>(url);
  }


 
  
}