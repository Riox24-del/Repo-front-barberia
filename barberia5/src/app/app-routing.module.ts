import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './citas/citas.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path:' ', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent, pathMatch:'full'},
   { path: 'Citas', component: CitasComponent, pathMatch:'full'},
   { path: 'Servicios', component: ServiciosComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
