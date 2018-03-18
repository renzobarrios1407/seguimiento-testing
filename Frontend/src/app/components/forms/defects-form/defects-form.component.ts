import { Component, OnInit, Input } from '@angular/core';
import { Defects } from '../../../models/defects';
import { OpcionesService } from '../../../services/opciones/opciones.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-defects-form',
  templateUrl: './defects-form.component.html',
  styleUrls: ['./defects-form.component.css']
})
export class DefectsFormComponent implements OnInit {
  titulo = 'Defects';
  @Input() defects: Defects;
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
    if (!this.defects) {
      this.defects = new Defects();
    }
  }
  guardar() {
    this.segService.saveDefects(this.seguimientoId, this.defects).subscribe(
      respuesta => {
        console.log(respuesta);
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
