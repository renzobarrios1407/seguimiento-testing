import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Releases } from '../../../models/releases';
import { OpcionesService } from '../../../services/opciones/opciones.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-releases-form',
  templateUrl: './releases-form.component.html',
  styleUrls: ['./releases-form.component.css']
})
export class ReleasesFormComponent implements OnInit {
  titulo = 'Releases';
  @Input() releases: Releases;
  @Input() seguimientoId: number | string;
  errorMessage: any;
  opciones: string[];
  constructor(
    private opcionesService: OpcionesService,
    private segService: SeguimientoService
  ) {
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.releases) {
      this.releases = new Releases();
    }
  }

  guardar() {
    this.segService.saveReleases(this.seguimientoId, this.releases).subscribe(
      respuesta => {
        const errorMessage = <any>respuesta;
        if (errorMessage != null) {
          console.log(respuesta);
          this.errorMessage = respuesta['mensaje'];
        }
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
