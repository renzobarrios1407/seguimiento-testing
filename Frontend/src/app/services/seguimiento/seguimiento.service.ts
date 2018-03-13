import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Seguimiento } from '../../models';

@Injectable()
export class SeguimientoService {
  private url = 'http://192.168.3.106:3000/seguimiento';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  public crearSeguimiento(seguimiento: Seguimiento, idTester: string | number) {
    const mensaje = {
      tester: {
        id: idTester
      },
      seguimiento: seguimiento
    };
    return this.http.post<Seguimiento>(this.url, JSON.stringify(mensaje), this.httpOptions);
  }
  public getSeguimiento(idSeguimiento: string | number, testerId: string | number) {
    return this.http.get(this.url + '/' + idSeguimiento + '/' + testerId , this.httpOptions);
  }
  public getSeguimientos(idTester: string | number) {
    return this.http.get<Seguimiento[]>(this.url + '/' + idTester , this.httpOptions);
  }

  public saveSeguimiento(idSeguimiento: string | number, datos: any) {
    return this.http.put(this.url + '/' + idSeguimiento , JSON.stringify(datos), this.httpOptions);
  }
  public sendDataSeguimiento(idSeguimiento: string | number, datos: any) {
    return this.http.post(this.url + '/guardar/' + idSeguimiento , JSON.stringify(datos), this.httpOptions);
  }
}
