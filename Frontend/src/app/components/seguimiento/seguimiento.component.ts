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
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SeguimientoService } from '../../services/seguimiento/seguimiento.service';
import { TesterService } from '../../services/tester/tester.service';

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
  constructor(
    private route: ActivatedRoute,
    private segService: SeguimientoService,
    private testerService: TesterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tester = this.testerService.getIdentidad();
    this.route.params.subscribe(params => {
      this.segService.getSeguimiento(params.id, this.tester.id).subscribe(
        respuesta => {
        console.log(respuesta);
        this.seguimiento = respuesta['seguimiento'];
        // Crear los demás objetos si existen

        this.agendaDeAmbiente = (respuesta['agendaDeAmbiente']) ? respuesta['agendaDeAmbiente'] : new AgendaDeAmbiente();
        this.cartaDeCertificacion = (respuesta['cartaDeCertificacion']) ? respuesta['cartaDeCertificacion'] : new CartaDeCertificacion();
        this.defects = (respuesta['defects']) ? respuesta['defects'] : new Defects();
        this.doDDdTVSTS = (respuesta['doDDdTVSTS']) ? respuesta['doDDdTVSTS'] : new DoDDdTVSTS();
        this.releases = (respuesta['releases']) ? respuesta['releases'] : new Releases();
        this.repositorio = (respuesta['repositorio']) ? respuesta['repositorio'] : new Repositorio();
        this.requirements = (respuesta['requirements']) ? respuesta['requirements'] : new Requirements();
        this.testLab = (respuesta['testLab']) ? respuesta['testLab'] : new TestLab();
        this.usd = (respuesta['usd']) ? respuesta['usd'] : new Usd();
      },
      error => {
        console.log('no existe el seguimiento');
        this.router.navigate(['/nuevo-seguimiento']);
      });
    });
  }

  atras() {
    this.router.navigate(['/seguimientos']);
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

    this.segService.sendDataSeguimiento(this.seguimiento.id, req).subscribe(
      respuesta => {
      console.log(respuesta);
      this.router.navigate(['/seguimientos']);
      },
      error => {
        console.log('error');
      }
    );
  }
}
