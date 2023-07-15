import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesoCompraComponent } from '../../UI/Services/proceso-compra/proceso-compra.component';
import { ModalitoComponent } from '../../UI/Services/modalito/modalito.component';
import { VerCarritoComponent } from '../../UI/Services/ver-carrito/ver-carrito.component';
import { ModalReciboComponent } from '../../UI/Services/modal-recibo/modal-recibo.component';
import { CompraListComponent } from '../../UI/Services/ver-compras/ver-compras.component';
import { DonacionesListComponent } from '../../UI/Services/donar-apartado/donaciones-list/donaciones-list.component';
import { DonarApartadoComponent } from '../../UI/Services/donar-apartado/donar-apartado.component';
import { PagarDonacionComponent } from '../../UI/Services/donar-apartado/pagar-donacion/pagar-donacion.component';
import { LayoutComponent } from '../../Domain/user/layout/layout.component';
import { ProductoListComponent } from '../../UI/Services/product-list/product-list.component';
import { NewSolicitudesComponent } from '../../UI/Services/new-solicitudes/new-solicitudes.component';

const routes: Routes = [
  {

    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductoListComponent,
      },
      {
        path: 'milista',
        component: VerCarritoComponent,

      },
      {
        path: 'solicitudes/:id/new',
        component: NewSolicitudesComponent,
      },
      {
        path: 'donar',
          component: DonarApartadoComponent,

      },
      {
        path: 'misdonaciones',
        component: DonacionesListComponent,
      },


      {
        path: 'pago/:idD',
        component: ProcesoCompraComponent
      },
      {
        path: 'modal',
        component: ModalitoComponent
      },
      {
        path: 'pagar-donacion',
        component: PagarDonacionComponent
      },
    ]
  },
  {
    path: 'compras',
    component: LayoutComponent,
    children: [
      {
        path: 'miscompras',
        component: CompraListComponent,
      },

    ]
  },
  {
    path: 'modalazo',
    component: ModalReciboComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
