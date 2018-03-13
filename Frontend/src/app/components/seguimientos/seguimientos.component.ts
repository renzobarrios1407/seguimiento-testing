import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from '../../services/seguimiento/seguimiento.service';
import { Seguimiento, Tester } from '../../models';
import { TesterService } from '../../services/tester/tester.service';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {
  titulo = 'Seguimientos Pendientes';
  tester: Tester;
  seguimientos: any[];
  constructor(
    private segService: SeguimientoService,
    private testerService: TesterService
  ) { }

  ngOnInit() {
    this.tester = this.testerService.getIdentidad();
    this.segService.getSeguimientos(this.tester.id).subscribe(
      resultado => {
        console.log(resultado);
        this.seguimientos = resultado;
      }
    );
  }

}
