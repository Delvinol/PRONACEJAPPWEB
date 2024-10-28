import { TestBed } from '@angular/core/testing';

import { CjdrService } from './cjdr.service';

describe('CjdrService', () => {
  let service: CjdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CjdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
