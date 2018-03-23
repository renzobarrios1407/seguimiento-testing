import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartaDeCertificacion } from '../../../models/carta-de-certificacion';
import { Usuario } from '../../../models/usuario';
import { RevisionService } from '../../../services/revision/revision.service';

@Component({
  selector: 'app-carta-certificacion-revision',
  templateUrl: './carta-certificacion-revision.component.html',
  styleUrls: ['./carta-certificacion-revision.component.css']
})
export class CartaCertificacionRevisionComponent implements OnInit {

  @Input() cartaDeCertificacion: CartaDeCertificacion;
  @Output() cartaDeCertificacionChange = new EventEmitter<CartaDeCertificacion>();
  mensaje: string;
  ultimoFormatoDeCarta: boolean;
  estandarDeNombramiento: boolean;
  diligenCompletoCamposCarta: boolean;
  concptPruebasEspecialiCarta: boolean;
  aprobacionEnCarta: boolean;
  numsIncidntsIncludsCartCert: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.cartaDeCertificacion = new CartaDeCertificacion();
  }
  aprobar() {
    console.log(this.cartaDeCertificacion);
    this.revisionService.aprobarCartaDeCertificacion(this.cartaDeCertificacion.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.cartaDeCertificacion = respuesta['result'];
        console.log(this.cartaDeCertificacion);
        this.cartaDeCertificacionChange.emit(this.cartaDeCertificacion);
      },
      error => {
        console.log(error);

      }
    );
  }

}
