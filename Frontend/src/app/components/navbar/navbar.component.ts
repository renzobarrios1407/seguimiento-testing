import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() identidad: Usuario;
  @Output() identidadChange = new EventEmitter<Usuario>();
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.identidad = this.usuarioService.getIdentidad();
  }
  logout() {
    this.usuarioService.logout();
    this.identidad = undefined;
    this.identidadChange.emit(this.identidad);
  }
}
