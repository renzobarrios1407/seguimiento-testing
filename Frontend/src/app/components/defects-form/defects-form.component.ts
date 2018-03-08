import { Component, OnInit } from '@angular/core';
import { Defects } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-defects-form',
  templateUrl: './defects-form.component.html',
  styleUrls: ['./defects-form.component.css']
})
export class DefectsFormComponent implements OnInit {
  titulo = 'Defects';
  defects: Defects;

  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
    this.defects = new Defects(0);
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
  }

}
