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

@Injectable({
  providedIn: 'root'
})
export class CJDRService {
  private baseUrl = 'http://appconsulta.pronacej.gob.pe:8081/pronacej/v1/dailyCjdr';
  private centrosFilter = [
    'Trujillo', 'Pucallpa', 'El Tambo', 'José Quiñones Gonzales', 
    'Marcavalle', 'Lima', 'Alfonso Ugarte', 'Santa Margarita',
    'Miguel Grau', 'Anexo III - Ancón II'
  ];

  constructor(private http: HttpClient) {}

  getDailyCJDRData(fecha: string): Observable<CJDRData[]> {
    return this.http.get<CJDRData[]>(
      `${this.baseUrl}/showReportCjdr`, 
      { params: { fecha_seleccionada: fecha } }
    ).pipe(
      map(data => data.filter(item => 
        this.centrosFilter.includes(item.centro_cjdr)
      ))
    );
  }
}