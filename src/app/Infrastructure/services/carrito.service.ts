
import { Injectable } from '@angular/core';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../Application/models/product.model';
import { Compra } from '../../Application/models/compra4.model';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiBase: string = environment.apiBase

  constructor(private http:HttpClient) { }

  
 

  verCarrito(idUsuario: number){
    return this.http.get<Producto[]>( `${this.apiBase}/usuarios/${idUsuario}/milista`)
  }
  eliminarDelCarrito(idUsuario: number,idProducto:number){
    return this.http.delete<Producto[]>( `${this.apiBase}/usuarios/${idUsuario}/milista/${idProducto}`)
  }

  crearPedido(compra: Compra){
    console.log(compra);
    
    return this.http.post(`${this.apiBase}/compras`, compra) 

  }


}
