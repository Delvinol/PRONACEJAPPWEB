import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


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

@Injectable({
  providedIn: 'root'
})
export class PaspeService {
  private baseUrl = 'http://appconsulta.pronacej.gob.pe:8081/pronacej/v1';

  constructor(private http: HttpClient) {}

  getEdadSimpleData(fecha: string, esActivo: boolean): Observable<EdadSimpleData[]> {
    return this.http.get<EdadSimpleData[]>(
      `${this.baseUrl}/paspe/showEdadSimple`,
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
      `${this.baseUrl}/paspe/showIE`,
      { 
        params: {
          fechaInicio: fecha,
          incluirEstadoIng: esActivo ? '1' : '0'
        }
      }
    );
  }

}
