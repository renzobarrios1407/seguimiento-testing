import { Injectable } from '@angular/core';

@Injectable()
export class OpcionesService {
  opciones = ['N/A', 'SI', 'NO'];
  constructor() { }

  getOpciones() {
    return this.opciones;
  }
}
