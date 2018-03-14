import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models';

@Injectable()
export class UsuarioService {

  private userUrl = 'http://localhost:3000/usuarios';
  public identidad: Usuario;
  constructor(private http: HttpClient) {

  }

  public getIdentidad() {
    const identidad = localStorage.getItem('identidad');
    if (identidad !== 'undefined') {
      this.identidad = JSON.parse(identidad);
    } else {
      this.identidad = null;
    }
    return this.identidad;
  }
  public setIdentidad( usuario: Usuario) {
    localStorage.setItem('identidad', JSON.stringify(usuario));
  }

}
