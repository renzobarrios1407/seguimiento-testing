import { Component, OnInit, Input } from '@angular/core';
import { Repositorio } from '../../../models/repositorio';
import { OpcionesService } from '../../../services/opciones/opciones.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-repositorio-form',
  templateUrl: './repositorio-form.component.html',
  styleUrls: ['./repositorio-form.component.css']
})
export class RepositorioFormComponent implements OnInit {
  titulo = 'Repositorio';
  @Input() repositorio: Repositorio;
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
    if (!this.repositorio) {
      this.repositorio = new Repositorio();
    }
  }
  guardar() {
    this.segService.saveRepositorio(this.seguimientoId, this.repositorio).subscribe(
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
