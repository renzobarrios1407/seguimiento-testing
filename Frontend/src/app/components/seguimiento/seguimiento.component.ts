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
  Usd,
  Seguimiento
} from '../../models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SeguimientoService } from '../../services/seguimiento.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  tester: Tester;
  seguimiento: Seguimiento;
  agendaDeAmbiente: AgendaDeAmbiente;
  cartaDeCertificacion: CartaDeCertificacion;
  defects: Defects;
  doDDdTVSTS: DoDDdTVSTS;
  releases: Releases;
  repositorio: Repositorio;
  requirements: Requirements;
  testLab: TestLab;
  usd: Usd;
  constructor(private route: ActivatedRoute, private segService: SeguimientoService) {
    this.agendaDeAmbiente = new AgendaDeAmbiente();
    this.cartaDeCertificacion = new CartaDeCertificacion();
    this.defects = new Defects();
    this.doDDdTVSTS = new DoDDdTVSTS();
    this.releases = new Releases();
    this.repositorio = new Repositorio();
    this.requirements = new Requirements();
    this.testLab = new TestLab();
    this.usd = new Usd();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.segService.getSeguimiento(params.id).subscribe(seguimiento => {
        this.seguimiento = seguimiento;
        // Crear los demás objetos si existen
      });
    });
    this.tester = JSON.parse(localStorage.getItem('identidad'));
  }

  guardar() {
  }
  enviar() {
    const req = {
      tester: {
        id: this.tester.id
      },
      agendaDeAmbiente: this.agendaDeAmbiente,
      cartaDeCertificacion: this.cartaDeCertificacion,
      defects: this.defects,
      doDDdTVSTS: this.doDDdTVSTS,
      releases: this.releases,
      repositorio: this.repositorio,
      requirements: this.requirements,
      testLab: this.testLab,
      usd: this.usd
    };

    this.segService.sendDataSeguimiento(this.seguimiento.id, req).subscribe(respuesta => {
      console.log('Creado con exito');
    },
    error => {
      console.log('error');
    }
  );
  }
}
