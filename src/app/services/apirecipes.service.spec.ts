import { TestBed } from '@angular/core/testing';

import { ApirecipesService } from './apirecipes.service';

describe('ApirecipesService', () => {
  let service: ApirecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApirecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
