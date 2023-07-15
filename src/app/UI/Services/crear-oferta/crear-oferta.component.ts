import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from '../../../Application/models/oferta.model';
import { OfertaService } from '../../../Infrastructure/services/oferta.service';

@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.component.html',
  styleUrls: ['./crear-oferta.component.css']
})
export class CrearOfertaComponent implements OnInit {

  constructor(public ofertaService: OfertaService, private router: Router) { }

  ngOnInit(): void { }

    crearOferta(oferta: Oferta){
      this.ofertaService.crearOferta(oferta).subscribe(
        (res) => {
          console.log(res);
        //  this.ofertaService.aplicarOferta(oferta.idOferta);
          this.router.navigate(['/admin/ofertas']);
        },
        (err) => {
          console.log(err);
        }
      );
    }

}