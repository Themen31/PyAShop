import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from '../../../Application/models/categoria.model';
import { CategoriaService } from '../../../Infrastructure/services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  displayedColumns: string[] = ['idCategoria', 'nombre_categoria', 'descripcion_categoria', 'acciones'];
  dataSource : MatTableDataSource<Categoria>;


  constructor(private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource(data);
        });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar esta categoria?');
    if (ok) {
      this.categoriaService.delete(id).subscribe(() => {
        this.getAllCategorias();
      });
    }
  }

}
