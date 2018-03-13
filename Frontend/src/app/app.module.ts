import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { ReleasesFormComponent } from './components/releases-form/releases-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { RequirementsFormComponent } from './components/requirements-form/requirements-form.component';
import { LoginComponent } from './components/login/login.component';
import { TestLabFormComponent } from './components/test-lab-form/test-lab-form.component';
import { DefectsFormComponent } from './components/defects-form/defects-form.component';
import { AgendaAmbienteFormComponent } from './components/agenda-ambiente-form/agenda-ambiente-form.component';
import { CartaCertificacionFormComponent } from './components/carta-certificacion-form/carta-certificacion-form.component';
import { RepositorioFormComponent } from './components/repositorio-form/repositorio-form.component';
import { DodDdtVstsFormComponent } from './components/dod-ddt-vsts-form/dod-ddt-vsts-form.component';
import { UsdFormComponent } from './components/usd-form/usd-form.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { NuevoSeguimientoComponent } from './components/nuevo-seguimiento/nuevo-seguimiento.component';

// Rutas
import { FeatureRoutingModule } from './app.routes';

// Servicios
import { OpcionesService } from './services/opciones.service';
import { SeguimientoService } from './services/seguimiento.service';
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component';

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
    SeguimientosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FeatureRoutingModule,
    HttpClientModule
    // MaterialModule
  ],
  providers: [OpcionesService, SeguimientoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
