import { TestBed } from '@angular/core/testing';

import { FilterProcessingService } from './filter-processing.service';

describe('FilterProcessingService', () => {
  let service: FilterProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
