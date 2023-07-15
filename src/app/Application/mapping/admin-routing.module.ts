import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../Domain/admin/layout/layout.component';
import { EditProductoComponent } from '../../UI/Services/edit-producto/edit-producto.component';
import { NewProductoComponent } from '../../UI/Services/new-producto/new-producto.component';
import { ProductoListComponent } from '../../UI/Services/producto-list/producto-list.component';
import { CategoriaListComponent } from '../../UI/Services/categoria-list/categoria-list.component';
import { NewCategoriaComponent } from '../../UI/Services/new-categoria/new-categoria.component';
import { CompraListComponent } from '../../UI/Services/ver-sus-compras/ver-compras.component';
import { OfertaListComponent } from '../../UI/Services/oferta-list/oferta-list.component';
import { CrearOfertaComponent } from '../../UI/Services/crear-oferta/crear-oferta.component';
import { DonacionListComponent } from '../../UI/Services/donaciones/donaciones.component';
import { SolicitudListComponent } from '../../UI/Services/solicitudes/solicitudes.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'productos',
        component: ProductoListComponent,
      },
      {
        path: 'productos/new',
        component: NewProductoComponent,
      },
      {
        path: 'productos/:id/edit',
        component: EditProductoComponent,
      },
      {
        path: 'categorias',
        component: CategoriaListComponent,
      },
      {
        path: 'categorias/new',
        component: NewCategoriaComponent,
      },
      {
        path: 'compras',
        component: CompraListComponent,
      },
      {
        path: 'ofertas',
        component: OfertaListComponent,
      },
      {
        path:'ofertas/crear',
        component: CrearOfertaComponent,
      },
      {
        path: 'donaciones',
        component: DonacionListComponent,
      },

      {
        path: 'solicitudes',
        component: SolicitudListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
