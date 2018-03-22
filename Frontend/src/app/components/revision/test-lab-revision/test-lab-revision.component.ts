import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestLab } from '../../../models/test-lab';
import { Usuario } from '../../../models/usuario';
import { RevisionService } from '../../../services/revision/revision.service';

@Component({
  selector: 'app-test-lab-revision',
  templateUrl: './test-lab-revision.component.html',
  styleUrls: ['./test-lab-revision.component.css']
})
export class TestLabRevisionComponent implements OnInit {
  @Input() testLab: TestLab;
  @Output() testLabChange = new EventEmitter<TestLab>();
  mensaje: string;
  pasosDeCasosPruebaEjecutados: boolean;
  casosPruebaTienenEstadoFinal: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.testLab = new TestLab();
  }
  aprobar() {
    console.log(this.testLab);
    this.revisionService.aprobarTestLab(this.testLab.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.testLab = respuesta['result'];
        console.log(this.testLab);
        this.testLabChange.emit(this.testLab);
      },
      error => {
        console.log(error);

      }
    );
  }

}
