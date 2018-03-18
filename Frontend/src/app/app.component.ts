import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  identidad: Usuario;
  token: any;
  login = true;
  texto = 'Aún no tienes cuenta? registrate';

  constructor (private usuarioService: UsuarioService) {}
  onClick() {
    this.login = !this.login;
    if (this.login === true) {
      this.texto = 'Aún no tienes cuenta? registrate';
    } else {
      this.texto = 'Ya tienes cuenta?, Ingresa con ella';
    }
  }

  ngOnInit(): void {
    this.identidad = this.usuarioService.getIdentidad();
  }


}
