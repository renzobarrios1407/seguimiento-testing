import { Component, OnInit } from '@angular/core';
import { CartaDeCertificacion } from '../../models';
import { OpcionesService } from '../../services/opciones.service';

@Component({
  selector: 'app-carta-certificacion-form',
  templateUrl: './carta-certificacion-form.component.html',
  styleUrls: ['./carta-certificacion-form.component.css']
})
export class CartaCertificacionFormComponent implements OnInit {
  titulo = 'Carta de Certificación';
  cartaDeCertificacion: CartaDeCertificacion;
  opciones: string[];
  constructor(private opcionesService: OpcionesService) {
    this.cartaDeCertificacion = new CartaDeCertificacion(0);
  }

  ngOnInit() {
    this.opciones = this.opcionesService.getOpciones();
  }

}
