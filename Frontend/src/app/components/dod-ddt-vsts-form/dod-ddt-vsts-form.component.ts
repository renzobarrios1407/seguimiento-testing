import { Component, OnInit, Input } from '@angular/core';
import { DoDDdTVSTS } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-dod-ddt-vsts-form',
  templateUrl: './dod-ddt-vsts-form.component.html',
  styleUrls: ['./dod-ddt-vsts-form.component.css']
})
export class DodDdtVstsFormComponent implements OnInit {
  titulo = 'DoD/DdT(VSTS)';
  @Input() doDDdTVSTS: DoDDdTVSTS;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.doDDdTVSTS) {
      this.doDDdTVSTS = new DoDDdTVSTS();
    }
  }

}
