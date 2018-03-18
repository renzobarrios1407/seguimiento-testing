import { Component, OnInit, Input } from '@angular/core';
import { CartaDeCertificacion } from '../../../models/carta-de-certificacion';
import { OpcionesService } from '../../../services/opciones/opciones.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-carta-certificacion-form',
  templateUrl: './carta-certificacion-form.component.html',
  styleUrls: ['./carta-certificacion-form.component.css']
})
export class CartaCertificacionFormComponent implements OnInit {
  titulo = 'Carta de Certificación';
  @Input() cartaDeCertificacion: CartaDeCertificacion;
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
    if (!this.cartaDeCertificacion) {
      this.cartaDeCertificacion = new CartaDeCertificacion();
    }
  }
  guardar() {
    this.segService.saveCartaDeCerficicacion(this.seguimientoId, this.cartaDeCertificacion).subscribe(
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
