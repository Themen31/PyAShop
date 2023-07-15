import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../../Application/models/categoria.model';
import { CategoriaService } from '../../../Infrastructure/services/categoria.service';

@Component({
  selector: 'app-new-categoria',
  templateUrl: './new-categoria.component.html',
  styleUrls: ['./new-categoria.component.css']
})
export class NewCategoriaComponent implements OnInit {

  constructor(public categoriaService: CategoriaService, private router: Router) {}

  ngOnInit(): void {}

  createCategoria(categoria:Categoria) {
    this.categoriaService.create(categoria).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/categorias']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
