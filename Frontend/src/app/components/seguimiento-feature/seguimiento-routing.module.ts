import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { NuevoSeguimientoComponent } from './nuevo-seguimiento/nuevo-seguimiento.component';
import { ListSeguimientosComponent } from './list-seguimientos/list-seguimientos.component';

const seguimientoRoutes: Routes = [
    { path: 'seguimiento/:id', component: SeguimientoComponent },
    { path: 'nuevo-seguimiento', component: NuevoSeguimientoComponent },
    { path: 'seguimientos', component: ListSeguimientosComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(seguimientoRoutes)],
    exports: [RouterModule]
})
export class SeguimientoRoutingModule {}
