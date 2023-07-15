import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Compra } from '../../../Application/models/compra.model';
import { CompraService } from '../../../Infrastructure/services/compra.service';
import { Categoria } from '../../../Application/models/categoria.model';
import { CategoriaService } from '../../../Infrastructure/services/categoria.service';



@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit {

  form: FormGroup;


  @Input() set compra(compra: any) {
    this.form?.patchValue(compra);
  }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  
  categoriasid: Categoria [];

 
 // onSubmit: any;
  constructor(
    private compraService: CompraService,
    private formBuilder:FormBuilder,
    private router:Router,
    private categoriaService:CategoriaService
    ) { }
//
   // getAllEstados(){
//      this.compraService.getAllEstados().subscribe((data)=>{
  //      this.idEstado=data;
  //    })
  //  }
  
  
    ngOnInit(): void {
    //  this.getAllEstados();

      this.form = this.formBuilder.group({

        nombre_producto: [
          '',
          [//FALTA VER
            Validators.required,
            Validators.minLength(2),
        //FALTA VER    Validators.maxLength(100),
          ],
        ],
        estadoCompra_compra: '',
        estadoCompra: [
          '',
          [
            Validators.required,
          ],
        ],
      });
    }
    
    save(){
      this.onSubmit.emit(this.form.value);
    }

}

