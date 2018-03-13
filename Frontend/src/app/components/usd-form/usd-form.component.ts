import { Component, OnInit, Input } from '@angular/core';
import { Usd } from '../../models';
import { OpcionesService } from '../../services/opciones/opciones.service';

@Component({
  selector: 'app-usd-form',
  templateUrl: './usd-form.component.html',
  styleUrls: ['./usd-form.component.css']
})
export class UsdFormComponent implements OnInit {
  titulo = 'Orden de Cambio';
  tituloIncidentes = 'Incidentes';
  @Input() usd: Usd;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.usd) {
      this.usd = new Usd();
    }
  }

}
