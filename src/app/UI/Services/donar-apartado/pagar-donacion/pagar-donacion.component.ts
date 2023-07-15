import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Infrastructure/services/usuario.service';
import { Donacion } from '../../../../Application/models/donacion2.model';
import { DonacionService } from '../../../../Infrastructure/services/donacion.service';

@Component({
  selector: 'app-pagar-donacion',
  templateUrl: './pagar-donacion.component.html',
  styleUrls: ['./pagar-donacion.component.css'],
})
export class PagarDonacionComponent implements OnInit {
  tarjeta: any;
  btnAbrirFormulario: any;
  formulario: any;
  numeroTarjeta: any;
  nombreTarjeta: any;
  logoMarca: any;
  firma: any;
  mesExpiracion: any;
  yearExpiracion: any;
  ccv: any;
  opcion: any;
  user: any;
  donacion: Donacion = new Donacion();
  datePipe = new DatePipe('en-US');

  constructor(
    private usuarioService: UsuarioService,
    private donacionService: DonacionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUserById();
    this.executePagarDonacion();
  }

  formatearFechas(date: any): any {
    var dateFormat = this.datePipe.transform(date, 'dd/MM/yyyy');
    return dateFormat;
  }
  registrarPagoDeDonacion() {
    this.donacion.fechaDonacion = this.formatearFechas(new Date());
    this.donacion.fechaPlantacion = this.formatearFechas(new Date());
    this.donacion.metodoPago = 'TARJETA';
    this.donacion.montoDonar = Number(sessionStorage.getItem('monto_donar'));
    this.donacion.usuario = this.user;
    console.log(this.user.nombreUsuario);
    this.donacionService.register(this.donacion).subscribe((donacion: any) => {
      this._snackBar.open('Donación registrada!!', 'OK', {
        duration: 3000
      });
      console.log('donación', donacion);
      this.router.navigate(['/user']);
    });
    //this.nombreTarjeta = document.querySelector("#tarjeta .nombre")?.textContent;
    //console.log(this.nombreTarjeta);
    // console.log(this.user);
  }

  getUserById() {
    this.usuarioService
      .obtenerUsuarioPorID(Number(sessionStorage.getItem('key')))
      .subscribe((data: any) => {
        this.user = data.body;
      });
  }

  executePagarDonacion() {
    (this.tarjeta = document.querySelector('#tarjeta')),
      (this.btnAbrirFormulario = document.querySelector(
        '#btn-abrir-formulario'
      )),
      (this.formulario = document.querySelector('#formulario-tarjeta')),
      (this.numeroTarjeta = document.querySelector('#tarjeta .numero')),
      (this.nombreTarjeta = document.querySelector('#tarjeta .nombre')),
      (this.logoMarca = document.querySelector('#logo-marca')),
      (this.firma = document.querySelector('#tarjeta .firma p')),
      (this.mesExpiracion = document.querySelector('#tarjeta .mes')),
      (this.yearExpiracion = document.querySelector('#tarjeta .year'));
    this.ccv = document.querySelector('#tarjeta .ccv');

    // * Volteamos la tarjeta para mostrar el frente.
    const mostrarFrente = () => {
      if (this.tarjeta.classList.contains('active')) {
        this.tarjeta.classList.remove('active');
      }
    };

    // * Rotacion de la tarjeta
    this.tarjeta.addEventListener('click', () => {
      this.tarjeta.classList.toggle('active');
    });

    // * Boton de abrir formulario
    this.btnAbrirFormulario.addEventListener('click', () => {
      this.btnAbrirFormulario.classList.toggle('active');
      this.formulario.classList.toggle('active');
    });

    // * Select del mes generado dinamicamente.
    for (let i = 1; i <= 12; i++) {
      this.opcion = document.createElement('option');
      this.opcion.value = i;
      this.opcion.innerText = i;
      this.formulario.selectMes.appendChild(this.opcion);
    }

    // * Select del año generado dinamicamente.
    const yearActual = new Date().getFullYear();
    for (let i = yearActual; i <= yearActual + 8; i++) {
      this.opcion = document.createElement('option');
      this.opcion.value = i;
      this.opcion.innerText = i;
      this.formulario.selectYear.appendChild(this.opcion);
    }

    // * Input numero de tarjeta
    this.formulario.inputNumero.addEventListener('keyup', (e: any) => {
      let valorInput = e.target.value;

      this.formulario.inputNumero.value = valorInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cuatro numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();

      this.numeroTarjeta.textContent = valorInput;

      if (valorInput == '') {
        this.numeroTarjeta.textContent = '#### #### #### ####';

        this.logoMarca.innerHTML = '';
      }

      if (valorInput[0] == 4) {
        this.logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'assets/img/logos/visa.png';
        imagen.setAttribute('height', '15%');
        imagen.setAttribute('width', '15%');
        this.logoMarca.appendChild(imagen);
      } else if (valorInput[0] == 5) {
        this.logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'assets/img/logos/mastercard.png';
        imagen.setAttribute('height', '15%');
        imagen.setAttribute('width', '15%');
        this.logoMarca.appendChild(imagen);
      }

      // Volteamos la tarjeta para que el usuario vea el frente.
      mostrarFrente();
    });

    // * Input nombre de tarjeta
    this.formulario.inputNombre.addEventListener('keyup', (e: any) => {
      let valorInput = e.target.value;

      this.formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
      this.nombreTarjeta.textContent = valorInput;
      this.firma.textContent = valorInput;

      if (valorInput == '') {
        this.nombreTarjeta.textContent = 'Jhon Doe';
      }

      mostrarFrente();
    });

    // * Select mes
    this.formulario.selectMes.addEventListener('change', (e: any) => {
      this.mesExpiracion.textContent = e.target.value;
      mostrarFrente();
    });

    // * Select Año
    this.formulario.selectYear.addEventListener('change', (e: any) => {
      this.yearExpiracion.textContent = e.target.value.slice(2);
      mostrarFrente();
    });

    // * CCV
    this.formulario.inputCCV.addEventListener('keyup', () => {
      if (!this.tarjeta.classList.contains('active')) {
        this.tarjeta.classList.toggle('active');
      }

      this.formulario.inputCCV.value = this.formulario.inputCCV.value
        // Eliminar los espacios
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '');

      this.ccv.textContent = this.formulario.inputCCV.value;
    });
  }
}
