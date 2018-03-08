import { Component, OnInit } from '@angular/core';
import { Defects } from '../../models';

@Component({
  selector: 'app-defects-form',
  templateUrl: './defects-form.component.html',
  styleUrls: ['./defects-form.component.css']
})
export class DefectsFormComponent implements OnInit {
  titulo = 'Defects';
  defects: Defects;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.defects = new Defects(0);
  }

  ngOnInit() {
  }

}
