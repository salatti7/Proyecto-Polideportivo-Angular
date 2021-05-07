import { Component, OnInit } from '@angular/core';
import { PolideportivoService } from '../../services/polideportivo.service';
import { Pista } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pistas: Pista[] = [];

  constructor( private polideportivoService: PolideportivoService ) { }

  ngOnInit(): void {
    this.polideportivoService.getPistas()
      .subscribe( resp => {
        console.log(resp);
        this.pistas = resp;
      });
  }

}
