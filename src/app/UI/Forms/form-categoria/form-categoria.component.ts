import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductoService } from "src/app/Infrastructure/services/producto.service";
import { Categoria } from "../../../Application/models/categoria.model";
import { CategoriaService } from "../../../Infrastructure/services/categoria.service";



@Component({
    selector: 'app-form-categoria',
    templateUrl: './form-categoria.component.html',
    styleUrls: ['./form-categoria.component.css']
  })
  export class FormCategoriaComponent implements OnInit {
  
    form: FormGroup;
    @Input() categoria: Categoria = new Categoria();
    @Output() onSubmit: EventEmitter<any>= new EventEmitter();
    

    constructor(
      private productoService: ProductoService,
      private formBuilder:FormBuilder,
      private router:Router,
      private categoriaService:CategoriaService
      ) { }
      ngOnInit(): void {

        console.log(this.categoria);
        
        this.form = this.formBuilder.group({
  
          nombre_categoria: [
            this.categoria.nombre_categoria,
          ],
          descripcion_categoria: [
            this.categoria.descripcion_categoria
          ],
        });
      }
      
      save(){
        this.onSubmit.emit(this.form.value);
      }
  
  }
  