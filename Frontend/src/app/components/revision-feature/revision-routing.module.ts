import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListRevisionSeguimientosComponent } from './list-revision-seguimientos/list-revision-seguimientos.component';
import { RevisarSeguimientoComponent } from './revisar-seguimiento/revisar-seguimiento.component';

const revisionRoutes: Routes = [
    { path: 'revision-seguimientos', component: ListRevisionSeguimientosComponent },
    { path: 'revisar-seguimiento/:id', component: RevisarSeguimientoComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(revisionRoutes)],
    exports: [RouterModule]
})
export class RevisionRoutingModule {}
