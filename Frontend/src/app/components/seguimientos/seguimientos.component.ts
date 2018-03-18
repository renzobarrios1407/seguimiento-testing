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
  titulo = 'Seguimientos';
  identidad: Usuario;
  seguimientos: any[];
  constructor(
    private segService: SeguimientoService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.identidad = this.usuarioService.getIdentidad();
    if (this.identidad.rolId === 1) {
      this.segService.getSeguimientosTester(this.identidad.id).subscribe(
      resultado => {
        console.log(resultado);
        this.seguimientos = resultado;
      }
    );
    }
    if (this.identidad.rolId === 2) {
      this.segService.getSeguimientos().subscribe(
      resultado => {
        console.log(resultado);
        this.seguimientos = resultado;
      }
    );
    }
  }

}
