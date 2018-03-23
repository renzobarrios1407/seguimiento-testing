import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeguimientoRoutingModule } from './seguimiento-routing.module';

// Componentes
import { ReleasesFormComponent } from './releases-form/releases-form.component';
import { RequirementsFormComponent } from './requirements-form/requirements-form.component';
import { TestLabFormComponent } from './test-lab-form/test-lab-form.component';
import { DefectsFormComponent } from './defects-form/defects-form.component';
import { AgendaAmbienteFormComponent } from './agenda-ambiente-form/agenda-ambiente-form.component';
import { CartaCertificacionFormComponent } from './carta-certificacion-form/carta-certificacion-form.component';
import { RepositorioFormComponent } from './repositorio-form/repositorio-form.component';
import { DodDdtVstsFormComponent } from './dod-ddt-vsts-form/dod-ddt-vsts-form.component';
import { UsdFormComponent } from './usd-form/usd-form.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { NuevoSeguimientoComponent } from './nuevo-seguimiento/nuevo-seguimiento.component';
import { ListSeguimientosComponent } from './list-seguimientos/list-seguimientos.component';
import { SharedModule } from '../../shared.module';


@NgModule({
    declarations: [
        ReleasesFormComponent,
        RequirementsFormComponent,
        TestLabFormComponent,
        DefectsFormComponent,
        AgendaAmbienteFormComponent,
        CartaCertificacionFormComponent,
        RepositorioFormComponent,
        DodDdtVstsFormComponent,
        UsdFormComponent,
        SeguimientoComponent,
        NuevoSeguimientoComponent,
        ListSeguimientosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        SeguimientoRoutingModule
     ],
    exports: [],
    providers: [],
})
export class SeguimientoModule {}
