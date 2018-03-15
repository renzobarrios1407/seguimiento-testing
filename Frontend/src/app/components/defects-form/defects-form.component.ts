import { Component, OnInit, Input } from '@angular/core';
import { Defects } from '../../models/defects';
import { OpcionesService } from '../../services/opciones/opciones.service';

@Component({
  selector: 'app-defects-form',
  templateUrl: './defects-form.component.html',
  styleUrls: ['./defects-form.component.css']
})
export class DefectsFormComponent implements OnInit {
  titulo = 'Defects';
  @Input() defects: Defects;

  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
    if (!this.defects) {
      this.defects = new Defects();
    }
  }

}
