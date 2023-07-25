import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { PerfiluserComponent } from './auth/perfiluser/perfiluser.component';
import { HomeComponent } from './components/home/home.component';
import { LoginnComponent } from './auth/loginn/loginn.component';

@NgModule({
  declarations: [
    AppComponent,
    
    RegisterComponent,
    PerfiluserComponent,
    HomeComponent,
    LoginnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
