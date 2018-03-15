import { Component, OnInit } from '@angular/core';
import { Rol } from '../../models/rol';
import { OpcionesService } from '../../services/opciones/opciones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles: Rol[];
  constructor(private opcionesService: OpcionesService) { }

  ngOnInit() {
    this.roles = this.opcionesService.getRoles();
  }

}
