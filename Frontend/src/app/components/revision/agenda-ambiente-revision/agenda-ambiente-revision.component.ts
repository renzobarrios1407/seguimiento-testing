import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RevisionService } from '../../../services/revision/revision.service';
import { AgendaDeAmbiente } from '../../../models/agenda-de-ambiente';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-agenda-ambiente-revision',
  templateUrl: './agenda-ambiente-revision.component.html',
  styleUrls: ['./agenda-ambiente-revision.component.css']
})
export class AgendaAmbienteRevisionComponent implements OnInit {

  @Input() agendaDeAmbiente: AgendaDeAmbiente;
  @Output() agendaDeAmbienteChange = new EventEmitter<AgendaDeAmbiente>();
  mensaje: string;
  iDAgendaDeAmbiente: boolean;
  ultimaVersionFormato: boolean;
  estandarDeNombramiento: boolean;
  presntAgendDeAmbntsYSeEncntrEnEstAprob: boolean;
  diligenDeSharepoint: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.agendaDeAmbiente = new AgendaDeAmbiente();
  }
  aprobar() {
    console.log(this.agendaDeAmbiente);
    this.revisionService.aprobarAgendaDeAmbiente(this.agendaDeAmbiente.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.agendaDeAmbiente = respuesta['result'];
        console.log(this.agendaDeAmbiente);
        this.agendaDeAmbienteChange.emit(this.agendaDeAmbiente);
      },
      error => {
        console.log(error);

      }
    );
  }
}
