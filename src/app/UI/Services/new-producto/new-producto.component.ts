import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../../Application/models/producto.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../../../Infrastructure/services/producto.service';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {


  constructor(public productoService: ProductoService, private router: Router,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  createProducto(producto:Producto) {
    this.productoService.create(producto).subscribe(
      
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/productos']);
      },
      (err) => {
        console.log(err);
      }
      
    );
    this._snackBar.open('Producto registrado!!', 'OK', {
      duration: 3000
    });
   
  }
}
