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
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class SeguimientoService {
  private url: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private usuarioService: UsuarioService) {
    this.url = GLOBAL.url + '/seguimiento';
  }

  public crearSeguimiento(seguimiento: Seguimiento) {
    const mensaje = {
      testerId: this.usuarioService.getIdentidad().id,
      seguimiento: seguimiento
    };
    return this.http.post<Seguimiento>(this.url + '/crear', JSON.stringify(mensaje), this.httpOptions);
  }

  public getSeguimiento(idSeguimiento: string | number) {
    let url = this.url + '/get/' + idSeguimiento;
    const identidad = this.usuarioService.getIdentidad();
    // si es tester, agregar el testerId
    if (identidad.rolId === 1) {
      url += '/' + identidad.id;
    }
    return this.http.get(url, this.httpOptions);
  }

  public getSeguimientos() {
    let url = this.url + '/getAll';
    const identidad = this.usuarioService.getIdentidad();
    // si es tester, agregar el testerId
    if (identidad.rolId === 1) {
      url += '/' + identidad.id;
    }
    return this.http.get<Seguimiento[]>(url, this.httpOptions);
  }
  // será eliminado o cambiado
  public saveSeguimiento(idSeguimiento: string | number, datos: any) {
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
