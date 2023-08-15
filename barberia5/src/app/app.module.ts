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
import { HttpClientModule } from '@angular/common/http'; 
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
        AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
