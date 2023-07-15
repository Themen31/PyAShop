import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../UI/Services/login/login.component';
import { RegistrarUsuarioComponent } from '../../UI/registrar/registrar-usuario/registrar-usuario.component';
import { ProductoListComponent } from '../../UI/Services/producto-list/producto-list.component';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren:()=>
      import('../../Domain/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: '',
    loadChildren:()=>
      import('../../UI/home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'user',
    loadChildren: () =>
    import('../../Domain/user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path:'register',
    component:RegistrarUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
