import { Component, OnInit } from '@angular/core';
import { OpcionesService } from '../../services/opciones/opciones.service';
import { Rol } from '../../models';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  roles: Rol[];
  constructor(private opcionesService: OpcionesService) { }

  ngOnInit() {
    this.roles = this.opcionesService.getRoles();
  }

}
