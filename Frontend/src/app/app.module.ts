import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { ReleasesFormComponent } from './components/forms/releases-form/releases-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { RequirementsFormComponent } from './components/forms/requirements-form/requirements-form.component';
import { LoginComponent } from './components/login/login.component';
import { TestLabFormComponent } from './components/forms/test-lab-form/test-lab-form.component';
import { DefectsFormComponent } from './components/forms/defects-form/defects-form.component';
import { AgendaAmbienteFormComponent } from './components/forms/agenda-ambiente-form/agenda-ambiente-form.component';
import { CartaCertificacionFormComponent } from './components/forms/carta-certificacion-form/carta-certificacion-form.component';
import { RepositorioFormComponent } from './components/forms/repositorio-form/repositorio-form.component';
import { DodDdtVstsFormComponent } from './components/forms/dod-ddt-vsts-form/dod-ddt-vsts-form.component';
import { UsdFormComponent } from './components/forms/usd-form/usd-form.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { NuevoSeguimientoComponent } from './components/nuevo-seguimiento/nuevo-seguimiento.component';

// Rutas
import { FeatureRoutingModule } from './app.routes';

// Servicios
import { OpcionesService } from './services/opciones/opciones.service';
import { SeguimientoService } from './services/seguimiento/seguimiento.service';
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component';
import { UsuarioService } from './services/usuario/usuario.service';
import { RegistroComponent } from './components/registro/registro.component';
import { RolService } from './services/rol/rol.service';
import { RevisarSeguimientoComponent } from './components/revisar-seguimiento/revisar-seguimiento.component';
import { ReleasesRevisionComponent } from './components/revision/releases-revision/releases-revision.component';
import { RevisionService } from './services/revision/revision.service';
import { RequirementsRevisionComponent } from './components/revision/requirements-revision/requirements-revision.component';
import { TestLabRevisionComponent } from './components/revision/test-lab-revision/test-lab-revision.component';
import { DefectsRevisionComponent } from './components/revision/defects-revision/defects-revision.component';
import { AgendaAmbienteRevisionComponent } from './components/revision/agenda-ambiente-revision/agenda-ambiente-revision.component';
import { CartaCertificacionRevisionComponent } from './components/revision/carta-certificacion-revision/carta-certificacion-revision.component';
import { RepositorioRevisionComponent } from './components/revision/repositorio-revision/repositorio-revision.component';
import { DodDdtVstsRevisionComponent } from './components/revision/dod-ddt-vsts-revision/dod-ddt-vsts-revision.component';
import { UsdRevisionComponent } from './components/revision/usd-revision/usd-revision.component';
@NgModule({
  declarations: [
    AppComponent,
    ReleasesFormComponent,
    NavbarComponent,
    TitleComponent,
    LoginComponent,
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
    SeguimientosComponent,
    RegistroComponent,
    RevisarSeguimientoComponent,
    ReleasesRevisionComponent,
    RequirementsRevisionComponent,
    TestLabRevisionComponent,
    DefectsRevisionComponent,
    AgendaAmbienteRevisionComponent,
    CartaCertificacionRevisionComponent,
    RepositorioRevisionComponent,
    DodDdtVstsRevisionComponent,
    UsdRevisionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FeatureRoutingModule,
    HttpClientModule
    // MaterialModule
  ],
  providers: [
    OpcionesService,
    SeguimientoService,
    UsuarioService,
    RolService,
    RevisionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
