import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';
import { Donacion } from 'src/app/Application/models/donacion.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalito',
  templateUrl: './modalito.component.html',
  styleUrls: ['./modalito.component.css']
})

export class ModalitoComponent implements OnInit {
  form: FormGroup;
  date: Date = new Date();
  @Input() donacion: Donacion = new Donacion();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();
  //---------------------------------------------------
  @ViewChild('modal_1') modal_1: TemplateRef<any>;
    @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
    backdrop: any
  display: string;

  constructor(public donacionService: DonacionService, private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    console.log(this.date.toLocaleDateString());
    setTimeout(() => {
      this.openModal()
     }, 1000);

     this.form = this.formbuilder.group({
      usuario: {
        idUsuario: this.donacion.usuario=Number(sessionStorage.getItem('key')),
      },
      montoDonar:[
        this.donacion.montoDonar,
      ],
      fechaPlantacion:[
        this.donacion.fechaPlantacion = this.date.toLocaleDateString(),
      ],
      metodoPago:[
        'Tarjeta de credito',
      ]
     })
  }

 
  openModal(){
    this.display='block';
 }

 onCloseHandled(){
  this.onSubmit.emit(this.form.value); //guarda la donación
  //-------------------------------------
  this.display='none';
}

hack(){
  this.form.setValue({
    usuario: {
      idUsuario: this.donacion.usuario=Number(sessionStorage.getItem('key')),
    },
    montoDonar: 0.0,
    fechaPlantacion: new Date().toLocaleDateString(),
    metodoPago: 'Tarjeta de credito',
  
  })
  this.onSubmit.emit(this.form.value);
  this.display='none';
}


}
