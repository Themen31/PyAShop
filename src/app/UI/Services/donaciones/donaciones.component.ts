import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Donacion } from 'src/app/Application/models/donacion.model';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';



@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionListComponent implements OnInit {

  displayedColumns: string[] = ['idDonacion', 'usuario', 'montoDonar', 'fechaPlantacion', 'acciones'];
  dataSource : MatTableDataSource<Donacion>;


  constructor(private donacionService: DonacionService) { }

  ngOnInit(): void {
    this.getAllDonaciones();
  }

  getAllDonaciones(){
    this.donacionService.getAllDonaciones().subscribe((data:any)=>{
          this.dataSource=new MatTableDataSource(data['body']);
          //console.log(data['body'])
        });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la donacion?');
    if (ok) {
      this.donacionService.delete(id).subscribe(() => {
        this.getAllDonaciones();
      });
    }
  }

}
