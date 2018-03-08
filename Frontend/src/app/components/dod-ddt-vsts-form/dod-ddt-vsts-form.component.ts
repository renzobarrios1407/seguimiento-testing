import { Component, OnInit } from '@angular/core';
import { DoDDdTVSTS } from '../../models';

@Component({
  selector: 'app-dod-ddt-vsts-form',
  templateUrl: './dod-ddt-vsts-form.component.html',
  styleUrls: ['./dod-ddt-vsts-form.component.css']
})
export class DodDdtVstsFormComponent implements OnInit {
  titulo = 'DoD/DdT(VSTS)';
  doDDdTVSTS: DoDDdTVSTS;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.doDDdTVSTS = new DoDDdTVSTS(0);
  }

  ngOnInit() {
  }

}
