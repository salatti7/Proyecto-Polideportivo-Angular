import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pista, Reserva } from '../interfaces/interfaces';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolideportivoService {

  private pistas: Pista[] = [];
  private reserva: Reserva;
  baseurl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
  }

  getPistas() {
    return this.http.get<any>(`${ environment.url }pista/`)
      .pipe(
        tap(
          resp => this.pistas = resp
        )
    );
  }

  getAllPistas(): Observable<any>{
    return this.http.get(this.baseurl + '/pista/', 
    {headers :this.httpHeaders});
  }

  reservarPista( reserva: Reserva){
    let url = 'http://localhost:8000/reserva/';

    return this.http.post(
      url,
      reserva
    )
  };
}