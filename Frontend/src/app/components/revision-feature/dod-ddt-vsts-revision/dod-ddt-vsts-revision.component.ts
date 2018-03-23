import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoDDdTVSTS } from '../../../models/dod-ddt-vsts';
import { Usuario } from '../../../models/usuario';
import { RevisionService } from '../../../services/revision/revision.service';

@Component({
  selector: 'app-dod-ddt-vsts-revision',
  templateUrl: './dod-ddt-vsts-revision.component.html',
  styleUrls: ['./dod-ddt-vsts-revision.component.css']
})
export class DodDdtVstsRevisionComponent implements OnInit {

  @Input() doDDdTVSTS: DoDDdTVSTS;
  @Output() doDDdTVSTSChange = new EventEmitter<DoDDdTVSTS>();
  mensaje: string;
  doD: boolean;
  estandarDeNombCartDoDDdt: boolean;
  carptYEstrucCarptsRepo: boolean;
  ultVerFormatListCheckPE: boolean;
  elDoDTieneFechaDeVencCartaYCoincdConCart: boolean;
  existeAprobUserEnDoD: boolean;
  existeAprobJefeEnCertDoD: boolean;
  closed: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.doDDdTVSTS = new DoDDdTVSTS();
  }
  aprobar() {
    console.log(this.doDDdTVSTS);
    this.revisionService.aprobarDoDDdTVSTS(this.doDDdTVSTS.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.doDDdTVSTS = respuesta['result'];
        console.log(this.doDDdTVSTS);
        this.doDDdTVSTSChange.emit(this.doDDdTVSTS);
      },
      error => {
        console.log(error);

      }
    );
  }

}
