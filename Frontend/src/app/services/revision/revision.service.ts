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
export class RevisionService {
  private url: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    this.url = GLOBAL.url + '/revision';
   }

   public aprobarAgendaDeAmbiente(agendaDeAmbienteId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: agendaDeAmbienteId
    };
    return this.http.put<Releases>(this.url + '/agendaDeAmbiente', JSON.stringify(mensaje), this.httpOptions);
   }

   public aprobarRequirements(requirementsId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: requirementsId
    };
    return this.http.put<Requirements>(this.url + '/requirements', JSON.stringify(mensaje), this.httpOptions);
   }

   public aprobarCartaDeCertificacion(cartaDeCertificacionId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: cartaDeCertificacionId
    };
    return this.http.put<CartaDeCertificacion>(this.url + '/cartaDeCertificacion', JSON.stringify(mensaje), this.httpOptions);
   }

   public aprobarDefects(defectsId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: defectsId
    };
    return this.http.put<Releases>(this.url + '/defects', JSON.stringify(mensaje), this.httpOptions);
   }

   public aprobarDoDDdTVSTS(doDDdTVSTSId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: doDDdTVSTSId
    };
    return this.http.put<Releases>(this.url + '/doDDdTVSTS', JSON.stringify(mensaje), this.httpOptions);
   }

   public aprobarRepositorio(repositorioId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: repositorioId
    };
    return this.http.put<Releases>(this.url + '/repositorio', JSON.stringify(mensaje), this.httpOptions);
   }

   public aprobarReleases(releasesId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: releasesId
    };
    return this.http.put<Releases>(this.url + '/releases', JSON.stringify(mensaje), this.httpOptions);
   }

   public aprobarTestLab(testLabId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: testLabId
    };
    return this.http.put<Releases>(this.url + '/testLab', JSON.stringify(mensaje), this.httpOptions);
   }

   public aprobarUsd(usdId: number | string, auditorId: number | string) {
    const mensaje = {
      auditorId: auditorId,
      id: usdId
    };
    return this.http.put<Releases>(this.url + '/usd', JSON.stringify(mensaje), this.httpOptions);
   }

}
