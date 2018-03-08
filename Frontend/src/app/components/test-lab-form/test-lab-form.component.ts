import { Component, OnInit } from '@angular/core';
import { TestLab } from '../../models';

@Component({
  selector: 'app-test-lab-form',
  templateUrl: './test-lab-form.component.html',
  styleUrls: ['./test-lab-form.component.css']
})
export class TestLabFormComponent implements OnInit {
  titulo = 'Test Lab';
  testLab: TestLab;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.testLab = new TestLab(0);
  }

  ngOnInit() {
  }

}
