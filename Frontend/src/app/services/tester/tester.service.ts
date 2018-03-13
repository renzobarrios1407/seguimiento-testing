import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tester } from '../../models';

@Injectable()
export class TesterService {

  private userUrl = 'http://localhost:3000/usuarios';
  public identidad: Tester;
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
  public setIdentidad( tester: Tester) {
    localStorage.setItem('identidad', JSON.stringify(tester));
  }

}
