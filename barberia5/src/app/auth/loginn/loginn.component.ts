import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }
  onSubmit() {
    if (this.loginForm?.valid) {
      console.log("Datos del formulario:");
      console.log("Nombre", this.loginForm.get('name')?.value);
      console.log("Contraseña:", this.loginForm.get('password')?.value);
      

    } else {
      console.log("Por favor, complete todos los campos correctamente.");
    }
  }

}
