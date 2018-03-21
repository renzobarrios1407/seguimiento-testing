import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repositorio } from '../../../models/repositorio';
import { Usuario } from '../../../models/usuario';
import { RevisionService } from '../../../services/revision/revision.service';

@Component({
  selector: 'app-repositorio-revision',
  templateUrl: './repositorio-revision.component.html',
  styleUrls: ['./repositorio-revision.component.css']
})
export class RepositorioRevisionComponent implements OnInit {

  @Input() repositorio: Repositorio;
  @Output() repositorioChange = new EventEmitter<Repositorio>();
  @Input() auditor: Usuario;
  mensaje: string;
  rutaRepositorio: boolean;
  estandarDeNombramiento: boolean;
  carptYEstrucCarptsRepo: boolean;
  ultVerFormatListCheckPE: boolean;
  existeListCheckPEcarptFuncSprORel: boolean;
  aprobUserRepoPorBugsEstNotResolved: boolean;
  ultVerFormatMatrizRiesgoCertSinPruebas: boolean;
  AdjuntMatrizRiesgoCertSinPruebas: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.repositorio = new Repositorio();
  }
  aprobar() {
    console.log(this.repositorio);
    this.revisionService.aprobarRepositorio(this.repositorio.id, this.auditor.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.repositorio = respuesta['result'];
        this.repositorio.auditor = this.auditor;
        console.log(this.repositorio);
        this.repositorioChange.emit(this.repositorio);
      },
      error => {
        console.log(error);

      }
    );
  }
}
