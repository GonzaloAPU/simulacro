import { TestBed } from '@angular/core/testing';

import { ApiRacesService } from './api-races.service';

describe('ApiRacesService', () => {
  let service: ApiRacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
