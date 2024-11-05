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


}
