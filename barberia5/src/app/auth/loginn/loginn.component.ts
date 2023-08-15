import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
  loginForm!: FormGroup;
  correo!: string;
  password!: string;

  constructor(private formBuilder: FormBuilder, 
    public router: Router, private http: HttpClient, private loginS:LoginService) { }

  ngOnInit(): void {

  }


  login() {
    const user = { correo: this.correo, password: this.password };
    this.loginS.login(user).subscribe(
      data => {
      //rutas
      this.router.navigateByUrl("/home");
        console.log("Bienvenido aswfasfafas", data);
      },
      error => {
        console.log("Credenciales no validas");
        console.log(error);
      }
    );
  }

}
