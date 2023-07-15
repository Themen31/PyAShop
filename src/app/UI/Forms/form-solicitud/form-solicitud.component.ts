import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solicitud } from '../../../Application/models/solicitud.model';
import { SolicitudService } from '../../../Infrastructure/services/solicitud.service';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';
import { Donacion } from 'src/app/Application/models/donacion.model';
import { estadoSolicitud } from '../../../Application/models/estado-solicitud.model';
import { EstadoSolicitudService } from '../../../Infrastructure/services/estado-solicitud.service';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.css']
})
export class FormSolicitudComponent implements OnInit {

  form: FormGroup;
  donacion : Donacion;
  id: number;
  constructor(public donacionService: DonacionService,private solicitudService: SolicitudService,
    private formBuilder:FormBuilder,
    private router:Router,
    private estadoSolicitudService:EstadoSolicitudService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe(params => {
      this.donacionService.get(Number(params.get('id'))).subscribe((donacion : any)=>{
        this.donacion = donacion['body'];
        this.id = donacion['body'].idDonacion;
      })
    })
  }

  @Input() set solicitud(solicitud: any) {
    this.form?.patchValue(solicitud);
  }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  
  estadoSolicitudid: estadoSolicitud [ ];

    getAllEstadoSolicitudes(){
      this.estadoSolicitudService.getAllEstadoSolicitudes().subscribe((data:any)=>{
        this.estadoSolicitudid=data["body"];
        console.log(this.estadoSolicitudid);
      })
    }

    
  
  
    ngOnInit(): void {
      this.getAllEstadoSolicitudes();

      this.form = this.formBuilder.group({

        nombre_solicitud: [
          '',
          [//FALTA VER
            Validators.required,
            Validators.minLength(2),
        //FALTA VER    Validators.maxLength(100),
          ],
        ],
        estadoSolicitud: [
          '',
          [
            Validators.required,
          ],
        ],
        distrito: [
          ''
        ],
        solicitud_donacion: [
          '',
          [
            Validators.required,
          ],
        ],
        donacion:['']
      });
    }
    
    save(){
      this.form.controls['donacion'].setValue(this.donacion);
      this.onSubmit.emit(this.form.value);
      this.router.navigate(['/user/misdonaciones']);
    }

}


