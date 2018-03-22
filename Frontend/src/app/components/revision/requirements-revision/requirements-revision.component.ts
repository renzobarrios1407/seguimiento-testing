import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Requirements } from '../../../models/requirements';
import { RevisionService } from '../../../services/revision/revision.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-requirements-revision',
  templateUrl: './requirements-revision.component.html',
  styleUrls: ['./requirements-revision.component.css']
})
export class RequirementsRevisionComponent implements OnInit {

  @Input() requirements: Requirements;
  @Output() requirementsChange = new EventEmitter<Requirements>();
  mensaje: string;
  tieneAlcOEstratAcrdAlSprORelFin: boolean;
  tieneRiesgosDeProdPorSprORel: boolean;
  tieneAnalisisRiesgosAcrdAlcProb: boolean;
  estadoRiesgoEqCerrado: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.requirements = new Requirements();
  }
  aprobar() {
    console.log(this.requirements);
    this.revisionService.aprobarRequirements(this.requirements.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.requirements = respuesta['result'];
        console.log(this.requirements);
        this.requirementsChange.emit(this.requirements);
      },
      error => {
        console.log(error);

      }
    );
  }
}
