import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Seguimiento } from '../../../models/seguimiento';
import { AgendaDeAmbiente } from '../../../models/agenda-de-ambiente';
import { CartaDeCertificacion } from '../../../models/carta-de-certificacion';
import { Defects } from '../../../models/defects';
import { DoDDdTVSTS } from '../../../models/dod-ddt-vsts';
import { Releases } from '../../../models/releases';
import { Repositorio } from '../../../models/repositorio';
import { Requirements } from '../../../models/requirements';
import { TestLab } from '../../../models/test-lab';
import { Usd } from '../../../models/usd';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  errorMessage: any;
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
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.seguimiento = new Seguimiento();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.segService.getSeguimiento(id).subscribe(
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

  }

  atras() {
    this.router.navigate(['/seguimientos']);
  }
  // será eliminado o cambiado
  enviar() {
    const req = {
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

    this.segService.saveSeguimiento(this.seguimiento.id, req).subscribe(
      respuesta => {
        console.log(respuesta);
        this.router.navigate(['/seguimientos']);
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage != null) {
          console.log(error);
          this.errorMessage = error.error.mensaje;
        }
      }
    );
  }
}
