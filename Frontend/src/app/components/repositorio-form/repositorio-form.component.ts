import { Component, OnInit, Input } from '@angular/core';
import { Repositorio } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

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
    this.repositorio = new Repositorio(0);
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
  }

}
