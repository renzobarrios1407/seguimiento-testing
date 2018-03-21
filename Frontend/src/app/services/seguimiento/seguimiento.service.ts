import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Seguimiento } from '../../models/seguimiento';
import { GLOBAL } from '../global';
import { AgendaDeAmbiente } from '../../models/agenda-de-ambiente';
import { CartaDeCertificacion } from '../../models/carta-de-certificacion';
import { DoDDdTVSTS } from '../../models/dod-ddt-vsts';
import { Defects } from '../../models/defects';
import { Releases } from '../../models/releases';
import { Requirements } from '../../models/requirements';
import { TestLab } from '../../models/test-lab';
import { Usd } from '../../models/usd';
import { Repositorio } from '../../models/repositorio';

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
  public getSeguimientoTester(idSeguimiento: string | number, testerId: string | number) {
    return this.http.get(this.url + '/get/' + idSeguimiento + '/' + testerId, this.httpOptions);
  }
  public getSeguimiento(idSeguimiento: string | number) {
    return this.http.get(this.url + '/get/' + idSeguimiento, this.httpOptions);
  }
  public getSeguimientosTester(idTester: string | number) {
    return this.http.get<Seguimiento[]>(this.url + '/getAll/' + idTester, this.httpOptions);
  }
  public getSeguimientos() {
    return this.http.get<Seguimiento[]>(this.url + '/getAll', this.httpOptions);
  }

  // public saveSeguimiento(idSeguimiento: string | number, datos: any) {
  //   return this.http.put(this.url + '/' + idSeguimiento , JSON.stringify(datos), this.httpOptions);
  // }
  public sendDataSeguimiento(idSeguimiento: string | number, datos: any) {
    return this.http.post(this.url + '/guardar/' + idSeguimiento, JSON.stringify(datos), this.httpOptions);
  }

  // Métodos para guardar cada parte del seguimiento
  public saveAgendaDeAmbiente(seguimientoId: number | string, agendaDeAmbiente: AgendaDeAmbiente) {
    // {
    //     seguimientoId: seguimiento.id,
    //     agendaDeAmbiente: this.agendaDeAmbiente
    // }
    const datos = {
      seguimientoId,
      agendaDeAmbiente
    };
    return this.http.post(this.url + '/guardar/agendaDeAmbiente', JSON.stringify(datos), this.httpOptions);
  }
  public saveCartaDeCertificacion(seguimientoId: number | string, cartaDeCertificacion: CartaDeCertificacion) {
    // {
    //     seguimientoId: seguimiento.id,
    //     cartaDeCertificacion: this.cartaDeCertificacion
    // }
    const datos = {
      seguimientoId,
      cartaDeCertificacion
    };
    return this.http.post(this.url + '/guardar/cartaDeCertificacion', JSON.stringify(datos), this.httpOptions);
  }
  public saveDefects(seguimientoId: number | string, defects: Defects) {
    // {
    //     seguimientoId: seguimiento.id,
    //     defects: this.defects
    // }
    const datos = {
      seguimientoId,
      defects
    };
    return this.http.post(this.url + '/guardar/defects', JSON.stringify(datos), this.httpOptions);
  }
  public saveDoDDdTVSTS(seguimientoId: number | string, doDDdTVSTS: DoDDdTVSTS) {
    // {
    //     seguimientoId: seguimiento.id,
    //     doDDdTVSTS: this.doDDdTVSTS
    // }
    const datos = {
      seguimientoId,
      doDDdTVSTS
    };
    return this.http.post(this.url + '/guardar/doDDdTVSTS', JSON.stringify(datos), this.httpOptions);
  }
  public saveReleases(seguimientoId: number | string, releases: Releases) {
    // {
    //     seguimientoId: seguimiento.id,
    //     releases: this.releases
    // }
    const datos = {
      seguimientoId,
      releases
    };
    return this.http.post(this.url + '/guardar/releases', JSON.stringify(datos), this.httpOptions);
  }
  public saveRepositorio(seguimientoId: number | string, repositorio: Repositorio) {
    // {
    //     seguimientoId: seguimiento.id,
    //     repositorio: this.repositorio
    // }
    const datos = {
      seguimientoId,
      repositorio
    };
    return this.http.post(this.url + '/guardar/repositorio', JSON.stringify(datos), this.httpOptions);
  }
  public saveRequirements(seguimientoId: number | string, requirements: Requirements) {
    // {
    //     seguimientoId: seguimiento.id,
    //     requirements: this.requirements
    // }
    const datos = {
      seguimientoId,
      requirements
    };
    return this.http.post(this.url + '/guardar/requirements', JSON.stringify(datos), this.httpOptions);
  }
  public saveTestLab(seguimientoId: number | string, testLab: TestLab) {
    // {
    //     seguimientoId: seguimiento.id,
    //     testLab: this.testLab
    // }
    const datos = {
      seguimientoId,
      testLab
    };
    return this.http.post(this.url + '/guardar/testLab', JSON.stringify(datos), this.httpOptions);
  }
  public saveUsd(seguimientoId: number | string, usd: Usd) {
    // {
    //     seguimientoId: seguimiento.id,
    //     usd: this.usd
    // }
    const datos = {
      seguimientoId,
      usd
    };
    return this.http.post(this.url + '/guardar/usd', JSON.stringify(datos), this.httpOptions);
  }
}
