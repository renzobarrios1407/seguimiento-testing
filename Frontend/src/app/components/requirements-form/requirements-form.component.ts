import { Component, OnInit } from '@angular/core';
import { Requirements } from '../../models';

@Component({
  selector: 'app-requirements-form',
  templateUrl: './requirements-form.component.html',
  styleUrls: ['./requirements-form.component.css']
})
export class RequirementsFormComponent implements OnInit {

  titulo = 'Releases';
  requirements: Requirements;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.requirements = new Requirements(0);
  }

  ngOnInit() {
  }

}
