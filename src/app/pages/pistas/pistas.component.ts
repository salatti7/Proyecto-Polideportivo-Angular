import { Component, OnInit } from '@angular/core';
import { PolideportivoService } from '../../services/polideportivo.service';
import { Pista } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pistas',
  templateUrl: './pistas.component.html',
  styleUrls: ['./pistas.component.css']
})
export class PistasComponent implements OnInit {
  
  pistas: Pista[] = [];
  constructor(public router:Router,private polideportivoService : PolideportivoService) { }

  ngOnInit(): void {
    this.polideportivoService.getPistas()
      .subscribe( resp => {
        console.log(resp);
        this.pistas = resp;
        this.pistas = this.pistas.slice(0,3);
      });
  }
  verTodasPistas(){
    this.router.navigate(['/pistas']);
  }
}
   