import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Application/models/usuario.model';

import { Compra } from '../../../Application/models/compra.model';
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
  
  
  displayedColumns: string[] = ['nCompra', 'fechaCompra',  'importeTotal', 'estado','Actualizar'];
  dataSource: MatTableDataSource<Compra>;
  

  constructor(private compraService: CompraService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCompras();
  }

  getAllCompras(){
    this.compraService.getAllCompras().subscribe((data:any)=>{
      this.dataSource = data['body'];
      console.log(data);
    });
  }
  applyFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }

  mover(idProducto:number){
    window.location.replace(`${idProducto}/view`);
  }
  
  
  
}