import { TestBed } from '@angular/core/testing';

import { PracticaParcialService } from './practica-parcial.service';

describe('PracticaParcialService', () => {
  let service: PracticaParcialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticaParcialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
