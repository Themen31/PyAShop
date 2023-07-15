import { Usuario } from "src/app/Application/models/usuario.model";
import { EstadoCompra } from "./estadocompra.model";

export class Compra{
    idCompra: number;
    usuario: Usuario;
    montoPago: number;
    fechaCompra: Date;
    fechaEntrega: Date;
    metodoPago: String;
    estadoCompra: EstadoCompra;
    costoEnvio: number;
    subTotal: number;
  }