import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReleasesFormComponent } from './components/releases-form/releases-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { RequirementsFormComponent } from './components/requirements-form/requirements-form.component';

import { FeatureRoutingModule } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { TestLabFormComponent } from './components/test-lab-form/test-lab-form.component';
import { DefectsFormComponent } from './components/defects-form/defects-form.component';
import { AgendaAmbienteFormComponent } from './components/agenda-ambiente-form/agenda-ambiente-form.component';
import { CartaCertificacionFormComponent } from './components/carta-certificacion-form/carta-certificacion-form.component';
import { RepositorioFormComponent } from './components/repositorio-form/repositorio-form.component';
import { DodDdtVstsFormComponent } from './components/dod-ddt-vsts-form/dod-ddt-vsts-form.component';
import { UsdFormComponent } from './components/usd-form/usd-form.component';
import { OpcionesService } from './services/opciones.service';


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
    UsdFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FeatureRoutingModule
    // MaterialModule
  ],
  providers: [OpcionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
