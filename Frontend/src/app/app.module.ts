import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { OpcionesService } from './services/opciones/opciones.service';
import { SeguimientoService } from './services/seguimiento/seguimiento.service';
import { UsuarioService } from './services/usuario/usuario.service';
import { RolService } from './services/rol/rol.service';
import { RevisionService } from './services/revision/revision.service';

// Features
import { SeguimientoModule } from './components/seguimiento-feature/seguimiento.module';
import { RevisionModule } from './components/revision-feature/revision.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SeguimientoModule,
    RevisionModule,
    AppRoutingModule
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
