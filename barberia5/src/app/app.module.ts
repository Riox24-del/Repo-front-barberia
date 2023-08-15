import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { CommonModule } from '@angular/common';
>>>>>>> 2a37d537644c907bf4c39e39643622fe40e5bce6
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { PerfiluserComponent } from './auth/perfiluser/perfiluser.component';
import { HomeComponent } from './components/home/home.component';
import { LoginnComponent } from './auth/loginn/loginn.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CitasComponent } from './citas/citas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FullCalendarModule } from '@fullcalendar/angular';
import { PerfilAdminComponent } from './auth/perfil-admin/perfil-admin.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './footer/footer.component'; 



@NgModule({
  declarations: [
    AppComponent,

    RegisterComponent,
    PerfiluserComponent,
    HomeComponent,
    LoginnComponent,
    CitasComponent,
    ServiciosComponent,
    PerfilAdminComponent,
    GaleriaComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,   HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, FullCalendarModule
=======
        AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> 2a37d537644c907bf4c39e39643622fe40e5bce6
  ],
  exports: [RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
