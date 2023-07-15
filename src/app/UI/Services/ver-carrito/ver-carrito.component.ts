import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../../../Application/models/product.model';
import { CarritoService } from '../../../Infrastructure/services/carrito.service';
import { ModalitoComponent } from '../modalito/modalito.component';
import { Donacion } from 'src/app/Application/models/donacion.model';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent implements OnInit {
  dataSource : MatTableDataSource <Producto>;
  displayedColumns: string[] = ['idProducto','nombre_producto', 'categoria_producto', 'costo_producto','Eliminar' ];
  id:any;
  precioPro: any
  delivery: any
  precioTotal:any;
  preciot:any;
  limosna: Donacion;
  idLimosna: number;
  
  constructor(
    private carritoService: CarritoService, public donacionService: DonacionService, public activeRouter: ActivatedRoute
  ) { 
   
  }

  ngOnInit(): void {
    this.verProductosCarrito();
  
  }

  crearDonacion(donacion: Donacion){

    this.limosna = donacion;
    this.donacionService.crearDonacion(donacion).subscribe(
      (res:any) => {
        this.idLimosna = res['body'].idDonacion;
        console.log(this.limosna);
        console.log(res.valueOf());
      },
      (err) => {
        console.log(err);}
    );
  }

  setIdLimosna(donacioncilla: Donacion){
    this.idLimosna = donacioncilla.idDonacion;
    console.log(this.idLimosna);
  }

  verProductosCarrito(){
    this.carritoService.verCarrito(Number(sessionStorage.getItem('key'))).subscribe((data:any) => {
      this.dataSource = data;
      console.log(Number(sessionStorage.getItem('key'))); //AQUÍ TAMBIEN ESTABA idUsuario
      this.preciot=data.costo_producto;
      var precio=0;
     
      for(let i=0; i< data.length; i++){
       
        precio += data[i].costo_producto ;
      }
      this.precioPro=Number(precio).toFixed(2);
      if(this.precioPro==0){
        this.delivery=Number(0);
      }
      else{
        this.delivery=Number(5);
      }
      
      this.delivery=this.delivery.toFixed(2);
      this.precioTotal=(Number(this.precioPro)+Number(this.delivery)).toFixed(2); //+PrecioFormulario+0
      
    });

    
    


  }
  
      
  eliminarDelCarrito(idProducto:number){
    const ok = confirm('¿Estás seguro de eliminar este producto al carrito de la lista de deseos?');
    if(ok){
      this.carritoService.eliminarDelCarrito(Number(sessionStorage.getItem('key')),idProducto).subscribe(()=>{
        window.location.reload()
      })
       
      }
    }

    irPago(){
    
      if(sessionStorage.getItem('key')==null){
        const ok = confirm('Debes iniciar sesión para poder ver tus compras');
      if(ok){
        
        window.location.replace(`../login`)
      }
      }
      else{
        window.location.replace(`../user/pago/${this.idLimosna}`);
      }
     
      
  
    } 
    
  }


