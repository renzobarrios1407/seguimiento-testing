import { Component, OnInit } from '@angular/core';
import { TestLab } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-test-lab-form',
  templateUrl: './test-lab-form.component.html',
  styleUrls: ['./test-lab-form.component.css']
})
export class TestLabFormComponent implements OnInit {
  titulo = 'Test Lab';
  testLab: TestLab;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
    this.testLab = new TestLab(0);
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
  }
}
