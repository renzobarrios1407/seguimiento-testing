import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Rol } from '../../models/rol';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RolService {
  private url: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private roles: any[];
  constructor(private http: HttpClient) {
    this.url = GLOBAL.url + '/rol';
  }
  getRoles() {
    return this.http.get<Rol[]>(this.url + '/all', this.httpOptions);
  }
}
