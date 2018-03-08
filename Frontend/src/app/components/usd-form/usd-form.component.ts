import { Component, OnInit } from '@angular/core';
import { Usd } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-usd-form',
  templateUrl: './usd-form.component.html',
  styleUrls: ['./usd-form.component.css']
})
export class UsdFormComponent implements OnInit {
  titulo = 'Orden de Cambio';
  tituloIncidentes = 'Incidentes';
  usd: Usd;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
    this.usd = new Usd(0);
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
  }

}
