import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-list-seguimientos',
  templateUrl: './list-seguimientos.component.html',
  styleUrls: ['./list-seguimientos.component.css']
})
export class ListSeguimientosComponent implements OnInit {
  titulo = 'Seguimientos';
  seguimientos: any[];
  constructor(
    private segService: SeguimientoService
  ) { }

  ngOnInit() {
    this.segService.getSeguimientos().subscribe(
      resultado => {
        console.log(resultado);
        this.seguimientos = resultado;
      }
    );
  }

}
