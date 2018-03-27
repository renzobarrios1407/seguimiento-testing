import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { NuevoSeguimientoComponent } from './nuevo-seguimiento/nuevo-seguimiento.component';
import { ListSeguimientosComponent } from './list-seguimientos/list-seguimientos.component';
import { AuthSegGuard } from '../../guards/auth-seg.guard';

const seguimientoRoutes: Routes = [
    { path: 'seguimiento/:id', component: SeguimientoComponent, canActivate: [AuthSegGuard] },
    { path: 'nuevo-seguimiento', component: NuevoSeguimientoComponent, canActivate: [AuthSegGuard] },
    { path: 'seguimientos', component: ListSeguimientosComponent, canActivate: [AuthSegGuard] },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(seguimientoRoutes)],
    exports: [RouterModule]
})
export class SeguimientoRoutingModule {}
