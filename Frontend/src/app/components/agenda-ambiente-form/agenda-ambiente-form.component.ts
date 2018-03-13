import { Component, OnInit, Input } from '@angular/core';
import { AgendaDeAmbiente } from '../../models';
import { OpcionesService } from '../../services/opciones/opciones.service';

@Component({
  selector: 'app-agenda-ambiente-form',
  templateUrl: './agenda-ambiente-form.component.html',
  styleUrls: ['./agenda-ambiente-form.component.css']
})
export class AgendaAmbienteFormComponent implements OnInit {
  titulo = 'Agenda de Ambiente';
  tituloSharePoint = 'Sharepoint ambiente de pruebas';
  @Input() agendaDeAmbiente: AgendaDeAmbiente;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
    this.agendaDeAmbiente = new AgendaDeAmbiente(0);
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.agendaDeAmbiente) {
      this.agendaDeAmbiente = new AgendaDeAmbiente();
    }
  }

}
