import { Component, OnInit } from '@angular/core';
import { Usd } from '../../models';

@Component({
  selector: 'app-usd-form',
  templateUrl: './usd-form.component.html',
  styleUrls: ['./usd-form.component.css']
})
export class UsdFormComponent implements OnInit {
  titulo = 'Orden de Cambio';
  tituloIncidentes = 'Incidentes';
  usd: Usd;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.usd = new Usd(0);
  }

  ngOnInit() {
  }

}
