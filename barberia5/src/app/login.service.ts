import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login(user: unknown): Observable<unknown> {
    return this.http.post("http://localhost:3000/api/cliente/login", user);
  }

  registro(user: unknown): Observable<unknown> {
    return this.http.post("http://localhost:3000/api/cliente/clienteNuevo", user);
  }
}
