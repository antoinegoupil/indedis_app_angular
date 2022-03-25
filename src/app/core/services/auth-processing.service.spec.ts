import { TestBed } from '@angular/core/testing';

import { AuthProcessingService } from './auth-processing.service';

describe('AuthProcessingService', () => {
  let service: AuthProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
