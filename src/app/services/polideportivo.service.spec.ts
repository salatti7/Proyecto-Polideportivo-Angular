import { TestBed } from '@angular/core/testing';

import { PolideportivoService } from './polideportivo.service';

describe('PolideportivoService', () => {
  let service: PolideportivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolideportivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
