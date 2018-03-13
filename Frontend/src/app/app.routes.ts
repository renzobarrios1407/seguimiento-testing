import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReleasesFormComponent } from './components/releases-form/releases-form.component';
import { LoginComponent } from './components/login/login.component';
import { AgendaAmbienteFormComponent } from './components/agenda-ambiente-form/agenda-ambiente-form.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { NuevoSeguimientoComponent } from './components/nuevo-seguimiento/nuevo-seguimiento.component';
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component';


const routes: Routes = [
    { path: 'angenda-ambiente', component: AgendaAmbienteFormComponent },
    { path: 'seguimiento/:id', component: SeguimientoComponent },
    { path: 'seguimientos', component: SeguimientosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nuevo-seguimiento', component: NuevoSeguimientoComponent },
    { path: '**', redirectTo: 'seguimientos', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
