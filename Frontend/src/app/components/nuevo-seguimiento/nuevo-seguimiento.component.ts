import { Component, OnInit } from '@angular/core';
import { Seguimiento, Tester } from '../../models';
import { SeguimientoService } from '../../services/seguimiento/seguimiento.service';
import { Router } from '@angular/router';
import { TesterService } from '../../services/tester/tester.service';

@Component({
  selector: 'app-nuevo-seguimiento',
  templateUrl: './nuevo-seguimiento.component.html',
  styleUrls: ['./nuevo-seguimiento.component.css']
})
export class NuevoSeguimientoComponent implements OnInit {

  tester: Tester;
  titulo = 'Nuevo Seguimiento';
  seguimiento: Seguimiento;
  // @Output() seguimientoChange: EventEmitter<seguimiento>;
  constructor(
    private segService: SeguimientoService,
    private router: Router,
    private testerService: TesterService
  ) {
    this.seguimiento = new Seguimiento();
    this.tester = new Tester('1111111', 'jorge', 'chagui', 'romero', 'medellin', 'jorge.chagui', '1234', 1);
    testerService.setIdentidad(this.tester);
  }

  ngOnInit() {
  }
  onClick() {
    console.log('submit');
    this.segService.crearSeguimiento(this.seguimiento, this.tester.id).subscribe(
      seguimiento => {
        console.log('Seguimiento Creado');
        this.router.navigate(['/seguimiento', seguimiento.id]);
      },
      error => alert('Hubo un error: ' + error)
    );
  }
}
