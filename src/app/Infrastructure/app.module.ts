import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../UI/Services/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRegistrarUsuarioComponent } from '../UI/registrar/form-registrar-usuario/form-registrar-usuario.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../Application/mapping/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarUsuarioComponent } from '../UI/registrar/registrar-usuario/registrar-usuario.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    FormRegistrarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
