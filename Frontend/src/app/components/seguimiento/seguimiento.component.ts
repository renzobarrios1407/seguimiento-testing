import { Component, OnInit } from '@angular/core';
import {
  Tester,
  AgendaDeAmbiente,
  CartaDeCertificacion,
  Defects,
  DoDDdTVSTS,
  Releases,
  Repositorio,
  Requirements,
  TestLab,
  Usd
} from '../../models';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  tester: Tester;
  agendaAmbiente: AgendaDeAmbiente;
  cartaCertificacion: CartaDeCertificacion;
  defects: Defects;
  dod: DoDDdTVSTS;
  releases: Releases;
  repositorio: Repositorio;
  requirements: Requirements;
  testLab: TestLab;
  usd: Usd;
  constructor() {
    this.agendaAmbiente = new AgendaDeAmbiente(0);
    this.cartaCertificacion = new CartaDeCertificacion(0);
    this.defects = new Defects(0);
    this.dod = new DoDDdTVSTS(0);
    this.releases = new Releases(0);
    this.repositorio = new Repositorio(0);
    this.requirements = new Requirements(0);
    this.testLab = new TestLab(0);
    this.usd = new Usd(0);

    this.releases.estadoDeSprint = 'SI';
  }

  ngOnInit() {
  }

}
