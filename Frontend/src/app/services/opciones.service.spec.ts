import { TestBed, inject } from '@angular/core/testing';

import { OpcionesService } from './opciones.service';

describe('OpcionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpcionesService]
    });
  });

  it('should be created', inject([OpcionesService], (service: OpcionesService) => {
    expect(service).toBeTruthy();
  }));
});
