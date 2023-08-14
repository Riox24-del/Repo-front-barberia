import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http: HttpClient) { }

  registro(cita: unknown): Observable<unknown> {
    return this.http.post("http://localhost:3000/api/citas/citaNueva", cita);
  }
}
