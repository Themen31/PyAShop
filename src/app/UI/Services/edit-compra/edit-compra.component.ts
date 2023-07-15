import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from '../../../Application/models/compra.model';
import { CompraService } from '../../../Infrastructure/services/compra.service';



@Component({
  selector: 'app-edit-compra',
  templateUrl: './edit-compra.component.html',
  styleUrls: ['./edit-compra.component.css']
})
export class EditCompraComponent implements OnInit {

  compra : Compra;
  id: number;
  constructor(public compraService: CompraService, private router: 
    Router, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe(params => {
      this.compraService.get(Number(params.get('id'))).subscribe((product : any)=>{
        this.compra = product['body'];
        this.id = product['body'].idProduct;
      })
    })
  }

  ngOnInit(): void {}

  editCompra(compra:Compra){
    compra.idCompra=this.id;
    console.log('edit',compra.idCompra);
    console.log(compra);
    this.compraService.update(compra).subscribe(
      ()=>{
        this.router.navigate(['/admin/compras']);
      },
      (error: any)=> {}
    );
  }
}