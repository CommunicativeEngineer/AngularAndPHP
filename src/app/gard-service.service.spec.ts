import { TestBed } from '@angular/core/testing';

import { GardServiceService } from './gard-service.service';

describe('GardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GardServiceService = TestBed.get(GardServiceService);
    expect(service).toBeTruthy();
  });
});
