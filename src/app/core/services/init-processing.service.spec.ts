import { TestBed } from '@angular/core/testing';
import { InitProcessingService } from './init-processing.service';

describe('InitProcessingService', () => {
  let service: InitProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
