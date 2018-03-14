import { Component, OnInit } from '@angular/core';
import { Seguimiento, Usuario } from '../../models';
import { SeguimientoService } from '../../services/seguimiento/seguimiento.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-nuevo-seguimiento',
  templateUrl: './nuevo-seguimiento.component.html',
  styleUrls: ['./nuevo-seguimiento.component.css']
})
export class NuevoSeguimientoComponent implements OnInit {

  tester: Usuario;
  titulo = 'Nuevo Seguimiento';
  seguimiento: Seguimiento;
  // @Output() seguimientoChange: EventEmitter<seguimiento>;
  constructor(
    private segService: SeguimientoService,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.seguimiento = new Seguimiento();
    this.tester = new Usuario('1111111', 'jorge', 'chagui', 'romero', 'medellin', 'jorge.chagui', '1234', 1, 1);
    usuarioService.setIdentidad(this.tester);
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
