import { TestBed } from '@angular/core/testing';

import { PvtService } from './pvt.service';

describe('PvtService', () => {
  let service: PvtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
