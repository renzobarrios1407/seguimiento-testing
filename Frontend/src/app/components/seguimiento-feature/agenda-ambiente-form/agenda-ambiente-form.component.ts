import { Component, OnInit, Input } from '@angular/core';
import { AgendaDeAmbiente } from '../../../models/agenda-de-ambiente';
import { OpcionesService } from '../../../services/opciones/opciones.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-agenda-ambiente-form',
  templateUrl: './agenda-ambiente-form.component.html',
  styleUrls: ['./agenda-ambiente-form.component.css']
})
export class AgendaAmbienteFormComponent implements OnInit {
  titulo = 'Agenda de Ambiente';
  tituloSharePoint = 'Sharepoint ambiente de pruebas';
  @Input() agendaDeAmbiente: AgendaDeAmbiente;
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
    if (!this.agendaDeAmbiente) {
      this.agendaDeAmbiente = new AgendaDeAmbiente();
    }
  }

  guardar() {
    this.segService.saveAgendaDeAmbiente(this.seguimientoId, this.agendaDeAmbiente).subscribe(
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
