import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from '../../services/seguimiento/seguimiento.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {
  titulo = 'Seguimientos Pendientes';
  tester: Usuario;
  seguimientos: any[];
  constructor(
    private segService: SeguimientoService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.tester = this.usuarioService.getIdentidad();
    this.segService.getSeguimientos(this.tester.id).subscribe(
      resultado => {
        console.log(resultado);
        this.seguimientos = resultado;
      }
    );
  }

}
