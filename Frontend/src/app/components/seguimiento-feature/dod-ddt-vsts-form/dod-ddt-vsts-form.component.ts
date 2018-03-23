import { Component, OnInit, Input } from '@angular/core';
import { DoDDdTVSTS } from '../../../models/dod-ddt-vsts';
import { OpcionesService } from '../../../services/opciones/opciones.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-dod-ddt-vsts-form',
  templateUrl: './dod-ddt-vsts-form.component.html',
  styleUrls: ['./dod-ddt-vsts-form.component.css']
})
export class DodDdtVstsFormComponent implements OnInit {
  titulo = 'DoD/DdT(VSTS)';
  @Input() doDDdTVSTS: DoDDdTVSTS;
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
    if (!this.doDDdTVSTS) {
      this.doDDdTVSTS = new DoDDdTVSTS();
    }
  }
  guardar() {
    this.segService.saveDoDDdTVSTS(this.seguimientoId, this.doDDdTVSTS).subscribe(
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
