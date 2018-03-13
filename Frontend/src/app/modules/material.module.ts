import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
})
export class MaterialModule { }
