import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pista } from '../interfaces/interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PolideportivoService {

  private pistas: Pista[] = [];
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

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
}
