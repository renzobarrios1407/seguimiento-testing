import { Component, OnInit } from '@angular/core';
import { Releases } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-releases-form',
  templateUrl: './releases-form.component.html',
  styleUrls: ['./releases-form.component.css']
})
export class ReleasesFormComponent implements OnInit {
  titulo = 'Releases';
  releases: Releases;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
    this.releases = new Releases(0);
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
  }

}
