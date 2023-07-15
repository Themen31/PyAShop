import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { Solicitud } from '../../Application/models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllSolicitudes() {
    return this.http.get<Solicitud[]>(`${this.apiBase}/solicitudes`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/solicitudes/${id}`);
  }

  create(solicitud: Solicitud) {
    return this.http.post(`${this.apiBase}/solicitudes`, solicitud);
  }

  update(solicitud: Solicitud) {
    return this.http.put(`${this.apiBase}/solicitudes`, solicitud);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/solicitudes/${id}`);
  }
}