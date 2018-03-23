import { Component, OnInit, Input } from '@angular/core';
import { Usd } from '../../../models/usd';
import { OpcionesService } from '../../../services/opciones/opciones.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-usd-form',
  templateUrl: './usd-form.component.html',
  styleUrls: ['./usd-form.component.css']
})
export class UsdFormComponent implements OnInit {
  titulo = 'Orden de Cambio';
  tituloIncidentes = 'Incidentes';
  @Input() usd: Usd;
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
    if (!this.usd) {
      this.usd = new Usd();
    }
  }
  guardar() {
    this.segService.saveUsd(this.seguimientoId, this.usd).subscribe(
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
