import { TestBed } from '@angular/core/testing';

import { DummsLibService } from './dumms-lib.service';

describe('DummsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummsLibService = TestBed.get(DummsLibService);
    expect(service).toBeTruthy();
  });
});
