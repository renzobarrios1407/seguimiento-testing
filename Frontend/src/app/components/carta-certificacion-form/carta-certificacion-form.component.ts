import { Component, OnInit } from '@angular/core';
import { CartaDeCertificacion } from '../../models';

@Component({
  selector: 'app-carta-certificacion-form',
  templateUrl: './carta-certificacion-form.component.html',
  styleUrls: ['./carta-certificacion-form.component.css']
})
export class CartaCertificacionFormComponent implements OnInit {
  titulo = 'Carta de Certificación';
  cartaDeCertificacion: CartaDeCertificacion;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.cartaDeCertificacion = new CartaDeCertificacion(0);
  }
  ngOnInit() {
  }

}
