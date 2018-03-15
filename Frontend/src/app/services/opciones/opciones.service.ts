import { Injectable } from '@angular/core';
import { Rol } from '../../models/rol';

@Injectable()
export class OpcionesService {
  opciones = ['N/A', 'SI', 'NO'];
  roles: Rol[] = [new Rol(1, 'tester', 'crea PMO'), new Rol(2, 'auditor', 'revisa PMO')];
  constructor() { }

  getOpciones() {
    return this.opciones;
  }
  getRoles() {
    return this.roles;
  }
}
