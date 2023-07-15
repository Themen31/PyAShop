import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Solicitud } from '../../../Application/models/solicitud.model';
import { SolicitudService } from '../../../Infrastructure/services/solicitud.service';

@Component({
  selector: 'app-new-solicitudes',
  templateUrl: './new-solicitudes.component.html',
  styleUrls: ['./new-solicitudes.component.css']
})
export class NewSolicitudesComponent implements OnInit {


  constructor(public solicitudService: SolicitudService, private router: Router,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  createSolicitud(solicitud:Solicitud) {
    this.solicitudService.create(solicitud).subscribe(
      
      (res) => {
        console.log(res);
        this.router.navigate(['/user/solicitudes']);
      },
      (err) => {
        console.log(err);
      }
      
    );
    this._snackBar.open('Solicitud registrada!!', 'OK', {
      duration: 3000
    });
   
  }
}