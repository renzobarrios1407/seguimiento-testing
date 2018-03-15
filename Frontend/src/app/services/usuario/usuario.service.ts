import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/usuario';
import { GLOBAL } from '../global';

@Injectable()
export class UsuarioService {

  token: any;
  private userUrl: string;
  private httpheaders: any;
  public identidad: Usuario;
  constructor(private http: HttpClient) {
    this.userUrl = GLOBAL.url + '/usuario';
    this.httpheaders = GLOBAL.httpOptionsJson ;
  }

  public singUp(usuario: Usuario, getHash = null) {
    if (getHash != null) {
      usuario.getHash = getHash;
    }
    const params = JSON.stringify(usuario);
    return this.http.post(this.userUrl + '/login', params, this.httpheaders);
  }
  public registro(usuario: Usuario) {
    const params = JSON.stringify(usuario);
    return this.http.post(this.userUrl + '/registro', params, this.httpheaders);
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
  public setIdentidad(usuario: Usuario) {
    localStorage.setItem('identidad', JSON.stringify(usuario));
  }
 public logout() {
  localStorage.clear();
 }
  public getToken() {
    const token = localStorage.getItem('token');
    if (token !== 'undefined') {
      this.token = JSON.parse(token);
    } else {
      this.token = null;
    }
    return this.token;
  }
  public setToken(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
  }

}
