import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usd } from '../../../models/usd';
import { Usuario } from '../../../models/usuario';
import { RevisionService } from '../../../services/revision/revision.service';

@Component({
  selector: 'app-usd-revision',
  templateUrl: './usd-revision.component.html',
  styleUrls: ['./usd-revision.component.css']
})
export class UsdRevisionComponent implements OnInit {

  @Input() usd: Usd;
  @Output() usdChange = new EventEmitter<Usd>();
  mensaje: string;
  numOrdenCambio: boolean;
  campoCodDefTermi: boolean;
  incdntsPorBugsEstNotResolved: boolean;
  constructor(private revisionService: RevisionService) {

   }

  ngOnInit() {
    this.usd = new Usd();
  }
  aprobar() {
    console.log(this.usd);
    this.revisionService.aprobarUsd(this.usd.id).subscribe(
      respuesta => {
        // agregar mensaje de éxito
        console.log(respuesta);
        this.mensaje = respuesta['mensaje'];
        this.usd = respuesta['result'];
        console.log(this.usd);
        this.usdChange.emit(this.usd);
      },
      error => {
        console.log(error);

      }
    );
  }
}
