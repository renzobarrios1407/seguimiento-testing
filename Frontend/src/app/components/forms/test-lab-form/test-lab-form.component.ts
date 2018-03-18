import { Component, OnInit, Input } from '@angular/core';
import { TestLab } from '../../../models/test-lab';
import { OpcionesService } from '../../../services/opciones/opciones.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-test-lab-form',
  templateUrl: './test-lab-form.component.html',
  styleUrls: ['./test-lab-form.component.css']
})
export class TestLabFormComponent implements OnInit {
  titulo = 'Test Lab';
  @Input() testLab: TestLab;
  @Input() seguimientoId: number | string;
  errorMessage: any;
  opciones: string[];
  constructor(
    private opcionesService: OpcionesService,
    private segService: SeguimientoService
  ) {
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.testLab) {
      this.testLab = new TestLab();
    }
  }

  guardar() {
    this.segService.saveTestLab(this.seguimientoId, this.testLab).subscribe(
      respuesta => {
        console.log(respuesta);
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage != null) {
          console.log(error);
          this.errorMessage = error.error.mensaje;
        }
      }
    );
  }
}
