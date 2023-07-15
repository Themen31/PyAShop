import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Oferta } from '../../../Application/models/oferta.model';
import { Producto } from 'src/app/Application/models/producto.model';
import { OfertaService } from '../../../Infrastructure/services/oferta.service';
import { ProductoService } from 'src/app/Infrastructure/services/product.service';

@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.component.html',
  styleUrls: ['./form-oferta.component.css']
})
export class FormOfertaComponent implements OnInit {
  form: FormGroup;
  @Input() oferta: Oferta = new Oferta();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();

  productosid: Producto[];

  constructor( private formbuilder: FormBuilder, private productoService: ProductoService, private router: Router, private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.getAllProductos();
    
    this.form = this.formbuilder.group({
      dsctOfertaDeseado:[
        this.oferta.dsctOfertaDeseado,
      //  '',
      ],
      producto:[
        this.oferta.producto,
      //  '',
      ],
    });
  }

  getAllProductos(){
    this.productoService.getAllProductos().subscribe((data:any)=>{
      this.productosid=data['body'];
      console.log(this.productosid);
      //console.log(data);
    })
  }



  save(){
    this.onSubmit.emit(this.form.value);
  }

}