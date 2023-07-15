import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { Producto } from '../../Application/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllProductos() {
    return this.http.get<Producto[]>(`${this.apiBase}/producto`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/producto/${id}`);
  }

  agregarAlCarrito(idUsuario: number, idProducto: number){
    return this.http.put(`${this.apiBase}/usuarios/${idUsuario}/milista/${idProducto}`, null);
  }

}