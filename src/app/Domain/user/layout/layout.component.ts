import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Application/models/usuario.model';
import { UsuarioService } from 'src/app/Infrastructure/services/usuario.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  nombre:any;
  isShown: boolean = false;
  isShown2: boolean = false;
  dataSource:Usuario
  constructor(
    private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('key') == null){
      console.log(sessionStorage.getItem('key'))
      this.isShown =! this.isShown;
      console.log(this.isShown);
    }
    
    else {
      
      this.isShown2 =! this.isShown2;
    }

    this.verUsuario()
  }
  verUsuario(){
    if(sessionStorage.getItem('key')!=null || sessionStorage.getItem('key')!=undefined|| sessionStorage.getItem('key')!=''){
      this.usuarioService.obtenerUsuarioPorID(Number(sessionStorage.getItem('key'))).subscribe((data:any)=>{
        this.dataSource=data['body'];
        this.nombre=this.dataSource.nombreUsuario;
       
        
      })

    }
    
  
    
  }
  cerrarSesion(){
    const ok = confirm('¿Estás seguro de cerrar sesión?');
    if(ok){
      sessionStorage.clear();
      window.location.replace(`../`)
    }
   
   
  }

  irCarrito(){
    if(sessionStorage.getItem('key')==null){
      const ok = confirm('Debes iniciar sesión para poder ver los items de tu carrito de compras');
    if(ok){
      
      window.location.replace(`../login`)
    }
    }
    else{
      window.location.replace(`../user/milista`);
    }
   
    

  }

  irDonar(){
    if(sessionStorage.getItem('key')==null){
      const ok = confirm('Debes iniciar sesión para poder ver los items de tu carrito de compras');
    if(ok){
      
      window.location.replace(`../login`)
    }
    }
    else{
      window.location.replace(`../user/donar`);
    }

  }
  
  irDonaciones(){
    if(sessionStorage.getItem('key')==null){
      const ok = confirm('Debes iniciar sesión para poder ver los items de tu carrito de compras');
    if(ok){
      
      window.location.replace(`../login`)
    }
    }
    else{
      window.location.replace(`../user/misdonaciones`);
    }

  }


  irProductos(){
    if(sessionStorage.getItem('key')==null){
      const ok = confirm('Debes iniciar sesión para poder ver los items de tu carrito de compras');
    if(ok){
      
      window.location.replace(`../login`)
    }
    }
    else{
      window.location.replace(`../user`);
    }
   
    

  }
  irCompras(){
    if(sessionStorage.getItem('key')==null){
      const ok = confirm('Debes iniciar sesión para poder ver tus compras');
    if(ok){
      
      window.location.replace(`../login`)
    }
    }
    else{
      window.location.replace(`../user/compras/miscompras`);
    }
   
    

  }

}
