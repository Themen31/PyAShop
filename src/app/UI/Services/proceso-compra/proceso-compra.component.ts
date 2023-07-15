import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import Swal from "sweetalert2"
import {Router} from "@angular/router";
import { CarritoService } from '../../../Infrastructure/services/carrito.service';
import { Compra } from '../../../Application/models/compra4.model';
import {InfoEnvioModel} from "../../../Application/models/infoEnvio";
import { ActivatedRoute } from '@angular/router';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';
import { Donacion } from 'src/app/Application/models/donacion.model';

@Component({
  selector: 'app-proceso-compra',
  templateUrl: './proceso-compra.component.html',
  styleUrls: ['./proceso-compra.component.css']
})
export class ProcesoCompraComponent implements OnInit {

  @Input() compra: Compra = new Compra();
  infoEnvio: InfoEnvioModel = new InfoEnvioModel()
  limosna: Donacion;
  idLimosna: number;

  agregarInfoEnvio(){
    this.infoEnvio.direccionEnvio = this.controlDireccion.value
    this.infoEnvio.nombreContactoEnvio = this.controlNombreContacto.value
    this.infoEnvio.apartamentoEnvio = this.controlApartamento.value
    this.infoEnvio.numTelefonoEnvio = this.controlNumTelefono.value
    this.infoEnvio.codigoPostal = this.controlCodigoPostal.value
  }

  controlNumTelefono= new FormControl('',[
    Validators.required,
    Validators.pattern('[0-9+]*'),
    Validators.maxLength(12),
    Validators.minLength(5)
  ]);
  controlNombreContacto= new FormControl('',[
    Validators.required,
    Validators.maxLength(70),
    Validators.minLength(5)
  ]);
  date = new FormControl(new Date());
  hora = new FormControl("01:00 pm");
  progreso=50;
  indexTab=0;
  controlDireccion= new FormControl('',[
    Validators.required,
    Validators.maxLength(70),
    Validators.minLength(12)
  ]);
  controlApartamento= new FormControl('',[
    Validators.required,
    Validators.maxLength(70),
    Validators.minLength(3)
  ]);
  controlCodigoPostal= new FormControl('',[
    Validators.required,
    Validators.pattern('[0-9]*'),
    Validators.maxLength(10),
    Validators.minLength(3)
  ]);
  agnos= [
    {value: '2022'},
    {value: '2023'},
    {value: '2024'},
    {value: '2025'},
    {value: '2026'},
    {value: '2027'},
  ];
  agnoSeleccionado: string;
  meses=[
    {vista:'Enero',value: '01'},
    {vista:'Febrero',value: '02'},
    {vista:'Marzo',value: '03'},
    {vista:'Abril',value: '04'},
    {vista:'Mayo',value: '05'},
    {vista:'Junio',value: '06'},
    {vista:'Julio',value: '07'},
    {vista:'Agosto',value: '08'},
    {vista:'Septiembre',value: '09'},
    {vista:'Octubre',value: '10'},
    {vista:'Noviembre',value: '11'},
    {vista:'Diciembre',value: '12'},
  ];
  mesSeleccionado: string;
  controlCVV= new FormControl('',[
    Validators.required,
    Validators.pattern('[0-9]*'),
    Validators.maxLength(3),
    Validators.minLength(3)
  ]);
  controlNumeroTarjeta= new FormControl('',[
    Validators.required,
    Validators.pattern('[0-9]*'),
    Validators.maxLength(16),
    Validators.minLength(16)
  ]);
  controlNombrePropietario= new FormControl('',[
    Validators.required,
    Validators.maxLength(25),
    Validators.minLength(5)
  ]);
  controlApellidoPropietario= new FormControl('',[
    Validators.required,
    Validators.maxLength(25),
    Validators.minLength(5)
  ]);
  correo= new FormControl('',[
    Validators.email,
    Validators.required,
  ]);
  constructor(
    private router: Router,
    private carritoService: CarritoService, public activeRouter: ActivatedRoute, public donacionService: DonacionService
    ) {
//YO ESTUVE AQUÍ
      this.activeRouter.paramMap.subscribe(params => {
        this.donacionService.getDonacionPorId(Number(params.get('idD'))).subscribe((donacion: any)=>{
          this.limosna = donacion['body'];
          this.idLimosna = donacion['body'].idDonacion;
        })
      })

     }
  ngOnInit(): void {
    

  }
  siguiente(){
    this.progreso=100;
    this.indexTab++;
  }
  anterior() {
    this.progreso=50;
    this.indexTab--;
  }
  esValidoPagar(){
    if(this.controlDireccion.invalid){
      return true;
    }
    if(this.controlApartamento.invalid){
      return  true;
    }
    if(this.controlNumTelefono.invalid){
      return true;
    }
    if(this.controlCodigoPostal.invalid){
      return true;
    }
    if(this.controlNombreContacto.invalid){
      return true;
    }
    if(this.date.invalid){
      return true
    }
    return this.hora.invalid;
  }
  esValidoGuardar() {
    if(this.controlCVV.invalid){
      return true;
    }
    if(this.controlNumeroTarjeta.invalid){
      return true;
    }
    if(this.mesSeleccionado==undefined){
      return true;
    }
    if(this.agnoSeleccionado==undefined){
      return true
    }
    if(this.controlNombrePropietario.invalid){
      return true;
    }
    if(this.controlApellidoPropietario.invalid){
      console.log(this.controlApellidoPropietario);
      return true
    }
    return this.correo.invalid;  }
    realizarPago() {
      this.agregarInfoEnvio();
      var sas = {
        usuario: {
          idUsuario: this.compra.usuario = Number(sessionStorage.getItem('key')),
        },
        metodoPago: this.compra.metodoPago = "Metodo de Pago",
        costoEnvio: this.compra.costoEnvio = 7,
        estadoCompra: {
          idEstado: this.compra.estadoCompra = 1
        },
        infoEnvio: this.infoEnvio,
        donacion: {
          idDonacion: this.idLimosna,
        }
      };
    
      console.log(sas);

    this.carritoService.crearPedido(sas).subscribe(() => {
      this.router.navigate(['/user'])
      Swal.fire({
      icon: 'success',
      title: 'El pago se ha realizado con éxito',
      showConfirmButton: false,
      timer: 1500
     })

    })

     }
}