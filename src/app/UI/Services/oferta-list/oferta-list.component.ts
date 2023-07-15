import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Oferta } from '../../../Application/models/oferta.model';
import { OfertaService } from '../../../Infrastructure/services/oferta.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {
  displayedColumns: string[] = ['idOferta', 'dsctOfertaDeseado', 'cantidadARestar', 'precioActualProducto', 
  'idProducto', 'nombreProducto', 'costoProducto', 'Aplicar Oferta'];
  dataSource: MatTableDataSource<Oferta>;

  constructor(private ofertaService: OfertaService, private router: Router) { }

  ngOnInit(): void {
    this.getAllOfertas();
  }

  getAllOfertas(){
    this.ofertaService.getAllOfertas().subscribe((data:any)=>{
     this.dataSource = new MatTableDataSource(data['body']);
     console.log(data['body']);
    });
  }

  aplicarOferta(idOferta: number){
    this.ofertaService.aplicarOferta(idOferta).subscribe(
      ()=>{
        window.location.reload();
      },
      (error: any) => { console.log(error); }
    );
    }

    
    
    

}