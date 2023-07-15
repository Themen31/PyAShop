import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from '../../Application/mapping/user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProductoListComponent } from '../../UI/Services/product-list/product-list.component';
import { MaterialModule } from '../../Infrastructure/material/material.module';
import { VerCarritoComponent } from '../../UI/Services/ver-carrito/ver-carrito.component';
import { CompraListComponent } from '../../UI/Services/ver-compras/ver-compras.component';
import { ProcesoCompraComponent } from '../../UI/Services/proceso-compra/proceso-compra.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTabsModule} from "@angular/material/tabs";
import {MatNativeDateModule} from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { ModalitoComponent } from '../../UI/Services/modalito/modalito.component';
import { DonarApartadoComponent } from '../../UI/Services/donar-apartado/donar-apartado.component';
import { FormDonacionComponent } from '../../UI/Forms/form-donacion/form-donacion.component';
import { PagarDonacionComponent } from '../../UI/Services/donar-apartado/pagar-donacion/pagar-donacion.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalReciboComponent } from '../../UI/Services/modal-recibo/modal-recibo.component';
import { DonacionesListComponent } from '../../UI/Services/donar-apartado/donaciones-list/donaciones-list.component';
import { FormSolicitudComponent } from '../../UI/Forms/form-solicitud/form-solicitud.component';
import { NewSolicitudesComponent } from '../../UI/Services/new-solicitudes/new-solicitudes.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductoListComponent,
    LayoutComponent,
    VerCarritoComponent,
    CompraListComponent,
    ProcesoCompraComponent,
    ModalitoComponent,
    DonarApartadoComponent,
    FormDonacionComponent,
    PagarDonacionComponent,
    ModalReciboComponent,
    DonacionesListComponent,
    FormSolicitudComponent,
    NewSolicitudesComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class UserModule { }
