import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './citas/citas.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PerfilAdminComponent } from './auth/perfil-admin/perfil-admin.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginnComponent } from './auth/loginn/loginn.component';

const routes: Routes = [
  {path:' ', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent, pathMatch:'full'},
   { path: 'Citas', component: CitasComponent, pathMatch:'full'},
   { path: 'Servicios', component: ServiciosComponent, pathMatch:'full'},
   { path: 'admin', component: PerfilAdminComponent, pathMatch:'full'},
   { path: 'galery', component: GaleriaComponent, pathMatch:'full'},
   { path: 'contacto', component: ContactoComponent, pathMatch:'full'},
   { path: 'login', component: LoginnComponent, pathMatch:'full'},
   { path: 'Registro', component: RegisterComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
