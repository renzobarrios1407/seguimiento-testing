import { Component, OnInit, Input } from '@angular/core';
import { TestLab } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-test-lab-form',
  templateUrl: './test-lab-form.component.html',
  styleUrls: ['./test-lab-form.component.css']
})
export class TestLabFormComponent implements OnInit {
  titulo = 'Test Lab';
  @Input() testLab: TestLab;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.testLab) {
      this.testLab = new TestLab();
    }
  }
}
