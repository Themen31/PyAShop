import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { EstadoCompra } from '../../Application/models/estadocompra.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoCompraService {

private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllEstados(){
    return this.http.get<EstadoCompra[]>(`${this.apiBase}/estados`);
  }

  getAllIdsEstados() {
    return this.http.get<number[]>(`${this.apiBase}/estados/ides`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/estados/${id}`);
  }

  create(estadoCompra: EstadoCompra) {
    return this.http.post(`${this.apiBase}/estados`, EstadoCompra);
  }

  update(estadoCompra: EstadoCompra) {
    return this.http.put(`${this.apiBase}/estados`, EstadoCompra);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/estados/${id}`);
  }
}