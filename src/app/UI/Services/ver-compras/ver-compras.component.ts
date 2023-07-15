import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Application/models/usuario.model';

import { Compra } from '../../../Application/models/compra2.model';
import { CompraService } from '../../../Infrastructure/services/compra.service';


@Component({
  selector: 'app-ver-compras',
  templateUrl: './ver-compras.component.html',
  styleUrls: ['./ver-compras.component.css']
})
export class CompraListComponent implements OnInit {
  usuario =new Usuario();
  public prueba: Array<any> = [];
  estado: any;
  public seleccion: number;
  
  
  displayedColumns: string[] = ['nCompra', 'fechaCompra',  'importeTotal', 'estado', 'Recibo'];
  dataSource: MatTableDataSource<Compra>;
  

  constructor(private compraService: CompraService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMisCompras();
  }

  getMisCompras(){
    this.compraService.getMisCompras(Number(sessionStorage.getItem('key'))).subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data['body']);
      console.log(Number(sessionStorage.getItem('key')), 'hjh'); //AQUÍ ESTABA idUsuario en getItem
     // this.estado=data['body'].estadoCompra.nombreEstado; ESTO NO ESTABA CONECTADO
    })
  }
  applyFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }

  mover(idProducto:number){
    window.location.replace(`${idProducto}/view`);
  }
  
  sendIdCompra(idCompra: number){
    this.seleccion = idCompra;
   // console.log(this.seleccion);
  }
  
  
}
  