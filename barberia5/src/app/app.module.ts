import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { PerfiluserComponent } from './auth/perfiluser/perfiluser.component';
import { HomeComponent } from './components/home/home.component';
import { LoginnComponent } from './auth/loginn/loginn.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CitasComponent } from './citas/citas.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    
    RegisterComponent,
    PerfiluserComponent,
    HomeComponent,
    LoginnComponent
    CitasComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
