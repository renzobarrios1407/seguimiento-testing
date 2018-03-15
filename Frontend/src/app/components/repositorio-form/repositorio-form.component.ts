import { Component, OnInit, Input } from '@angular/core';
import { Repositorio } from '../../models/repositorio';
import { OpcionesService } from '../../services/opciones/opciones.service';

@Component({
  selector: 'app-repositorio-form',
  templateUrl: './repositorio-form.component.html',
  styleUrls: ['./repositorio-form.component.css']
})
export class RepositorioFormComponent implements OnInit {
  titulo = 'Repositorio';
  @Input() repositorio: Repositorio;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.repositorio) {
      this.repositorio = new Repositorio();
    }
  }

}
