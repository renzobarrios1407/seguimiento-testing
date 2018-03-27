import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListRevisionSeguimientosComponent } from './list-revision-seguimientos/list-revision-seguimientos.component';
import { RevisarSeguimientoComponent } from './revisar-seguimiento/revisar-seguimiento.component';
import { AuthRevGuard } from '../../guards/auth-rev.guard';

const revisionRoutes: Routes = [
    { path: 'revision-seguimientos', component: ListRevisionSeguimientosComponent, canActivate: [AuthRevGuard] },
    { path: 'revisar-seguimiento/:id', component: RevisarSeguimientoComponent, canActivate: [AuthRevGuard] },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(revisionRoutes)],
    exports: [RouterModule]
})
export class RevisionRoutingModule {}
