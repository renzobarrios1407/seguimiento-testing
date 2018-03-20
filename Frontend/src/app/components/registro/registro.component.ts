import { Component, OnInit } from '@angular/core';
import { OpcionesService } from '../../services/opciones/opciones.service';
import { Rol } from '../../models/rol';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { RolService } from '../../services/rol/rol.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  identidad: Usuario;
  usuario: Usuario;
  roles: Rol[];
  errorMessage: string;
  constructor(
    private opcionesService: OpcionesService,
    private usuarioService: UsuarioService,
    private rolService: RolService
  ) {
    this.usuario = new Usuario(null, null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.rolService.getRoles().subscribe(
      roles => {
        this.roles = roles;
      },
      error => {
        this.roles = this.opcionesService.getRoles();
      }
    );
  }
  registrar() {
    this.usuarioService.registro(this.usuario).subscribe(
      respuesta => {
        console.log(respuesta);
        this.identidad = respuesta['usuario'];
        if (!this.identidad.id) {
          this.errorMessage = 'Error al registrarse';
        } else {
          this.errorMessage = 'Registro exitoso, usa: ' + this.identidad.usuario + ' para ingresar';
          this.usuario = new Usuario(null, null, null, null, null, null, null, null, null);
        }
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage != null) {
          console.log(error);
          this.errorMessage = error.error.mensaje;
        }
      }
    );
  }
}
