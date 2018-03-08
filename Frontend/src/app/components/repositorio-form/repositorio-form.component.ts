import { Component, OnInit } from '@angular/core';
import { Repositorio } from '../../models';

@Component({
  selector: 'app-repositorio-form',
  templateUrl: './repositorio-form.component.html',
  styleUrls: ['./repositorio-form.component.css']
})
export class RepositorioFormComponent implements OnInit {
  titulo = 'Repositorio';
  repositorio: Repositorio;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.repositorio = new Repositorio(0);
  }

  ngOnInit() {
  }

}
