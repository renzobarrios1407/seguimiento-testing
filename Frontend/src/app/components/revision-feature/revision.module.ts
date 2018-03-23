import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RevisionRoutingModule } from './revision-routing.module';

// Componentes
import { RevisarSeguimientoComponent } from './revisar-seguimiento/revisar-seguimiento.component';
import { ReleasesRevisionComponent } from './releases-revision/releases-revision.component';
import { RequirementsRevisionComponent } from './requirements-revision/requirements-revision.component';
import { TestLabRevisionComponent } from './test-lab-revision/test-lab-revision.component';
import { DefectsRevisionComponent } from './defects-revision/defects-revision.component';
import { AgendaAmbienteRevisionComponent } from './agenda-ambiente-revision/agenda-ambiente-revision.component';
import { CartaCertificacionRevisionComponent } from './carta-certificacion-revision/carta-certificacion-revision.component';
import { RepositorioRevisionComponent } from './repositorio-revision/repositorio-revision.component';
import { DodDdtVstsRevisionComponent } from './dod-ddt-vsts-revision/dod-ddt-vsts-revision.component';
import { UsdRevisionComponent } from './usd-revision/usd-revision.component';
import { ListRevisionSeguimientosComponent } from './list-revision-seguimientos/list-revision-seguimientos.component';
import { SharedModule } from '../../shared.module';

@NgModule({
    declarations: [
        RevisarSeguimientoComponent,
        ReleasesRevisionComponent,
        RequirementsRevisionComponent,
        TestLabRevisionComponent,
        DefectsRevisionComponent,
        AgendaAmbienteRevisionComponent,
        CartaCertificacionRevisionComponent,
        RepositorioRevisionComponent,
        DodDdtVstsRevisionComponent,
        UsdRevisionComponent,
        ListRevisionSeguimientosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RevisionRoutingModule
     ],
    exports: [],
    providers: [],
})
export class RevisionModule {}
