import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { estadoSolicitud } from '../../Application/models/estado-solicitud.model';
//import { estadoSolicitud } from '../../Application/models/estado-solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoSolicitudService {

private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllEstadoSolicitudes(){
    return this.http.get<estadoSolicitud[]>(`${this.apiBase}/estadosolicitud`);
  }

  getAllIdsEstados() {
    return this.http.get<number[]>(`${this.apiBase}/estadosolicitud/ides`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/estadosolicitud/${id}`);
  }

  create(estadoSolicitud: estadoSolicitud) {
    return this.http.post(`${this.apiBase}/estadosolicitud`, estadoSolicitud);
  }

  update(estadoSolicitud: estadoSolicitud) {
    return this.http.put(`${this.apiBase}/estadosolicitud`, estadoSolicitud);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/estadosolicitud/${id}`);
  }
}