import { Component, OnInit } from '@angular/core';
import { Releases } from '../../models';

@Component({
  selector: 'app-releases-form',
  templateUrl: './releases-form.component.html',
  styleUrls: ['./releases-form.component.css']
})
export class ReleasesFormComponent implements OnInit {
  titulo = 'Releases';
  releases: Releases;
  opciones = ['N/A', 'SI', 'NO'];
  constructor() {
    this.releases = new Releases(0);
  }
  ngOnInit() {
  }

}
