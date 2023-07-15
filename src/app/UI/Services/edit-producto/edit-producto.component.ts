import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../Application/models/producto.model';
import { ProductoService } from '../../../Infrastructure/services/producto.service';



@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto : Producto;
  id: number;
  constructor(public productoService: ProductoService, private router: 
    Router, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe(params => {
      this.productoService.get(Number(params.get('id'))).subscribe((product : any)=>{
        this.producto = product['body'];
        this.id = product['body'].idProduct;
      })
    })
  }

  ngOnInit(): void {}

  editProducto(producto:Producto){
    producto.idProduct=this.id;
    console.log('edit',producto.idProduct);
    console.log(producto);
    this.productoService.update(producto).subscribe(
      ()=>{
        this.router.navigate(['/admin/productos']);
      },
      (error: any)=> {}
    );
  }
}