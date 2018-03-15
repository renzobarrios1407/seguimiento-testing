import { Injectable } from '@angular/core';
import { Rol } from '../../models/rol';

@Injectable()
export class OpcionesService {
  opciones = ['N/A', 'SI', 'NO'];
  roles: Rol[] = [new Rol(1, 'tester'), new Rol(2, 'auditor')];
  constructor() { }

  getOpciones() {
    return this.opciones;
  }
  getRoles() {
    return this.roles;
  }
}
