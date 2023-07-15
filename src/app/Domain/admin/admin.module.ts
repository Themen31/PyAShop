import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '../../Application/mapping/admin-routing.module';
import { NewProductoComponent } from '../../UI/Services/new-producto/new-producto.component';
import { ProductoListComponent } from '../../UI/Services/producto-list/producto-list.component';
import { EditProductoComponent } from '../../UI/Services/edit-producto/edit-producto.component';
import { CategoriaListComponent } from '../../UI/Services/categoria-list/categoria-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../../Infrastructure/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormProductoComponent } from '../../UI/Forms/form-producto/form-producto.component';
import { MatSelectModule } from '@angular/material/select';
import { NewCategoriaComponent } from '../../UI/Services/new-categoria/new-categoria.component';
import { FormCategoriaComponent } from '../../UI/Forms/form-categoria/form-categoria.component';
import { CompraListComponent } from '../../UI/Services/ver-sus-compras/ver-compras.component';
import { EditCompraComponent } from '../../UI/Services/edit-compra/edit-compra.component';
import { FormCompraComponent } from '../../UI/Forms/form-compra/form-compra.component';
import { EstadocompraListComponent } from '../../UI/Services/estadocompra-list/estadocompra-list.component';
import { OfertaListComponent } from '../../UI/Services/oferta-list/oferta-list.component';
import { CrearOfertaComponent } from '../../UI/Services/crear-oferta/crear-oferta.component';
import { FormOfertaComponent } from '../../UI/Forms/form-oferta/form-oferta.component';
import { DonacionListComponent } from '../../UI/Services/donaciones/donaciones.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SolicitudListComponent } from '../../UI/Services/solicitudes/solicitudes.component';


@NgModule({
  declarations: [
    NewProductoComponent,
    ProductoListComponent,
    EditProductoComponent,
    FormProductoComponent,
    CategoriaListComponent,
    NewCategoriaComponent,
    LayoutComponent,
    FormCategoriaComponent,
    CompraListComponent,
    EditCompraComponent,
    FormCompraComponent,
    EstadocompraListComponent,
    OfertaListComponent,
    CrearOfertaComponent,
    FormOfertaComponent,
    DonacionListComponent,
    SolicitudListComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class AdminModule { }
