import { TestBed } from '@angular/core/testing';

import { PunkApiServiceService } from './punk-api-service.service';

describe('PunkApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunkApiServiceService = TestBed.get(PunkApiServiceService);
    expect(service).toBeTruthy();
  });
});
