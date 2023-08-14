import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CitasService } from '../citas.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  registerForm!: FormGroup;
  calendarOptions: any;
  constructor(private formBuilder: FormBuilder, public router: Router,
    private http: HttpClient, 
    private citasS:CitasService) { 
      this.registerForm = this.formBuilder.group({
        fecha: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]], // Patrón de fecha YYYY-MM-DD
        hora: ['', [Validators.required]], 
        motivo: ['', Validators.required]
      });
     }


     ngOnInit(): void {
      this.calendarOptions = {
        initialView: 'dayGridMonth', // Vista inicial del calendario
        // Otras opciones del calendario...
      };}


  registroCita() {
    if (this.registerForm.valid) {
      const cita = this.registerForm.value;
      this.citasS.registro(cita).subscribe(
        (response: any) => {
          console.log('cita agendada:', response);
          Swal.fire({
            icon: 'success',
            title: 'Cita agendada con éxito',
            showConfirmButton: false,
            timer: 1500 // Ocultar automáticamente después de 1.5 segundos
          }).then(() => {
              this.router.navigateByUrl("/");
          });
        
        },
        (error: any) => {
          console.error('Error en agendar cita:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error al agendar la cita',
            text: 'Por favor, intenta nuevamente más tarde.',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    }
  }

}
