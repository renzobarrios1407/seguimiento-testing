import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { NuevoSeguimientoComponent } from './components/nuevo-seguimiento/nuevo-seguimiento.component';
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component';
import { RevisarSeguimientoComponent } from './components/revisar-seguimiento/revisar-seguimiento.component';


const routes: Routes = [
    { path: 'seguimiento/:id', component: SeguimientoComponent },
    { path: 'seguimientos', component: SeguimientosComponent },
    { path: 'revisar-seguimiento/:id', component: RevisarSeguimientoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nuevo-seguimiento', component: NuevoSeguimientoComponent },
    { path: '**', redirectTo: 'seguimientos', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
