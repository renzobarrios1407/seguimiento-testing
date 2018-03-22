import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Defects } from '../../../models/defects';
import { Usuario } from '../../../models/usuario';
import { RevisionService } from '../../../services/revision/revision.service';

@Component({
  selector: 'app-defects-revision',
  templateUrl: './defects-revision.component.html',
  styleUrls: ['./defects-revision.component.css']
})
export class DefectsRevisionComponent implements OnInit {

  @Input() defects: Defects;
  @Output() defectsChange = new EventEmitter<Defects>();
  mensaje: string;
  defectoDetectAsignAlCicOSpr: boolean;
  defectoDetectAsignAlRel: boolean;
  defctsEncontTienenEstFinal: boolean;
  defctsAsignASubject: boolean;
  analisisDeRiesgoxBugsEnEstNotResolved: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.defects = new Defects();
  }
  aprobar() {
    console.log(this.defects);
    this.revisionService.aprobarDefects(this.defects.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.defects = respuesta['result'];
        console.log(this.defects);
        this.defectsChange.emit(this.defects);
      },
      error => {
        console.log(error);

      }
    );
  }
}
