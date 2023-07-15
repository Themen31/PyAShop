import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { Compra } from '../../Application/models/compra.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private apiBase: string = environment.apiBase;
  constructor( private http:HttpClient) {}

  getAllCompras(){
    return this.http.get<Compra[]>(`${this.apiBase}/compras`);
  }
  getMisCompras(id: number){
    return this.http.get<any>(`${this.apiBase}/compras/listarPorIdUsuario?usuario=${id}`);
  }
  getCompraById(idCompra:number){
    return this.http.get<Compra[]>(`${this.apiBase}/compras/${idCompra}`);
  }
  
  listarComprasPorIdUsuario(idUsuario: number, idPedido: number){
    return this.http.get(`${this.apiBase}/compras/${idUsuario}`);
  }
  get(id: number) {
    return this.http.get(`${this.apiBase}/compras/${id}`);
  }

  create(compra: Compra) {
    return this.http.post(`${this.apiBase}/compras`, compra);
  }

  update(compra: Compra) {
    return this.http.put(`${this.apiBase}/compras`, compra);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/compras/${id}`);
  }
  getAllEstados(){
    
  }
   
}