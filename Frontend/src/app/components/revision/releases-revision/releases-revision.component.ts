import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Releases } from '../../../models/releases';
import { RevisionService } from '../../../services/revision/revision.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-releases-revision',
  templateUrl: './releases-revision.component.html',
  styleUrls: ['./releases-revision.component.css']
})
export class ReleasesRevisionComponent implements OnInit {
  @Input() releases: Releases;
  @Output() releasesChange = new EventEmitter<Releases>();
  @Input() auditor: Usuario;
  mensaje: string;
  idReleaseQC: boolean;
  estandarNomDeRelease: boolean;
  releaseIdEqAgendaAmbiente: boolean;
  tieneFechaRealCierre: boolean;
  tieneDefDeTermiEnSprORel: boolean;
  estadoDeSprint: boolean;
  reqsAsignsAlCiclo: boolean;
  carptsSetPruebasAsignsAlCiclo: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.releases = new Releases();
  }
  aprobar() {
    console.log(this.releases);
    this.revisionService.aprobarReleases(this.releases.id, this.auditor.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.releases = respuesta['result'];
        this.releases.auditor = this.auditor;
        console.log(this.releases);
        this.releasesChange.emit(this.releases);
      },
      error => {
        console.log(error);

      }
    );
  }
}
