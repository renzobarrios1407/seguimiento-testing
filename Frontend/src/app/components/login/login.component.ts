import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rol } from '../../models/rol';
import { OpcionesService } from '../../services/opciones/opciones.service';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { RolService } from '../../services/rol/rol.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  @Input() identidad: Usuario;
  @Output() identidadChange = new EventEmitter<Usuario>();
  roles: Rol[];
  usuario: Usuario;
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

  login() {
    this.usuarioService.singUp(this.usuario).subscribe(
      respuesta => {
        console.log(respuesta);
        this.identidad = respuesta['usuario'];
        if (!this.identidad.id) {
          this.errorMessage = 'El usuario no está correctamente identificado';
        } else {
          // Agregar usuario al localStorage
          this.usuarioService.setIdentidad(this.identidad);
          this.identidadChange.emit(this.identidad);
          // Conseguir el token
          this.usuarioService.singUp(this.usuario, 'true').subscribe(
            resToken => {
              console.log(resToken);
              this.token = resToken['token'];
              if (this.token.length <= 0) {
                alert('El token no se ha generado correctamente');
              } else {
                // Agregar token al localStorage
                this.usuarioService.setToken(this.token);
                // Conseguir el token

                console.log(this.token);
                console.log(this.identidad);
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
