import { Component, OnInit, Input } from '@angular/core';
import { Requirements } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-requirements-form',
  templateUrl: './requirements-form.component.html',
  styleUrls: ['./requirements-form.component.css']
})
export class RequirementsFormComponent implements OnInit {

  titulo = 'Requirements';
  @Input() requirements: Requirements;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.requirements) {
      this.requirements = new Requirements();
    }
  }

}
