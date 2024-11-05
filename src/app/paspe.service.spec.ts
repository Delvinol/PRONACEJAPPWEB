import { TestBed } from '@angular/core/testing';

import { PaspeService } from './paspe.service';

describe('PaspeService', () => {
  let service: PaspeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaspeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
