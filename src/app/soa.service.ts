import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface SOAData {
  centro_soa: string;
  fecha_soa: number;
  varones_soa: number;
  mujeres_soa: number;
  poblacion_soa: number;
}

export interface LaboralData {
  trabaja_informal: number;
  trabaja_formal: number;
  trabaja_sin: number;
  estado_ing: number;
}

export interface EducativaActualData {
  sea_estudia: number;
  sea_termino_basico: number;
  sea_termino_no_doc: number;
  reinsercion_educativa: number;
  insercion_productiva: number;
  continuidad_edu: number;
  apoyo_regularizar: number;
  cebr: number;
  ceba: number;
  cepre: number;
  academia: number;
  cetpro: number;
  instituto: number;
  universidad: number;
  no_aplica: number;
  estado_ing: number;
  cantidad: number;

}

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

@Injectable({
  providedIn: 'root'
})
export class SoaService {
  private baseUrl = 'http://appconsulta.pronacej.gob.pe:8081/pronacej/v1';
  
  private centrosFilter = [
    'SOA Ayacucho', 'SOA Callao', 'SOA Cañete', 'SOA Cerro Colorado - Arequipa',
    'SOA Chiclayo - Lambayeque', 'SOA Cusco', 'SOA Huancavelica', 'SOA Huancayo - Junín',
    'SOA Huánuco', 'SOA Huaraz - Ancash', 'SOA Huaura', 'SOA La Tinguiña - Ica',
    'SOA Lima Este', 'SOA Lima Norte', 'SOA Loreto', 'SOA Madre de Dios',
    'SOA Paucarpata - Arequipa', 'SOA Piura', 'SOA Puno', 'SOA Rímac',
    'SOA Santa', 'SOA Selva Central', 'SOA Sullana - Piura',
    'SOA Trujillo - La Libertad', 'SOA Tumbes', 'SOA Ucayali - Pucallpa',
    'SOA Ventanilla'
];


  
  constructor(private http: HttpClient) {}

  getDailySOAData(fecha: string): Observable<SOAData[]>{
    return this.http.get<SOAData[]>(
      `${this.baseUrl}/dailySoa/showReportSoa`,
      { params: { fecha_seleccionada: fecha } }
    ).pipe(
      map(data => data.filter(item =>
        this.centrosFilter.includes(item.centro_soa)
      ))
    );
  }

  getEdadSimpleData(fecha: string, esActivo: boolean): Observable<EdadSimpleData[]> {
    return this.http.get<EdadSimpleData[]>(
      `${this.baseUrl}/soa/showEdadSimple`,
      { 
        params: {
          fechaInicio: fecha,
          incluirEstadoIng: esActivo ? '1' : '0'
        }
      }
    );
  }

  getSituacionEducativaData(fecha: string, esActivo: boolean): Observable<EducativaActualData[]> {
    return this.http.get<EducativaActualData[]>(
      `${this.baseUrl}/soa/showIE`,
      { 
        params: {
          fechaInicio: fecha,
          incluirEstadoIng: esActivo ? '1' : '0'
        }
      }
    );
  }

  getLaboralData(fecha: string, esActivo: boolean): Observable<LaboralData[]> {
    return this.http.get<LaboralData[]>(
      `${this.baseUrl}/soa/showIL`,
      { 
        params: {
          fechaInicio: fecha,
          incluirEstadoIng: esActivo ? '1' : '0'
        }
      }
    );
  }

  getInfraccionData(fecha: string, esActivo: boolean): Observable<InfraccionesData[]> {
    return this.http.get<InfraccionesData[]>(
      `${this.baseUrl}/soa/showIC`,
      { 
        params: {
          fechaInicio: fecha,
          incluirEstadoIng: esActivo ? '1' : '0'
        }
      }
    );
  }

}
