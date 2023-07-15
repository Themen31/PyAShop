import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompraService } from '../../../Infrastructure/services/compra.service';
import { Compra } from '../../../Application/models/compra2.model';

@Component({
  selector: 'app-modal-recibo',
  templateUrl: './modal-recibo.component.html',
  styleUrls: ['./modal-recibo.component.css']
})
export class ModalReciboComponent implements OnInit {
  @Input() idCompra: number;
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();

  display: string;
  compra: any;

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
  //  console.log(this.idCompra);
    this.obtenerCompra(this.idCompra || 2);
  }

  obtenerCompra(idCompra: number){
    this.compraService.getCompraById(idCompra).subscribe((data:any) => {
     this.compra = data['body'];
    // console.log(this.compra)
      });
    }

  /*
getMisCompras(){
    this.compraService.getMisCompras(Number(sessionStorage.getItem('key'))).subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data['body']);
      console.log(Number(sessionStorage.getItem('idUsuario')), 'hjh');
      this.estado=data['body'].estadoCompra.nombreEstado;
    })
  }
  */


}
