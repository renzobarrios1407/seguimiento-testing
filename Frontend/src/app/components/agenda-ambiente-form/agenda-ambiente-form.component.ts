import { Component, OnInit } from '@angular/core';
import { AgendaDeAmbiente } from '../../models';

@Component({
  selector: 'app-agenda-ambiente-form',
  templateUrl: './agenda-ambiente-form.component.html',
  styleUrls: ['./agenda-ambiente-form.component.css']
})
export class AgendaAmbienteFormComponent implements OnInit {
  titulo = 'Agenda de Ambiente';
  tituloSharePoint = 'Sharepoint ambiente de pruebas';
  agendaDeAmbiente: AgendaDeAmbiente;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.agendaDeAmbiente = new AgendaDeAmbiente(0);
  }

  ngOnInit() {
  }

}
