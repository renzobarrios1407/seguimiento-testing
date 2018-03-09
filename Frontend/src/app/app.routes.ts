import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReleasesFormComponent } from './components/releases-form/releases-form.component';
import { LoginComponent } from './components/login/login.component';
import { AgendaAmbienteFormComponent } from './components/agenda-ambiente-form/agenda-ambiente-form.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';


const routes: Routes = [
    { path: 'releases', component: ReleasesFormComponent },
    { path: 'angenda-ambiente', component: AgendaAmbienteFormComponent },
    { path: 'seguimiento', component: SeguimientoComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'seguimiento', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
