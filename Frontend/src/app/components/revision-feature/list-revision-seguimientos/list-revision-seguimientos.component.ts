import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
  selector: 'app-list-revision-seguimientos',
  templateUrl: './list-revision-seguimientos.component.html',
  styleUrls: ['./list-revision-seguimientos.component.css']
})
export class ListRevisionSeguimientosComponent implements OnInit {

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
