import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';
import { Donacion } from 'src/app/Application/models/donacion.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-donacion',
  templateUrl: './form-donacion.component.html',
  styleUrls: ['./form-donacion.component.css']
})
export class FormDonacionComponent implements OnInit {
  form: FormGroup;
  date: Date = new Date();
  @Input() donacion: Donacion = new Donacion();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();

// onSubmit: any;
constructor(
  //private donacionService: DonacionService,
  private formbuilder: FormBuilder,
  private router:Router,
  ) { }

  ngOnInit(): void {

     this.form = this.formbuilder.group({
      usuario: {
        idUsuario: this.donacion.usuario=Number(sessionStorage.getItem('key')),
      },
      montoDonar:[
        this.donacion.montoDonar,[Validators.required, Validators.max(16)]
      ],
      fechaPlantacion:[
        this.donacion.fechaPlantacion = this.date.toLocaleDateString(),
      ],
      metodoPago:[
        'Tarjeta de credito',
      ]
     })
  }
  save(){
    sessionStorage.setItem('monto_donar', this.form.get('montoDonar')?.value);
    this.router.navigate(['/user/pagar-donacion']);
    //this.onSubmit.emit(this.form.value); //guarda la donación
  }
}
