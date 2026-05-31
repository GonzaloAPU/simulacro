import { TestBed } from '@angular/core/testing';

import { ApivideoService } from './apivideo.service';

describe('ApivideoService', () => {
  let service: ApivideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApivideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
