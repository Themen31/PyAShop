import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/Infrastructure/environments/environment";
import { Donacion } from "../../Application/models/donacion.model";

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  private apiBase: string= environment.apiBase;

  constructor(private http: HttpClient) {}

  crearDonacion(donacion: Donacion){
    return this.http.post(`${this.apiBase}/donaciones`, donacion)
  }

  getDonacionPorId(id: number){
    return this.http.get(`${this.apiBase}/donaciones/${id}`)
  }

  getAllDonaciones() {
    return this.http.get<Donacion[]>(`${this.apiBase}/donaciones`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/donaciones/${id}`);
  }

  create(donacion: Donacion) {
    return this.http.post(`${this.apiBase}/donaciones`, donacion);
  }

  update(donacion: Donacion) {
    return this.http.put(`${this.apiBase}/donaciones`, donacion);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/donaciones/${id}`);
  }

  getMisDonaciones(id: number){
    return this.http.get<any>(`${this.apiBase}/donaciones/listarDonacionesPorIdUsuario?usuario=${id}`);
  }

  register(donacion: any){
    return this.http.post(this.apiBase+'/donaciones', donacion);
  }
}
