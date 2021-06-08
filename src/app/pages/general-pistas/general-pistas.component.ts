import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pista, Reserva} from 'src/app/interfaces/interfaces';
import { PolideportivoService } from 'src/app/services/polideportivo.service';

@Component({
  selector: 'app-general-pistas',
  templateUrl: './general-pistas.component.html',
  styleUrls: ['./general-pistas.component.css']
})
export class GeneralPistasComponent implements OnInit {

  pistas: Pista[] = [];
  reserva: Reserva;
  hora: String = "";
  tarifa: String = "";
  fecha: String = "";
  finalData = [];
  precio: number;

  constructor(public router: Router, private polideportivoService : PolideportivoService) { }

  ngOnInit(): void {
    this.polideportivoService.getPistas()
      .subscribe( resp => {
        this.pistas = resp;
      });
  }

  reservarPista(data){
    console.log(data);
    if(data.hora == ''){
      alert("Debe introducir hora");
      return;
    }
    if(data.nombre == ''){
      alert("Debe introducir nombre");
      return;
    }
    if(data.apellido == ''){
      alert("Debe introducir apellido");
      return;
    }
    if(data.email == ''){
      alert("Debe introducir email");
      return;
    }
    if(data.dni == ''){
      alert("Debe introducir dni");
      return;
    }
    this.hora = data.hora.split(':')
    if(parseInt(this.hora[0]) >= 10 && parseInt(this.hora[0]) <= 13){
      this.tarifa = 'maÃ±ana'
      this.precio = parseInt(data.precio) + 7
    }else{
      this.tarifa = 'tarde'
      this.precio = parseInt(data.precio) + 11
    }
    
    this.reserva = {
      reserva_usuario: 'http://localhost:8000/users/3/',
      fecha : data.fecha,
      hora: data.hora,
      nombre_cliente : data.nombre,
      apellido_cliente : data.apellido,
      email_cliente : data.email,
      dni_cliente : data.dni,
      precio_final: this.precio
    }

    console.log(this.reserva);

    //this.polideportivoService.reservarPista(this.reserva);
    this.polideportivoService.reservarPista(this.reserva).subscribe(
      data => {
        console.log(data);
        alert('Ha reservado su pista');
      },
      error => {
        console.log(error);
      }
    );
  }

}