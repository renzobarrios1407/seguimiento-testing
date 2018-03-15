import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Seguimiento } from '../../models/seguimiento';
import { GLOBAL } from '../global';

@Injectable()
export class SeguimientoService {
  private url: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    this.url = GLOBAL.url + '/seguimiento';
   }

  public crearSeguimiento(seguimiento: Seguimiento, idTester: string | number) {
    const mensaje = {
      tester: {
        id: idTester
      },
      seguimiento: seguimiento
    };
    return this.http.post<Seguimiento>(this.url + '/crear', JSON.stringify(mensaje), this.httpOptions);
  }
  public getSeguimiento(idSeguimiento: string | number, testerId: string | number) {
    return this.http.get(this.url + '/get/' + idSeguimiento + '/' + testerId , this.httpOptions);
  }
  public getSeguimientos(idTester: string | number) {
    return this.http.get<Seguimiento[]>(this.url + '/getAll/' + idTester , this.httpOptions);
  }

  public saveSeguimiento(idSeguimiento: string | number, datos: any) {
    return this.http.put(this.url + '/' + idSeguimiento , JSON.stringify(datos), this.httpOptions);
  }
  public sendDataSeguimiento(idSeguimiento: string | number, datos: any) {
    return this.http.post(this.url + '/guardar/' + idSeguimiento , JSON.stringify(datos), this.httpOptions);
  }
}
